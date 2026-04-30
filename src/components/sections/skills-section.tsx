import {getTranslations} from 'next-intl/server';
import {profile, type Locale} from '@/data/profile';
import {SkillBar} from '@/components/portfolio/skill-bar';
import {Reveal} from '@/components/ui/reveal';
import {SectionHeading} from '@/components/ui/section-heading';

type SkillsSectionProps = {
  locale: Locale;
};

export async function SkillsSection({locale}: SkillsSectionProps) {
  const t = await getTranslations({locale, namespace: 'skills'});

  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading eyebrow={t('eyebrow')} title={t('title')} />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {profile.skills.map((skill, index) => (
            <Reveal key={skill.category.en} delay={0.05 * (index + 1)}>
              <SkillBar skill={skill} locale={locale} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
