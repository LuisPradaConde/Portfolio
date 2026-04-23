export type Locale = 'es' | 'en';

type LocalizedText = Record<Locale, string>;

type Metric = {
  value: string;
  label: LocalizedText;
};

type ExperienceItem = {
  company: string;
  role: LocalizedText;
  period: LocalizedText;
  location: string;
  summary: LocalizedText;
};

type EducationItem = {
  institution: string;
  degree: LocalizedText;
  period: string;
};

type SkillItem = {
  name: string;
  level: number;
  category: LocalizedText;
};

type ProjectItem = {
  name: string;
  type: LocalizedText;
  summary: LocalizedText;
  stack: string[];
};

type ContactLink = {
  label: string;
  href: string;
};

export const profile = {
  name: 'Adrian Navarro',
  role: {
    es: 'Senior Frontend Engineer',
    en: 'Senior Frontend Engineer'
  },
  location: 'Madrid, Spain',
  availability: {
    es: 'Disponible para oportunidades selectivas en producto digital',
    en: 'Available for selective digital product opportunities'
  },
  hero: {
    eyebrow: {
      es: 'Portfolio profesional',
      en: 'Professional portfolio'
    },
    title: {
      es: 'Diseno y desarrollo experiencias web premium para productos digitales exigentes.',
      en: 'I design and build premium web experiences for demanding digital products.'
    },
    description: {
      es: 'Perfil ficticio orientado a frontend senior con foco en arquitectura, rendimiento, accesibilidad y detalle visual.',
      en: 'Fictional senior frontend profile focused on architecture, performance, accessibility and visual detail.'
    },
    primaryCta: {
      es: 'Contactar',
      en: 'Get in touch'
    },
    secondaryCta: {
      es: 'Descargar CV',
      en: 'Download CV'
    }
  },
  about: {
    eyebrow: {
      es: 'Sobre mi',
      en: 'About me'
    },
    title: {
      es: 'Una trayectoria construida entre producto, ingenieria y ejecucion impecable.',
      en: 'A career built at the intersection of product, engineering and meticulous execution.'
    },
    description: {
      es: 'He trabajado en equipos SaaS y plataformas B2B liderando interfaces complejas, sistemas de diseno y entregas con alto impacto en negocio.',
      en: 'I have worked across SaaS teams and B2B platforms leading complex interfaces, design systems and high-impact product delivery.'
    }
  },
  metrics: [
    {
      value: '8+',
      label: {
        es: 'anos de experiencia',
        en: 'years of experience'
      }
    },
    {
      value: '24',
      label: {
        es: 'lanzamientos relevantes',
        en: 'major launches'
      }
    },
    {
      value: '4',
      label: {
        es: 'equipos multidisciplinares',
        en: 'cross-functional teams'
      }
    }
  ] satisfies Metric[],
  experience: [
    {
      company: 'Northline Cloud',
      role: {
        es: 'Lead Frontend Engineer',
        en: 'Lead Frontend Engineer'
      },
      period: {
        es: '2022 - Presente',
        en: '2022 - Present'
      },
      location: 'Remote / Madrid',
      summary: {
        es: 'Lidero la evolucion del frontend de una plataforma B2B, mejorando consistencia visual, escalabilidad del codigo y rendimiento de flujos criticos.',
        en: 'I lead the frontend evolution of a B2B platform, improving visual consistency, code scalability and performance across critical flows.'
      }
    },
    {
      company: 'Aster Labs',
      role: {
        es: 'Senior React Developer',
        en: 'Senior React Developer'
      },
      period: {
        es: '2019 - 2022',
        en: '2019 - 2022'
      },
      location: 'Barcelona',
      summary: {
        es: 'Desarrolle productos de analitica empresarial con foco en paneles complejos, internacionalizacion y accesibilidad.',
        en: 'I built enterprise analytics products focused on complex dashboards, internationalization and accessibility.'
      }
    },
    {
      company: 'Studio Meridian',
      role: {
        es: 'Frontend Developer',
        en: 'Frontend Developer'
      },
      period: {
        es: '2017 - 2019',
        en: '2017 - 2019'
      },
      location: 'Valencia',
      summary: {
        es: 'Participe en proyectos web para clientes premium, combinando precision visual, rendimiento y buenas practicas de desarrollo.',
        en: 'I contributed to premium client web projects, combining visual precision, performance and solid engineering practices.'
      }
    }
  ] satisfies ExperienceItem[],
  education: [
    {
      institution: 'Universidad Politecnica de Madrid',
      degree: {
        es: 'Grado en Ingenieria Informatica',
        en: 'BSc in Computer Engineering'
      },
      period: '2012 - 2016'
    },
    {
      institution: 'IEBS Digital School',
      degree: {
        es: 'Programa en Product Management y UX',
        en: 'Program in Product Management and UX'
      },
      period: '2018'
    }
  ] satisfies EducationItem[],
  skills: [
    {
      name: 'React / Next.js',
      level: 95,
      category: {es: 'Frontend', en: 'Frontend'}
    },
    {
      name: 'TypeScript',
      level: 92,
      category: {es: 'Arquitectura', en: 'Architecture'}
    },
    {
      name: 'Design Systems',
      level: 90,
      category: {es: 'Producto', en: 'Product'}
    },
    {
      name: 'Performance',
      level: 88,
      category: {es: 'Calidad', en: 'Quality'}
    },
    {
      name: 'Accessibility',
      level: 86,
      category: {es: 'Calidad', en: 'Quality'}
    }
  ] satisfies SkillItem[],
  projects: [
    {
      name: 'Atlas Workspace',
      type: {
        es: 'Plataforma SaaS',
        en: 'SaaS platform'
      },
      summary: {
        es: 'Suite de productividad para equipos operativos con dashboards avanzados, permisos granulares e interfaz modular.',
        en: 'Productivity suite for operations teams with advanced dashboards, granular permissions and a modular interface.'
      },
      stack: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion']
    },
    {
      name: 'Ledger Flow',
      type: {
        es: 'Fintech B2B',
        en: 'B2B fintech'
      },
      summary: {
        es: 'Portal financiero orientado a analisis y reporting, optimizado para claridad visual y rendimiento en grandes volumenes de datos.',
        en: 'Financial portal focused on analysis and reporting, optimized for visual clarity and performance with large data sets.'
      },
      stack: ['React', 'Charts', 'Accessibility', 'Design System']
    },
    {
      name: 'Helix Console',
      type: {
        es: 'Herramienta interna',
        en: 'Internal tool'
      },
      summary: {
        es: 'Consola operacional para soporte y customer success con flujos rapidos, trazabilidad y experiencia unificada.',
        en: 'Operational console for support and customer success with fast flows, traceability and a unified experience.'
      },
      stack: ['Next.js', 'Internationalization', 'Testing', 'Analytics']
    }
  ] satisfies ProjectItem[],
  contact: {
    email: 'adrian.navarro@ficticio.dev',
    links: [
      {label: 'LinkedIn', href: 'https://www.linkedin.com/in/adrian-navarro'},
      {label: 'GitHub', href: 'https://github.com/adrian-navarro'},
      {label: 'Behance', href: 'https://www.behance.net/adrian-navarro'}
    ] satisfies ContactLink[]
  }
};
