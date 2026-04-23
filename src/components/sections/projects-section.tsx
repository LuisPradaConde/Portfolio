import {getTranslations} from 'next-intl/server';
import {profile, type Locale} from '@/data/profile';
import {ProjectCard} from '@/components/portfolio/project-card';
import {Reveal} from '@/components/ui/reveal';
import {SectionHeading} from '@/components/ui/section-heading';

type ProjectsSectionProps = {
  locale: Locale;
};

export async function ProjectsSection({locale}: ProjectsSectionProps) {
  const t = await getTranslations({locale, namespace: 'projects'});

  return (
    <section id="projects" className="section-shell px-6 py-12 md:py-16">
      <div className="mx-auto max-w-7xl rounded-[2rem] px-6 py-12 md:px-10 md:py-14">
        <Reveal>
          <SectionHeading eyebrow={t('eyebrow')} title={t('title')} />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {profile.projects.map((project, index) => (
            <Reveal key={project.name} delay={0.08 * (index + 1)}>
              <ProjectCard project={project} locale={locale} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
