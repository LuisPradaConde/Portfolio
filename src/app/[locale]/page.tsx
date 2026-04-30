import {getTranslations, setRequestLocale} from 'next-intl/server';
import {Footer} from '@/components/layout/footer';
import {Navbar} from '@/components/layout/navbar';
import {AboutSection} from '@/components/sections/about-section';
import {ContactSection} from '@/components/sections/contact-section';
import {EducationSection} from '@/components/sections/education-section';
import {ExperienceSection} from '@/components/sections/experience-section';
import {HeroSection} from '@/components/sections/hero-section';
import {ProjectsSection} from '@/components/sections/projects-section';
import {SkillsSection} from '@/components/sections/skills-section';
import {type Locale} from '@/data/profile';

type HomePageProps = {
  params: Promise<{locale: Locale}>;
};

export default async function HomePage({params}: HomePageProps) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations({locale, namespace: 'accessibility'});

  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-neutral-950 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        {t('skipToContent')}
      </a>
      <Navbar locale={locale} />
      <main id="content" className="min-h-screen">
        <HeroSection locale={locale} />
        <AboutSection locale={locale} />
        <ExperienceSection locale={locale} />
        <EducationSection locale={locale} />
        <ProjectsSection locale={locale} />
        <SkillsSection locale={locale} />
        <ContactSection locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
