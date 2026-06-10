"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Briefcase, Mail, Phone } from "lucide-react";
import { ABOUT_INFO } from "@/lib/constants";
import { SectionHeader } from "./ui/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const ICON_MAP: Record<string, React.ElementType> = {
  MapPin,
  Briefcase,
  Mail,
  Phone,
};

export function About() {
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

      /* About text */
      gsap.set(".about-text", { y: 30, opacity: 0 });
      ScrollTrigger.create({
        trigger: ".about-text",
        start: "top 85%",
        once: true,
        onEnter: () =>
          gsap.to(".about-text", {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          }),
      });

      /* Info items */
      gsap.set(".about-info-item", { x: 40, opacity: 0 });
      ScrollTrigger.create({
        trigger: ".about-info",
        start: "top 85%",
        once: true,
        onEnter: () =>
          gsap.to(".about-info-item", {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.12,
            ease: "power2.out",
          }),
      });

    },
    { scope: containerRef }
  );

  return (
    <section className="section" id="about" ref={containerRef}>
      <div className="container">
        <SectionHeader label="// 01. Sobre mí" title="Perfil Profesional" />

        <div className="about-content">
          <div className="about-text">
            <p>
              <strong>Frontend Developer Senior</strong> con{" "}
              <strong>+8 años</strong> construyendo interfaces modernas,
              performantes y mantenibles. Especialista en{" "}
              <strong>React, Next.js y TypeScript</strong>, con conocimientos
              sólidos en backend (<strong>Node.js, NestJS</strong>) para
              resolver soluciones full-stack end-to-end. Integro{" "}
              <strong>LLMs y prompt engineering</strong> en flujos de desarrollo
              y producto (OpenAI, Anthropic, agentes con tool-use). Foco en
              arquitectura escalable, performance y UX empresarial.
            </p>
          </div>
          <div className="about-info">
            {ABOUT_INFO.map((item) => {
              const Icon = ICON_MAP[item.icon];
              return (
                <div key={item.label} className="about-info-item">
                  <div className="about-info-icon">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="about-info-label">{item.label}</div>
                    <div className="about-info-value">{item.value}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
