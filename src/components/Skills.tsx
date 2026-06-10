"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Server, Database, Wrench, Clock, Sparkles } from "lucide-react";
import { SKILL_CATEGORIES, METHODOLOGIES } from "@/lib/constants";
import { SectionHeader } from "./ui/SectionHeader";
import { SkillBar } from "./ui/SkillBar";

gsap.registerPlugin(ScrollTrigger);

const ICON_MAP: Record<string, React.ElementType> = {
  Code,
  Server,
  Database,
  Wrench,
  Clock,
  Sparkles,
};

export function Skills() {
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

      /* Skill categories */
      gsap.set(".skill-category", { scale: 0.85, opacity: 0 });
      ScrollTrigger.create({
        trigger: ".skills-grid",
        start: "top 85%",
        once: true,
        onEnter: () =>
          gsap.to(".skill-category", {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            stagger: 0.12,
            ease: "power2.out",
          }),
      });

      /* Skill chips */
      gsap.set(".skill-chip", { y: 8, opacity: 0 });
      ScrollTrigger.create({
        trigger: ".skills-grid",
        start: "top 85%",
        once: true,
        onEnter: () =>
          gsap.to(".skill-chip", {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.04,
            ease: "power2.out",
          }),
      });

      /* Methodology badges */
      gsap.set(".skill-badge", { scale: 0, opacity: 0 });
      ScrollTrigger.create({
        trigger: ".skill-badges",
        start: "top 85%",
        once: true,
        onEnter: () =>
          gsap.to(".skill-badge", {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            stagger: 0.06,
            ease: "back.out(2)",
          }),
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="section" id="skills" ref={containerRef}>
      <div className="container">
        <SectionHeader
          label="// 03. Tecnologías"
          title="Stack Tecnológico"
        />

        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = ICON_MAP[cat.icon];
            return (
              <div key={cat.name} className="skill-category">
                <div className="skill-category-header">
                  <div className="skill-category-icon">
                    <Icon size={20} />
                  </div>
                  <div className="skill-category-name">{cat.name}</div>
                </div>
                {cat.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} />
                ))}
              </div>
            );
          })}
        </div>

        {/* Methodologies */}
        <div className="methodologies-section" style={{ marginTop: 40 }}>
          <div className="skill-category-header" style={{ marginBottom: 20 }}>
            <div className="skill-category-icon">
              <Clock size={20} />
            </div>
            <div className="skill-category-name">
              Metodologías &amp; Prácticas
            </div>
          </div>
          <div className="skill-badges">
            {METHODOLOGIES.map((m) => (
              <span key={m} className="skill-badge">
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
