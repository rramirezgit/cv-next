import {
  EXPERIENCES,
  SOFT_SKILLS,
  SKILL_CATEGORIES,
  EDUCATION,
  LANGUAGES,
  METHODOLOGIES,
} from "@/lib/constants";

/* Single-column, ATS-safe CV: no sidebar, no icons, no tables, standard section headers. */
export function PrintCVATS() {
  return (
    <div className="ats-resume">
      <div className="ats-header">
        <div className="ats-name">Ricardo Ramirez</div>
        <div className="ats-title">Frontend Developer</div>
        <div className="ats-contact">
          rramirez.engineer@gmail.com &nbsp;|&nbsp; +54 11 5562-2734 &nbsp;|&nbsp; Buenos Aires,
          Argentina &nbsp;|&nbsp; linkedin.com/in/ricardoramirez-
        </div>
      </div>

      <div className="ats-section">
        <div className="ats-section-title">Perfil Profesional</div>
        <p className="ats-summary">
          Frontend Developer con sólida trayectoria construyendo interfaces rápidas, accesibles y
          mantenibles para productos SaaS de alto tráfico. Especialista en React, Next.js y
          TypeScript avanzado, con dominio del ecosistema TanStack y foco obsesivo en performance:
          Core Web Vitals, code-splitting y render optimization. Conocimientos de Node.js/NestJS
          para integrarme sin fricción con backend y diseñar contratos de API pensados para el
          frontend.
        </p>
      </div>

      <div className="ats-section">
        <div className="ats-section-title">Experiencia Laboral</div>
        {EXPERIENCES.map((exp) => (
          <div key={exp.company} className="ats-exp-item">
            <div className="ats-exp-header">
              <span className="ats-exp-role">
                {exp.role} · <span className="ats-exp-company">{exp.company}</span>
              </span>
              <span className="ats-exp-date">{exp.date}</span>
            </div>
            {exp.companyDesc && <div className="ats-exp-company-desc">{exp.companyDesc}</div>}
            <ul className="ats-exp-achievements">
              {exp.achievements.map((ach, i) => (
                <li
                  key={i}
                  dangerouslySetInnerHTML={{
                    __html: ach.replace(/<hl>(.*?)<\/hl>/g, "<strong>$1</strong>"),
                  }}
                />
              ))}
            </ul>
            <div className="ats-exp-tech">Stack: {exp.tech.join(", ")}</div>
          </div>
        ))}
      </div>

      <div className="ats-section">
        <div className="ats-section-title">Habilidades</div>
        {SKILL_CATEGORIES.map((cat) => (
          <div key={cat.name} className="ats-skill-row">
            <span className="ats-skill-label">{cat.name}:</span>{" "}
            {cat.skills.map((s) => s.name).join(" · ")}
          </div>
        ))}
        <div className="ats-skill-row">
          <span className="ats-skill-label">Metodologías:</span> {METHODOLOGIES.join(" · ")}
        </div>
      </div>

      <div className="ats-section">
        <div className="ats-section-title">Competencias Clave</div>
        <p className="ats-plain">{SOFT_SKILLS.join(" · ")}</p>
      </div>

      <div className="ats-section">
        <div className="ats-section-title">Educación</div>
        <div className="ats-edu-item">
          <strong>{EDUCATION.degree}</strong> — {EDUCATION.school} ({EDUCATION.period})
        </div>
      </div>

      <div className="ats-section">
        <div className="ats-section-title">Idiomas</div>
        <p className="ats-plain">
          {LANGUAGES.map((l) => `${l.name} (${l.level})`).join(" · ")}
        </p>
      </div>
    </div>
  );
}
