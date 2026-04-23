import {getTranslations} from 'next-intl/server';
import {profile, type Locale} from '@/data/profile';
import {MobileNav} from '@/components/layout/mobile-nav';
import {LanguageSwitcher} from '@/components/ui/language-switcher';

type NavbarProps = {
  locale: Locale;
};

export async function Navbar({locale}: NavbarProps) {
  const t = await getTranslations({locale, namespace: 'nav'});

  const items = [
    {id: 'home', label: t('home')},
    {id: 'about', label: t('about')},
    {id: 'experience', label: t('experience')},
    {id: 'education', label: t('education')},
    {id: 'skills', label: t('skills')},
    {id: 'projects', label: t('projects')},
    {id: 'contact', label: t('contact')}
  ];

  return (
    <header className="sticky top-0 z-40 px-4 pt-4 md:px-6">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border border-[var(--line)] bg-[rgba(8,12,24,0.78)] px-4 py-3 shadow-[var(--shadow-md)] backdrop-blur-2xl md:px-5">
        <div className="absolute inset-px rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] opacity-60" />
        <a href={`/${locale}#home`} className="relative min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[var(--muted)]">
            {profile.name}
          </p>
          <p className="truncate text-sm text-[var(--muted-strong)]">
            {profile.role[locale]}
          </p>
        </a>

        <nav className="relative hidden items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] p-1 lg:flex">
          {items.map((item) => (
            <a
              key={item.id}
              href={`/${locale}#${item.id}`}
              className="rounded-full px-4 py-2 text-sm text-[var(--muted)] transition hover:bg-white/[0.05] hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="relative flex items-center gap-2">
          <LanguageSwitcher />
          <MobileNav
            locale={locale}
            items={items}
            openLabel={t('openMenu')}
            closeLabel={t('closeMenu')}
          />
        </div>
      </div>
    </header>
  );
}
