'use client';

import {useLocale, useTranslations} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';

export function LanguageSwitcher() {
  const t = useTranslations('switcher');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function handleChange(nextLocale: 'es' | 'en') {
    if (nextLocale === locale) {
      return;
    }

    router.replace(pathname, {locale: nextLocale});
  }

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-[var(--line)] bg-white/[0.03] p-1"
      aria-label={t('label')}
    >
      {(['es', 'en'] as const).map((item) => {
        const active = item === locale;

        return (
          <button
            key={item}
            type="button"
            onClick={() => handleChange(item)}
            className={`rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] transition ${
              active
                ? 'bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] text-white shadow-[0_10px_24px_rgba(109,124,255,0.35)]'
                : 'text-[var(--muted)] hover:bg-white/[0.05] hover:text-white'
            }`}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
