"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap } from "lucide-react";
import { EDUCATION } from "@/lib/constants";
import { SectionHeader } from "./ui/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

export function EducationSection() {
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

      /* Education card */
      gsap.set(".education-card", { y: 30, opacity: 0 });
      ScrollTrigger.create({
        trigger: ".education-card",
        start: "top 85%",
        once: true,
        onEnter: () =>
          gsap.to(".education-card", {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          }),
      });

    },
    { scope: containerRef }
  );

  return (
    <section
      className="section section--alt"
      id="education"
      ref={containerRef}
    >
      <div className="container">
        <SectionHeader label="// 04. Formación" title="Educación" />

        <div className="education-card">
          <div className="education-icon">
            <GraduationCap size={28} />
          </div>
          <div>
            <div className="education-degree">{EDUCATION.degree}</div>
            <div className="education-school">{EDUCATION.school}</div>
            <div className="education-period">{EDUCATION.period}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
