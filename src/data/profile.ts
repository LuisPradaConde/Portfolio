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
    es: 'Ciberseguridad · DevSecOps · Gestión de vulnerabilidades · Infraestructura segura',
    en: 'Cybersecurity · DevSecOps · Vulnerability management · Secure infrastructure'
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
      es: 'Ingeniero de ciberseguridad especializado en DevSecOps, redes seguras e infraestructura crítica en el sector defensa, orientado a la gestión de vulnerabilidades. Diseño, despliego y automatizo infraestructura segura, e identifico y corrijo las vulnerabilidades que la afectan mediante hardening, segmentación y configuración segura. Certificado en Qualys VMDR.',
      en: 'Cybersecurity engineer specialized in DevSecOps, secure networks and critical infrastructure in the defense sector, focused on vulnerability management. I design, deploy and automate secure infrastructure, and identify and remediate the vulnerabilities that affect it through hardening, segmentation and secure configuration. Qualys VMDR certified.'
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
      es: 'DevSecOps, infraestructura segura y gestión de vulnerabilidades aplicadas a la protección de entornos críticos.',
      en: 'DevSecOps, secure infrastructure and vulnerability management applied to the protection of critical environments.'
    },
    description: {
      es: 'Actualmente trabajo en ISDEFE como ingeniero de ciberseguridad en el sector defensa, centrado en DevSecOps, diseño de redes seguras e infraestructura. Securizar esa infraestructura implica identificar sus vulnerabilidades, valorar su riesgo y aplicar las medidas de corrección de forma automatizada y reproducible, una línea que estoy reforzando hacia la gestión de vulnerabilidades.',
      en: 'I currently work at ISDEFE as a cybersecurity engineer in the defense sector, focused on DevSecOps, secure network design and infrastructure. Securing that infrastructure means identifying its vulnerabilities, assessing their risk and applying remediation in an automated, reproducible way, an area I am strengthening towards vulnerability management.'
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
        es: 'Diseño, despliegue y automatización de infraestructura en entornos críticos (Ansible, Terraform, Docker) • Diseño y segmentación de redes seguras • Identificación y corrección de vulnerabilidades en la infraestructura desplegada: hardening, segmentación y configuración segura • Despliegue y configuración de servicios en entornos virtualizados • Soporte en operación técnica de entornos críticos',
        en: 'Design, deployment and automation of infrastructure in critical environments (Ansible, Terraform, Docker) • Design and segmentation of secure networks • Identification and remediation of vulnerabilities in deployed infrastructure: hardening, segmentation and secure configuration • Deployment and configuration of services in virtualized environments • Support in the technical operation of critical environments'
      }
    }
  ] satisfies ExperienceItem[],
  education: [
    {
      institution: 'Qualys',
      degree: {
        es: 'Qualys Certified Specialist – Vulnerability Management Detection and Response (VMDR)',
        en: 'Qualys Certified Specialist – Vulnerability Management Detection and Response (VMDR)'
      },
      period: 'Octubre 2026',
      highlights: [
        {
          es: 'Inventario de activos, escaneo y detección de vulnerabilidades',
          en: 'Asset inventory, scanning and vulnerability detection'
        },
        {
          es: 'Priorización basada en riesgo (TruRisk), informes y dashboards',
          en: 'Risk-based prioritization (TruRisk), reporting and dashboards'
        }
      ]
    },
    {
      institution: 'CCN-CERT · Centro Criptológico Nacional',
      degree: {
        es: 'Cursos de ciberseguridad del CCN (plataforma ÁNGELES)',
        en: 'CCN cybersecurity courses (ÁNGELES platform)'
      },
      period: 'Septiembre 2023',
      highlights: [
        {es: 'Esquema Nacional de Seguridad (ENS)', en: 'National Security Framework (ENS)'},
        {es: 'Análisis y gestión de riesgos de los sistemas de información', en: 'Information systems risk analysis and management'},
        {es: 'Auditorías del ENS y gestión de cibercrisis', en: 'ENS audits and cyber crisis management'}
      ]
    },
    {
      institution: 'OpenWebinars',
      degree: {
        es: 'Cursos de Terraform y despliegues con Ansible',
        en: 'Terraform and Ansible deployment courses'
      },
      period: 'Octubre 2023',
      highlights: [
        {es: 'Infraestructura como código y automatización de despliegues', en: 'Infrastructure as code and deployment automation'}
      ]
    },
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
        'Gestión y análisis de vulnerabilidades',
        'CVE, CVSS, CWE y priorización basada en riesgo',
        'Operación en entornos SOC',
        'Herramientas: Qualys VMDR, Nessus, Wireshark'
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
        'Herramientas: Maltego, MISP (formación)'
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
      {label: 'LinkedIn', href: 'https://www.linkedin.com/in/luis-prada-conde'},
      {label: 'Teléfono: +34 622 735 535'}
    ] satisfies ContactLink[]
  }
};
