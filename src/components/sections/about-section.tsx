import {getTranslations} from 'next-intl/server';
import {profile, type Locale} from '@/data/profile';
import {Reveal} from '@/components/ui/reveal';
import {SectionHeading} from '@/components/ui/section-heading';

type AboutSectionProps = {
  locale: Locale;
};

export async function AboutSection({locale}: AboutSectionProps) {
  const t = await getTranslations({locale, namespace: 'about'});

  return (
    <section id="about" className="section-shell px-6 py-12 md:py-16">
      <div className="mx-auto max-w-7xl rounded-[2rem] px-6 py-12 md:px-10 md:py-14">
        <Reveal>
          <SectionHeading
            eyebrow={profile.about.eyebrow[locale]}
            title={profile.about.title[locale]}
            description={profile.about.description[locale]}
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal delay={0.08}>
            <div className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface)] p-7 shadow-[var(--shadow-md)] backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                {t('focusTitle')}
              </p>
              <p className="mt-5 whitespace-pre-line text-base leading-8 text-[var(--muted-strong)]">
                {t('focusBody')}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="rounded-[1.75rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(109,124,255,0.1),rgba(139,92,246,0.06))] p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                {t('specialties')}
              </p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {['Ciberseguridad defensiva', 'Ciberinteligencia aplicada', 'DevSecOps', 'Infraestructura virtual', 'Hardening de sistemas', 'Diseño y securización de redes'].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--line)] bg-black/20 px-3.5 py-2 text-sm text-[var(--muted-strong)]"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
