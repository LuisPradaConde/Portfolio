import Image from 'next/image';
import {getTranslations} from 'next-intl/server';
import {ArrowUpRight, Sparkles} from 'lucide-react';
import {profile, type Locale} from '@/data/profile';
import {Reveal} from '@/components/ui/reveal';

type HeroSectionProps = {
  locale: Locale;
};

export async function HeroSection({locale}: HeroSectionProps) {
  const t = await getTranslations({locale, namespace: 'accessibility'});

  return (
    <section id="home" className="px-6 pb-18 pt-12 md:pb-24 md:pt-20">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[minmax(0,1.3fr)_minmax(340px,0.82fr)] lg:items-start">
        <Reveal>
          <div className="pt-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--muted-strong)] shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur">
              <Sparkles size={14} className="text-[var(--accent)]" />
              {profile.hero.eyebrow[locale]}
            </div>
            <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[var(--foreground)] md:text-7xl xl:text-[5.7rem]">
              {profile.hero.title[locale]}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
              {profile.hero.description[locale]}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={`/${locale}#contact`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] px-6 py-3.5 text-sm font-medium text-white shadow-[0_18px_40px_rgba(109,124,255,0.28)] transition hover:scale-[1.01] hover:shadow-[0_24px_50px_rgba(109,124,255,0.35)]"
              >
                {profile.hero.primaryCta[locale]}
                <ArrowUpRight size={16} />
              </a>
              <a
                href="/documents/cv-ficticio.pdf"
                className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-[var(--muted-strong)] transition hover:border-[var(--line-strong)] hover:bg-white/[0.05] hover:text-white"
              >
                {profile.hero.secondaryCta[locale]}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <aside className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(17,24,39,0.96),rgba(8,12,24,0.96))] p-5 shadow-[var(--shadow-lg)] md:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(109,124,255,0.22),transparent_35%)]" />
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

            <div className="relative mb-6 overflow-hidden rounded-[1.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(18,24,48,0.96),rgba(8,12,24,0.96))]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.16),transparent_20%),radial-gradient(circle_at_80%_0%,rgba(109,124,255,0.18),transparent_24%)]" />
              <Image
                src="/images/profile-placeholder.svg"
                alt={t('portraitAlt')}
                width={800}
                height={960}
                priority
                className="relative h-auto w-full opacity-95"
              />
            </div>

            <div className="relative">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
                {profile.availability[locale]}
              </p>
              <div className="mt-7 grid gap-4">
                {profile.metrics.map((metric) => (
                  <div
                    key={metric.label.en}
                    className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] px-5 py-4 transition hover:border-[var(--line-strong)] hover:bg-white/[0.05]"
                  >
                    <p className="text-3xl font-semibold tracking-tight text-white">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      {metric.label[locale]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
