"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EXPERIENCES } from "@/lib/constants";
import { SectionHeader } from "./ui/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      /* Section header */
      const header = containerRef.current?.querySelector(".section-header");
      if (header) {
        const label = header.querySelector(".section-label");
        const title = header.querySelector(".section-title");
        if (label) gsap.set(label, { x: -30, opacity: 0 });
        if (title) gsap.set(title, { y: 20, opacity: 0 });
        ScrollTrigger.create({
          trigger: header,
          start: "top 85%",
          once: true,
          onEnter: () => {
            const tl = gsap.timeline();
            if (label)
              tl.to(label, { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" });
            if (title)
              tl.to(
                title,
                { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
                "-=0.3"
              );
          },
        });
      }

      /* Timeline items */
      containerRef.current
        ?.querySelectorAll<HTMLElement>(".timeline-item")
        .forEach((item) => {
          const dot = item.querySelector(".timeline-dot");
          const card = item.querySelector(".timeline-card");
          if (dot) gsap.set(dot, { scale: 0 });
          if (card) gsap.set(card, { x: -40, opacity: 0 });
          ScrollTrigger.create({
            trigger: item,
            start: "top 85%",
            once: true,
            onEnter: () => {
              const tl = gsap.timeline();
              if (dot)
                tl.to(dot, { scale: 1, duration: 0.4, ease: "back.out(2)" });
              if (card)
                tl.to(
                  card,
                  { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
                  "-=0.2"
                );
            },
          });
        });
    },
    { scope: containerRef }
  );

  return (
    <section
      className="section section--alt"
      id="experience"
      ref={containerRef}
    >
      <div className="container">
        <SectionHeader
          label="// 02. Trayectoria"
          title="Experiencia Laboral"
        />

        <div className="timeline">
          {EXPERIENCES.map((exp) => (
            <div key={exp.company} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <div className="timeline-role">{exp.role}</div>
                    <div className="timeline-company">{exp.company}</div>
                  </div>
                  <span className="timeline-date">{exp.date}</span>
                </div>
                {exp.companyDesc && (
                  <div className="timeline-company-desc">{exp.companyDesc}</div>
                )}
                <ul className="timeline-achievements" role="list">
                  {exp.achievements.map((ach, i) => (
                    <li
                      key={i}
                      dangerouslySetInnerHTML={{
                        __html: ach.replace(
                          /<hl>(.*?)<\/hl>/g,
                          '<span class="highlight">$1</span>'
                        ),
                      }}
                    />
                  ))}
                </ul>
                <div className="timeline-tech">
                  {exp.tech.map((t) => (
                    <span key={t} className="timeline-tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
