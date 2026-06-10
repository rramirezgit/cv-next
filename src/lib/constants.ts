import type {
  ExperienceItem,
  SkillCategory,
  Certification,
  Language,
  Interest,
  StatItem,
  InfoItem,
  ContactItem,
  SocialLink,
  PrintProject,
  PrintHighlight,
} from "@/types";

export const NAV_LINKS = [
  { href: "#about", label: "Perfil" },
  { href: "#experience", label: "Experiencia" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Educación" },
  { href: "#contact", label: "Contacto" },
] as const;

export const HERO_STACK_TAGS = [
  "React.js",
  "Next.js",
  "TypeScript",
  "TanStack Query",
  "React Native",
  "Storybook",
  "Tailwind",
  "Node.js",
] as const;

export const ABOUT_TEXT =
  "Senior Frontend Developer con +8 años construyendo interfaces rápidas, accesibles y mantenibles para productos SaaS de alto tráfico. Especialista en React, Next.js (App Router, SSR/ISR) y TypeScript avanzado, con dominio del ecosistema TanStack y foco obsesivo en performance: Core Web Vitals, code-splitting y render optimization. Conocimientos de Node.js/NestJS que me permiten integrarme sin fricción con backend y diseñar contratos de API pensados para el frontend.";

export const ABOUT_INFO: InfoItem[] = [
  { icon: "MapPin", label: "Ubicación", value: "Buenos Aires, Argentina" },
  { icon: "Briefcase", label: "Experiencia", value: "+8 años en desarrollo" },
  { icon: "Mail", label: "Email", value: "rramirez.engineer@gmail.com" },
  { icon: "Phone", label: "Teléfono", value: "+54 11 5562-2734" },
];

export const STATS: StatItem[] = [
  { value: 8, suffix: "+", label: "Años de experiencia" },
  { value: 50, suffix: "K+", label: "Usuarios impactados" },
  { value: 30, suffix: "+", label: "Empresas beneficiadas" },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Senior Frontend Developer · Tech Lead",
    company: "Neodaten",
    companyDesc: "Ecosistema SaaS multi-tenant con productos en producción para múltiples industrias",
    date: "Mar 2023 — Presente",
    achievements: [
      'Lidero el frontend de un <hl>ecosistema SaaS multi-tenant</hl> en monorepo <hl>Nx + pnpm</hl> con Next.js Multi-Zones (App Router, SSR/ISR)',
      'Definí la arquitectura de UI compartida: <hl>design system con Storybook</hl> y componentes tipados con <hl>TypeScript avanzado</hl> reutilizados en todos los productos',
      'Optimización de performance: <hl>Core Web Vitals</hl>, code-splitting, caching de data-fetching con <hl>TanStack Query</hl> y reducción de bundle en las apps principales',
      'Co-lideré el frontend de los productos <hl>ADAM</hl>, <hl>Michin</hl>, <hl>Pala</hl>, <hl>OneChain</hl>, <hl>Luup</hl> · web (Next.js) + mobile (React Native con Expo)',
      'Mentoría técnica a equipo de <hl>7 desarrolladores</hl>, code review y flujos de desarrollo asistidos por IA para automatizar tareas repetitivas',
    ],
    tech: [
      "Next.js",
      "React.js",
      "TypeScript",
      "TanStack Query",
      "React Native",
      "Storybook",
      "Nx",
      "NestJS",
      "AWS",
    ],
  },
  {
    role: "Senior Frontend Developer",
    company: "Extendeal",
    companyDesc: "Plataforma B2B de procurement farmacéutico para LATAM",
    date: "Jun 2021 — Feb 2023",
    achievements: [
      'Reduje el tiempo de carga del módulo principal con <hl>+50K usuarios mensuales</hl> mediante code-splitting, lazy loading y memoización de componentes React críticos',
      'Lideré la migración de JavaScript a TypeScript en un proyecto enterprise de <hl>200K+ líneas</hl>, introduciendo tipado estricto y patrones de <hl>TypeScript avanzado</hl> (generics, discriminated unions)',
      'Construí un Design System de componentes reutilizables adoptado por <hl>5 equipos</hl>, estandarizando UI y acelerando feature delivery',
      'Implementé data-fetching con <hl>TanStack Query</hl>: caching, invalidación y estados de servidor predecibles',
      'Sostuve la calidad con testing automatizado (Jest) y monitoreo de errores y performance con Datadog y Sentry',
    ],
    tech: [
      "React.js",
      "TypeScript",
      "TanStack Query",
      "Redux",
      "Styled Components",
      "Jest",
      "Docker",
      "AWS",
    ],
  },
  {
    role: "Frontend Developer (JavaScript)",
    company: "Aeroterra S.A",
    companyDesc: "Empresa especializada en software GIS para industria petrolera",
    date: "Ago 2019 — Jun 2021",
    achievements: [
      'Desarrollé la interfaz de una plataforma GIS en tiempo real para <hl>+5,000 instalaciones petroleras</hl> con Vue.js + ArcGIS API',
      'Construí <hl>12+ widgets interactivos</hl> de visualización de datos, con foco en rendering eficiente de mapas y grandes volúmenes de información',
      'Optimicé el consumo de APIs (<hl>+100K registros diarios</hl>) desde el cliente, reduciendo el tiempo de generación de reportes de <hl>8 min a 3.6 min</hl>',
      'Lideré workshops técnicos y documentación para el onboarding de <hl>3 nuevos devs</hl>',
    ],
    tech: [
      "Vue.js",
      "JavaScript (ES6+)",
      "ArcGIS API",
      "DOJO",
      "Node.js",
      "REST APIs",
    ],
  },
  {
    role: "Frontend Developer Jr",
    company: "öppen.io",
    companyDesc: "Startup de desarrollo de sistemas ERP",
    date: "May 2018 — Ago 2019",
    achievements: [
      'Desarrollé la UI del módulo de Stock/Inventario usado por <hl>+30 empresas PyME</hl>, con React, Redux y Material-UI',
      'Construí un dashboard en tiempo real con gráficos y alertas automáticas para anticipar quiebres de stock',
      'Consumí e iteré junto a backend una API REST en Node.js/Express (<hl>25+ endpoints</hl>), aportando visión de contratos pensados para el frontend',
      'Implementé autenticación con <hl>JWT</hl> y manejo de estado global con Redux',
    ],
    tech: [
      "React.js",
      "Redux",
      "Material-UI",
      "JavaScript",
      "Node.js/Express",
      "PostgreSQL",
      "Git",
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "Code",
    skills: [
      { name: "React.js / React Native" },
      { name: "Next.js (App Router · SSR · ISR)" },
      { name: "TypeScript avanzado (generics · strict)" },
      { name: "TanStack Query · Table / Redux / Zustand" },
      { name: "Tailwind / Styled Components" },
      { name: "Storybook · Design Systems" },
    ],
  },
  {
    name: "Performance",
    icon: "Sparkles",
    skills: [
      { name: "Core Web Vitals (LCP · INP · CLS)" },
      { name: "Code-splitting · Lazy loading" },
      { name: "Render optimization · Memoización" },
      { name: "Bundle analysis · Caching" },
    ],
  },
  {
    name: "Testing & Calidad",
    icon: "Server",
    skills: [
      { name: "Jest · Testing Library" },
      { name: "Monitoreo (Datadog · Sentry)" },
      { name: "Accesibilidad (a11y)" },
    ],
  },
  {
    name: "Backend (apoyo) & Tools",
    icon: "Wrench",
    skills: [
      { name: "Node.js · NestJS · REST APIs" },
      { name: "PostgreSQL · Prisma" },
      { name: "Git · GitHub Actions · CI/CD" },
      { name: "Docker · AWS" },
    ],
  },
];

export const METHODOLOGIES = [
  "SCRUM",
  "Agile",
  "Clean Architecture",
  "SOLID",
  "TDD",
  "Code Review",
  "CI/CD",
  "Microservices",
] as const;

export const EDUCATION = {
  degree: "Ingeniería en Sistemas Informáticos",
  school: "Universidad Abierta Interamericana",
  period: "2019 — 2023",
};

export const CERTIFICATIONS: Certification[] = [];

export const LANGUAGES: Language[] = [
  { name: "Español", level: "Nativo", percentage: 100 },
  {
    name: "Inglés",
    level: "Técnico · Lectura y escritura",
    percentage: 55,
  },
];

export const INTERESTS: Interest[] = [
  { name: "Arquitectura de Software", icon: "BookOpen" },
  { name: "Clean Code", icon: "Code" },
  { name: "Performance Optimization", icon: "Zap" },
  { name: "Desarrollo de Productos", icon: "Layers" },
  { name: "Mentoring", icon: "Users" },
  { name: "Open Source", icon: "Github" },
];

export const CONTACT_ITEMS: ContactItem[] = [
  { icon: "Mail", text: "rramirez.engineer@gmail.com", href: "mailto:rramirez.engineer@gmail.com" },
  { icon: "Phone", text: "+54 11 5562-2734", href: "tel:+541155622734" },
  { icon: "MapPin", text: "Buenos Aires, Argentina" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/ricardoramirez-",
    icon: "Linkedin",
  },
  {
    name: "Email",
    url: "mailto:rramirez.engineer@gmail.com",
    icon: "Mail",
  },
];

export const PRINT_HIGHLIGHTS: PrintHighlight[] = [
  { value: "5+", label: "productos SaaS\nen producción" },
  { value: "+50K", label: "usuarios/mes\nimpactados" },
  { value: "200K+", label: "líneas migradas\nJS → TypeScript" },
  { value: "+5K", label: "instalaciones GIS\nen tiempo real" },
];

export const PRINT_PROJECTS: PrintProject[] = [
  {
    name: "ADAM360 Ecosystem",
    desc: "Arquitectura SaaS multi-tenant en monorepo Nx con frontends Next.js Multi-Zones. Productos en producción: ADAM, Michin, Pala, OneChain, Lupp.",
    tech: "Next.js · NestJS · PostgreSQL · Prisma · Auth0 · Nx",
  },
  {
    name: "Design System Enterprise",
    desc: "Librería de componentes reutilizables adoptada por 5 equipos en Extendeal. Tokens, variants y documentación Storybook.",
    tech: "React · TypeScript · Storybook · Styled Components",
  },
  {
    name: "Plataforma GIS Petrolera",
    desc: "Sistema de monitoreo geoespacial en tiempo real para +5K instalaciones con mapas interactivos y dashboards.",
    tech: "Vue.js · ArcGIS SDK · Node.js · SQL Server",
  },
];

export const SOFT_SKILLS = [
  "Liderazgo Técnico",
  "Mentoría de Equipos",
  "Code Review",
  "Arquitectura de Software",
  "Comunicación Efectiva",
  "Resolución de Problemas",
  "Estimación y Planificación",
  "Documentación Técnica",
  "Optimización de Performance",
  "CI/CD & DevOps",
] as const;
