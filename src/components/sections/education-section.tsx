import {getTranslations} from 'next-intl/server';
import {profile, type Locale} from '@/data/profile';
import {Reveal} from '@/components/ui/reveal';
import {SectionHeading} from '@/components/ui/section-heading';

type EducationSectionProps = {
  locale: Locale;
};

export async function EducationSection({locale}: EducationSectionProps) {
  const t = await getTranslations({locale, namespace: 'education'});

  return (
    <section id="education" className="section-shell px-6 py-12 md:py-16">
      <div className="mx-auto max-w-7xl rounded-[2rem] px-6 py-12 md:px-10 md:py-14">
        <Reveal>
          <SectionHeading eyebrow={t('eyebrow')} title={t('title')} />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {profile.education.map((item, index) => (
            <Reveal key={`${item.institution}-${item.period}`} delay={0.08 * (index + 1)}>
              <article className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface)] p-8 shadow-[var(--shadow-md)] backdrop-blur transition hover:border-[var(--line-strong)] hover:bg-[rgba(18,24,48,0.92)]">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                  {item.period}
                </p>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-white">
                  {item.degree[locale]}
                </h3>
                <p className="mt-3 text-base text-[var(--muted)]">
                  {item.institution}
                </p>
                <ul className="mt-5 space-y-2 text-sm leading-6 text-[var(--muted)]">
                  {item.highlights.map((highlight) => (
                    <li key={highlight.en} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                      <span>{highlight[locale]}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
