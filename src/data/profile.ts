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
  highlights: LocalizedText[];
};

type SkillGroup = {
  category: LocalizedText;
  items: string[];
};

type ProjectItem = {
  name: string;
  href?: string;
  type: LocalizedText;
  summary: LocalizedText;
  details: LocalizedText[];
  stack: string[];
};

type ContactLink = {
  label: string;
  href?: string;
};

export const profile = {
  name: 'Luis Prada Conde',
  role: {
    es: 'Ingeniero de Ciberseguridad',
    en: 'Cybersecurity Engineer'
  },
  location: 'Madrid, Spain',
  availability: {
    es: 'Ciberseguridad · Ciberinteligencia · DevSecOps · Infraestructura segura',
    en: 'Cybersecurity · Cyber intelligence · DevSecOps · Secure infrastructure'
  },
  hero: {
    eyebrow: {
      es: 'Portfolio profesional',
      en: 'Professional portfolio'
    },
    title: {
      es: 'Ingeniería en ciberseguridad para entornos críticos y de alta exigencia',
      en: 'Cybersecurity engineering for critical and highly demanding environments'
    },
    description: {
      es: 'Ingeniero informático especializado en ciberseguridad y ciberinteligencia, con experiencia en protección de infraestructuras, hardening de sistemas y automatización de entornos técnicos complejos. He trabajado en el diseño y despliegue de redes seguras, implementación de servicios críticos y análisis orientado a la defensa, aportando soluciones robustas en contextos donde la seguridad es un factor estratégico.',
      en: 'Computer engineer specialized in cybersecurity and cyber intelligence, with experience in infrastructure protection, system hardening and automation of complex technical environments. I have worked on the design and deployment of secure networks, implementation of critical services and defense-oriented analysis, delivering robust solutions in contexts where security is a strategic factor.'
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
      es: 'Sobre mí',
      en: 'About me'
    },
    title: {
      es: 'Ciberseguridad, ciberinteligencia y automatización aplicadas a la protección de entornos críticos.',
      en: 'Cybersecurity, cyber intelligence and automation applied to the protection of critical environments.'
    },
    description: {
      es: 'Actualmente trabajo en ISDEFE como ingeniero informático, con foco en ciberseguridad, ciberinteligencia e infraestructura virtual en contextos vinculados al sector defensa. Mi trabajo combina hardening de sistemas, automatización de entornos técnicos, despliegue de servicios, diseño de redes seguras y análisis de información para reforzar la postura defensiva y apoyar la toma de decisiones.',
      en: 'I currently work at ISDEFE as a computer engineer, focused on cybersecurity, cyber intelligence and virtual infrastructure in contexts linked to the defense sector. My work combines system hardening, automation of technical environments, service deployment, secure network design and information analysis to strengthen defensive posture and support decision-making.'
    }
  },
  metrics: [
    {
      value: '2023',
      label: {
        es: 'Inicio de trayectoria profesional en ISDEFE',
        en: 'Start of professional career at ISDEFE'
      }
    },
    {
      value: 'Madrid',
      label: {
        es: 'Disponibilidad presencial y colaboración remota',
        en: 'On-site availability and remote collaboration'
      }
    },
    {
      value: 'Defensa',
      label: {
        es: 'Especialización en entornos técnicos del sector defensa',
        en: 'Specialization in technical environments within the defense sector'
      }
    }
  ] satisfies Metric[],
  experience: [
    {
      company: 'ISDEFE · Jornada completa · Modalidad híbrida',
      role: {
        es: 'Ingeniero de Ciberseguridad',
        en: 'Cybersecurity Engineer'
      },
      period: {
        es: 'Septiembre 2023 - Actualidad',
        en: 'September 2023 - Present'
      },
      location: 'Madrid',
      summary: {
        es: 'Hardening de sistemas y servicios en entornos controlados • Automatización de tareas operativas e infraestructura • Diseño y segmentación de redes seguras • Despliegue y configuración de servicios en entornos virtualizados • Análisis de información orientado a ciberinteligencia • Soporte en operación técnica de entornos críticos',
        en: 'Hardening of systems and services in controlled environments • Automation of operational and infrastructure tasks • Design and segmentation of secure networks • Deployment and configuration of services in virtualized environments • Information analysis focused on cyber intelligence • Support in the technical operation of critical environments'
      }
    }
  ] satisfies ExperienceItem[],
  education: [
    {
      institution: 'International Business School (IMF) / Deloitte',
      degree: {
        es: 'Máster en Ciberseguridad',
        en: 'Master in Cybersecurity'
      },
      period: 'Septiembre 2022 - Septiembre 2024',
      highlights: [
        {
          es: 'Especialización en seguridad de la información y protección de sistemas',
          en: 'Specialization in information security and systems protection'
        },
        {
          es: 'Enfoque práctico en entornos empresariales y casos reales',
          en: 'Practical focus on business environments and real-world cases'
        },
        {
          es: 'Desarrollo de conocimientos en ciberseguridad aplicada y análisis',
          en: 'Development of knowledge in applied cybersecurity and analysis'
        }
      ]
    },
    {
      institution: 'Universidad de A Coruña · Facultad de Informática',
      degree: {
        es: 'Grado en Ingeniería Informática',
        en: 'BSc in Computer Engineering'
      },
      period: 'Septiembre 2017 - Noviembre 2022',
      highlights: [
        {
          es: 'Formación en fundamentos de programación, sistemas y redes',
          en: 'Training in programming fundamentals, systems and networks'
        },
        {
          es: 'Base técnica en arquitectura de sistemas e infraestructura',
          en: 'Technical foundation in system architecture and infrastructure'
        },
        {
          es: 'Desarrollo de capacidades analíticas y resolución de problemas',
          en: 'Development of analytical and problem-solving skills'
        }
      ]
    }
  ] satisfies EducationItem[],
  skills: [
    {
      category: {es: 'Seguridad defensiva', en: 'Defensive security'},
      items: [
        'Hardening de sistemas',
        'Blue Team',
        'Análisis de vulnerabilidades',
        'Operación en entornos SOC',
        'Herramientas: Nessus, Wireshark'
      ]
    },
    {
      category: {es: 'Pentesting y análisis técnico', en: 'Pentesting and technical analysis'},
      items: [
        'Pentesting',
        'Reconocimiento y enumeración',
        'Evaluación técnica de sistemas',
        'Herramientas: Nmap, Metasploit, Maltego'
      ]
    },
    {
      category: {es: 'Ciberinteligencia', en: 'Cyber intelligence'},
      items: [
        'Análisis de ciberinteligencia',
        'Explotación y correlación de información',
        'Herramientas: MISP, PICO'
      ]
    },
    {
      category: {es: 'DevSecOps e infraestructura', en: 'DevSecOps and infrastructure'},
      items: [
        'Automatización de infraestructura',
        'Infraestructura como código (IaC)',
        'Contenedores y virtualización',
        'Herramientas: Ansible, Terraform, Packer, Docker, VMware, VirtualBox'
      ]
    },
    {
      category: {es: 'Sistemas y cloud', en: 'Systems and cloud'},
      items: [
        'Administración de sistemas Linux',
        'Distribuciones: Debian, Ubuntu',
        'Shell scripting',
        'Cloud: AWS',
        'Redes y seguridad: Fortigate'
      ]
    },
    {
      category: {es: 'Desarrollo y documentación', en: 'Development and documentation'},
      items: [
        'Lenguajes: Python, C, Java, SQL',
        'Documentación técnica',
        'Generación de informes (LaTeX)'
      ]
    }
  ] satisfies SkillGroup[],
  projects: [
    {
      name: 'Bodegol',
      href: 'https://github.com/LuisPradaConde/Bodegol',
      type: {
        es: 'PWA de porras privadas · Mundial 2026',
        en: 'Private prediction pool PWA · 2026 World Cup'
      },
      summary: {
        es: 'Aplicación web progresiva creada para el Mundial 2026, que permitió organizar porras privadas, pronosticar partidos y resultados globales del torneo, y seguir la clasificación de cada grupo.',
        en: 'A progressive web app built for the 2026 World Cup, enabling private prediction pools, match and tournament predictions, and group leaderboards.'
      },
      details: [
        {
          es: 'Más de 1.000 usuarios registrados y más de 200 usuarios activos al día durante el torneo',
          en: 'Over 1,000 registered users and more than 200 daily active users during the tournament'
        },
        {
          es: 'Pronósticos de marcador por partido y predicciones globales del torneo',
          en: 'Match score predictions and tournament-wide predictions'
        },
        {
          es: 'Ligas privadas para competir con amigos y consultar clasificaciones',
          en: 'Private leagues for competing with friends and viewing standings'
        },
        {
          es: 'Mercados sorpresa rotatorios para añadir variedad a cada jornada',
          en: 'Rotating surprise markets that add variety to each matchday'
        }
      ],
      stack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'PWA']
    },
    {
      name: 'Locked Shields 2025',
      type: {
        es: 'Ejercicio internacional de ciberdefensa',
        en: 'International cyber defense exercise'
      },
      summary: {
        es: 'Participación en un ejercicio de ciberdefensa en vivo organizado por el NATO Cooperative Cyber Defence Centre of Excellence.',
        en: 'Participation in Locked Shields 2025, a live cyber defense exercise organized by the NATO Cooperative Cyber Defence Centre of Excellence.'
      },
      details: [
        {
          es: 'Respuesta ante incidentes en escenarios simulados',
          en: 'Incident response in simulated scenarios'
        },
        {
          es: 'Contención y mitigación de ataques en infraestructuras críticas',
          en: 'Containment and mitigation of attacks on critical infrastructure'
        },
        {
          es: 'Recuperación de servicios comprometidos',
          en: 'Recovery of compromised services'
        },
        {
          es: 'Análisis de vulnerabilidades y evaluación de impacto',
          en: 'Vulnerability analysis and impact assessment'
        },
        {
          es: 'Trabajo en equipo dentro de un entorno Blue Team',
          en: 'Teamwork within a Blue Team environment'
        }
      ],
      stack: ['Cyber Defense', 'Incident Response', 'Blue Team', 'Infraestructura crítica']
    },
    {
      name: 'Trabajo de Fin de Máster',
      type: {
        es: 'Análisis de vulnerabilidades de un entorno OpenEMR',
        en: 'Vulnerability analysis of an OpenEMR environment'
      },
      summary: {
        es: 'Pentesting sobre un sistema de registros médicos electrónicos en un entorno de prueba controlado, con el fin de identificar y explotar vulnerabilidades y proponer medidas de remediación.',
        en: 'Penetration testing on an electronic medical records system in a controlled test environment, to identify and exploit vulnerabilities and propose remediation measures.'
      },
      details: [{
          es: 'Metodología estructurada: reconocimiento pasivo y activo, escaneo, explotación y análisis de resultados',
          en: 'Structured methodology: passive and active reconnaissance, scanning, exploitation and results analysis'
        },
        {
          es: 'Identificación y explotación de vulnerabilidades sobre la aplicación y su configuración web',
          en: 'Identification and exploitation of vulnerabilities over the web application and its configuration'
        },
        {
          es: 'Elaboración de informe ejecutivo con hallazgos y medidas de remediación',
          en: 'Drafting of an executive report with findings and remediation measures'
        },
        {
          es: 'Conclusiones sobre la necesidad de auditorías de seguridad continuas y buenas prácticas',
          en: 'Conclusions on the need for continuous security audits and best practices'
        }],
      stack: ['Kali Linux', 'Nmap', 'Nikto', 'Gobuster', 'OWASP ZAP', 'Skipfish', 'Pentesting']
    },
    {
      name: 'Trabajo de Fin de Grado',
      type: {
        es: 'Clustering aplicado a detección de anomalías en redes',
        en: 'Anomaly detection in SDN networks'
      },
      summary: {
        es: 'Proyecto centrado en el uso de técnicas de clustering como fase previa a la detección de anomalías en flujos de datos de red.',
        en: 'Project focused on applying clustering techniques as a preliminary step for detecting anomalies in data flows within software-defined networks.'
      },
      details: [
        {
          es: 'Implementación de algoritmos de clustering',
          en: 'Implementation of clustering algorithms'
        },
        {
          es: 'Análisis de datos de tráfico de red',
          en: 'Network traffic data analysis'
        },
        {
          es: 'Identificación de patrones y comportamientos anómalos',
          en: 'Identification of anomalous patterns and behaviors'
        }
      ],
      stack: ['Clustering', 'Data Analysis', 'Redes', 'Análisis de tráfico']
    }
  ] satisfies ProjectItem[],
  contact: {
    email: 'luispradaconde@gmail.com',
    links: [
      {label: 'LinkedIn', href: 'https://www.linkedin.com/in/luis-prada-conde-036a99230'},
      {label: 'Teléfono: +34 622 735 535'}
    ] satisfies ContactLink[]
  }
};
