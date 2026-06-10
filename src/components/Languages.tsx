"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BookOpen,
  Code,
  Zap,
  Layers,
  Users,
  Github,
} from "lucide-react";
import { LANGUAGES, INTERESTS } from "@/lib/constants";
import { SectionHeader } from "./ui/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const ICON_MAP: Record<string, React.ElementType> = {
  BookOpen,
  Code,
  Zap,
  Layers,
  Users,
  Github,
};

export function LanguagesSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      /* Section headers */
      containerRef.current
        ?.querySelectorAll<HTMLElement>(".section-header")
        .forEach((header) => {
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
                tl.to(label, {
                  x: 0,
                  opacity: 1,
                  duration: 0.5,
                  ease: "power2.out",
                });
              if (title)
                tl.to(
                  title,
                  { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
                  "-=0.3"
                );
            },
          });
        });

      /* Language cards */
      gsap.set(".lang-card", { x: -30, opacity: 0 });
      ScrollTrigger.create({
        trigger: ".languages-grid",
        start: "top 85%",
        once: true,
        onEnter: () =>
          gsap.to(".lang-card", {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.15,
            ease: "power2.out",
          }),
      });

      /* Interest tags */
      gsap.set(".interest-tag", { scale: 0, opacity: 0 });
      ScrollTrigger.create({
        trigger: ".interests-tags",
        start: "top 85%",
        once: true,
        onEnter: () =>
          gsap.to(".interest-tag", {
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
    <section className="section" id="languages" ref={containerRef}>
      <div className="container">
        <SectionHeader label="// 06. Idiomas" title="Idiomas" />

        <div className="languages-grid">
          {LANGUAGES.map((lang) => (
            <div key={lang.name} className="lang-card">
              <div className="lang-name">{lang.name}</div>
              <div className="lang-level">{lang.level}</div>
              <div
                className="lang-bar"
                role="progressbar"
                aria-valuenow={lang.percentage}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={lang.name}
              >
                <div
                  className="lang-bar-fill"
                  style={{ width: `${lang.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Interests */}
        <SectionHeader
          label="// 07. Intereses"
          title="Intereses"
          className="interests-header"
        />

        <div className="interests-tags">
          {INTERESTS.map((interest) => {
            const Icon = ICON_MAP[interest.icon];
            return (
              <span key={interest.name} className="interest-tag">
                <Icon size={16} />
                {interest.name}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
