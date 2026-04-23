import {getTranslations} from 'next-intl/server';
import {profile, type Locale} from '@/data/profile';
import {ExperienceTimeline} from '@/components/portfolio/experience-timeline';
import {Reveal} from '@/components/ui/reveal';
import {SectionHeading} from '@/components/ui/section-heading';

type ExperienceSectionProps = {
  locale: Locale;
};

export async function ExperienceSection({locale}: ExperienceSectionProps) {
  const t = await getTranslations({locale, namespace: 'experience'});

  return (
    <section id="experience" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading eyebrow={t('eyebrow')} title={t('title')} />
        </Reveal>
        <Reveal delay={0.08} className="mt-12">
          <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-8 shadow-[var(--shadow-lg)] backdrop-blur md:p-10">
            <ExperienceTimeline items={profile.experience} locale={locale} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
