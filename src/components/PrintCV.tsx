import { EXPERIENCES, SOFT_SKILLS } from "@/lib/constants";

const SIDEBAR_SKILLS = [
  {
    label: "Frontend",
    tags: ["React", "Next.js", "TypeScript Avanzado", "TanStack Query", "React Native", "Tailwind", "Storybook"],
  },
  {
    label: "Performance",
    tags: ["Core Web Vitals", "Code-splitting", "Lazy loading", "Render optimization", "Bundle size"],
  },
  {
    label: "Testing & Calidad",
    tags: ["Jest", "Testing Library", "Datadog · Sentry", "a11y"],
  },
  { label: "Backend (apoyo)", tags: ["Node.js", "NestJS", "REST APIs", "PostgreSQL"] },
  { label: "Tools", tags: ["Git", "CI/CD", "Docker", "AWS"] },
];

const SIDEBAR_METHODS = ["SCRUM", "Agile", "SOLID", "TDD", "Clean Arch", "Microservices"];

/* This is a Server Component — no "use client" */
export function PrintCV() {
  return (
    <div className="cv-print" aria-hidden="true">
      {/* Sidebar */}
      <aside className="cv-sidebar">
        <div className="cv-sidebar-header">
          <div className="cv-sidebar-avatar">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/avatar.png" alt="Ricardo Ramirez" className="cv-sidebar-photo" />
          </div>
          <div className="cv-sidebar-name">Ricardo Ramirez</div>
          <div className="cv-sidebar-title">Senior Frontend Developer</div>
        </div>

        {/* Contact */}
        <div>
          <div className="cv-sidebar-section-title">// Contacto</div>
          <a href="mailto:rramirez.engineer@gmail.com" className="cv-sidebar-contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} width={9} height={9}>
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
            </svg>
            rramirez.engineer@gmail.com
          </a>
          <a href="tel:+541155622734" className="cv-sidebar-contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} width={9} height={9}>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +54 11 5562-2734
          </a>
          <span className="cv-sidebar-contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} width={9} height={9}>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
            Buenos Aires, Argentina
          </span>
          <a href="https://linkedin.com/in/ricardoramirez-" className="cv-sidebar-contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: "10pt", height: "10pt" }}>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            linkedin.com/in/ricardoramirez-
          </a>
        </div>

        {/* Skills */}
        <div>
          <div className="cv-sidebar-section-title">// Stack Tecnológico</div>
          {SIDEBAR_SKILLS.map((group) => (
            <div key={group.label} className="cv-sidebar-skill-group">
              <div className="cv-sidebar-skill-label">{group.label}</div>
              <div className="cv-sidebar-skill-tags">
                {group.tags.map((tag) => (
                  <span key={tag} className="cv-sidebar-skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Methodologies */}
        <div>
          <div className="cv-sidebar-section-title">// Metodologías</div>
          <div className="cv-sidebar-methods">
            {SIDEBAR_METHODS.map((m) => (
              <span key={m} className="cv-sidebar-method-tag">{m}</span>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <div className="cv-sidebar-section-title">// Idiomas</div>
          <div className="cv-sidebar-lang-item">
            <span className="cv-sidebar-lang-name">Español</span>
            <span className="cv-sidebar-lang-level">Nativo</span>
          </div>
          <div className="cv-sidebar-lang-bar">
            <div className="cv-sidebar-lang-bar-fill" style={{ width: "100%" }} />
          </div>
          <div className="cv-sidebar-lang-item" style={{ marginTop: "6pt" }}>
            <span className="cv-sidebar-lang-name">Inglés</span>
            <span className="cv-sidebar-lang-level">Técnico · Lectura</span>
          </div>
          <div className="cv-sidebar-lang-bar">
            <div className="cv-sidebar-lang-bar-fill" style={{ width: "55%" }} />
          </div>
        </div>

      </aside>

      {/* Main Content */}
      <div className="cv-main">
        {/* Summary */}
        <div className="cv-main-summary">
          <strong>Senior Frontend Developer</strong> con <strong>+8 años</strong> construyendo
          interfaces rápidas, accesibles y mantenibles para productos SaaS de alto tráfico.
          Especialista en <strong>React, Next.js y TypeScript avanzado</strong>, con dominio del
          ecosistema <strong>TanStack</strong> y foco obsesivo en performance:{" "}
          <strong>Core Web Vitals, code-splitting y render optimization</strong>. Conocimientos de
          Node.js/NestJS para integrarme sin fricción con backend y diseñar contratos de API
          pensados para el frontend.
        </div>

        {/* Experience */}
        <div>
          <div className="cv-main-section-title">// Experiencia Laboral</div>
          {EXPERIENCES.map((exp) => (
            <div key={exp.company} className="cv-exp-item">
              <div className="cv-exp-header">
                <span className="cv-exp-role">{exp.role}</span>
                <span className="cv-exp-date">{exp.date}</span>
              </div>
              <div className="cv-exp-company">{exp.company}</div>
              {exp.companyDesc && (
                <div className="cv-exp-company-desc">{exp.companyDesc}</div>
              )}
              <ul className="cv-exp-achievements">
                {getPrintAchievements(exp.company).map((ach, i) => (
                  <li
                    key={i}
                    dangerouslySetInnerHTML={{
                      __html: ach.replace(
                        /<hl>(.*?)<\/hl>/g,
                        '<span class="hl">$1</span>'
                      ),
                    }}
                  />
                ))}
              </ul>
              <div className="cv-exp-tech">
                {exp.tech.map((t) => (
                  <span key={t} className="cv-exp-tech-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div>
          <div className="cv-main-section-title">// Competencias Clave</div>
          <div className="cv-softskills">
            {SOFT_SKILLS.map((s) => (
              <span key={s} className="cv-softskill-tag">{s}</span>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="cv-main-section-title">// Educación</div>
          <div className="cv-edu-item">
            <div className="cv-edu-degree">Ingeniería en Sistemas Informáticos</div>
            <div className="cv-edu-school">Universidad Abierta Interamericana</div>
            <div className="cv-edu-period">2019 — 2023</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Print-specific shorter achievements */
function getPrintAchievements(company: string): string[] {
  switch (company) {
    case "Neodaten":
      return [
        'Lidero el frontend de un <hl>ecosistema SaaS multi-tenant</hl> en monorepo <hl>Nx + pnpm</hl> con Next.js Multi-Zones (App Router, SSR/ISR)',
        'Definí la arquitectura de UI compartida: <hl>design system con Storybook</hl> y componentes con <hl>TypeScript avanzado</hl> reutilizados en todos los productos',
        'Performance: <hl>Core Web Vitals</hl>, code-splitting, caching con <hl>TanStack Query</hl> y reducción de bundle en las apps principales',
        'Co-lideré el frontend de <hl>ADAM</hl>, <hl>Michin</hl>, <hl>Pala</hl>, <hl>OneChain</hl>, <hl>Luup</hl> · web (Next.js) + mobile (React Native/Expo)',
        'Mentoría técnica a equipo de <hl>7 devs</hl> · code review · flujos de desarrollo asistidos por IA',
      ];
    case "Extendeal":
      return [
        'Reduje el tiempo de carga del módulo principal con <hl>+50K usuarios/mes</hl> mediante code-splitting, lazy loading y memoización en React',
        'Lideré migración JS → TypeScript en proyecto de <hl>200K+ líneas</hl>, con tipado estricto y <hl>TypeScript avanzado</hl> (generics, discriminated unions)',
        'Construí Design System adoptado por <hl>5 equipos</hl>, estandarizando UI y acelerando feature delivery',
        'Implementé data-fetching con <hl>TanStack Query</hl>: caching, invalidación y estados de servidor predecibles',
        'Testing automatizado con Jest · monitoreo de errores y performance con Datadog y Sentry',
      ];
    case "Aeroterra S.A":
      return [
        'Desarrollé la interfaz de una plataforma GIS en tiempo real para <hl>+5,000 instalaciones petroleras</hl> con Vue.js + ArcGIS API',
        'Construí <hl>12+ widgets</hl> interactivos de visualización de datos · rendering eficiente de mapas y grandes volúmenes',
        'Optimicé el consumo de APIs (<hl>+100K registros/día</hl>) desde el cliente, reduciendo reportes de <hl>8 min a 3.6 min</hl>',
        'Lideré workshops técnicos y documentación para onboarding de <hl>3 nuevos devs</hl>',
      ];
    case "öppen.io":
      return [
        'Desarrollé la UI del módulo de Stock/Inventario usado por <hl>+30 empresas PyME</hl> con React, Redux y Material-UI',
        'Dashboard en tiempo real con gráficos y alertas automáticas para anticipar quiebres de stock',
        'Consumí e iteré junto a backend una API REST en Node.js/Express (<hl>25+ endpoints</hl>) con visión de contratos para el frontend',
        'Implementé autenticación con <hl>JWT</hl> y manejo de estado global con Redux',
      ];
    default:
      return [];
  }
}
