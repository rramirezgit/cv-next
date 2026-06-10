"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Download, Mail } from "lucide-react";
import { HERO_STACK_TAGS } from "@/lib/constants";
import { Button } from "./ui/Button";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) {
        gsap.set(
          ".hero-greeting, .hero-name, .hero-title, .hero-stack, .hero-cta, .hero-avatar, .hero-scroll",
          { autoAlpha: 1 }
        );
        return;
      }

      const heroTL = gsap.timeline({ defaults: { ease: "power3.out" } });

      /* Greeting */
      gsap.set(".hero-greeting", { y: 24 });
      heroTL.to(".hero-greeting", { autoAlpha: 1, y: 0, duration: 0.6 });

      /* Name letter-by-letter */
      const nameEl = containerRef.current?.querySelector(
        ".hero-name .gradient-text"
      ) as HTMLElement | null;
      if (nameEl) {
        const chars = nameEl.querySelectorAll<HTMLElement>(".gradient-char");
        gsap.set(chars, { y: 40, opacity: 0 });
        heroTL.to(".hero-name", { autoAlpha: 1, duration: 0.01 }, "-=0.2");
        heroTL.to(
          chars,
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(1.7)",
            stagger: 0.03,
          },
          "-=0.1"
        );
      }

      /* Title */
      gsap.set(".hero-title", { y: 24 });
      heroTL.to(".hero-title", { autoAlpha: 1, y: 0, duration: 0.6 }, "-=0.1");

      /* Stack tags */
      gsap.set(".hero-stack-tag", { scale: 0, opacity: 0 });
      heroTL.to(".hero-stack", { autoAlpha: 1, duration: 0.01 }, "-=0.2");
      heroTL.to(
        ".hero-stack-tag",
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          ease: "back.out(2)",
          stagger: 0.06,
        },
        "-=0.1"
      );

      /* CTAs */
      gsap.set(".hero-cta", { y: 20 });
      heroTL.to(".hero-cta", { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.1");

      /* Avatar */
      gsap.set(".hero-avatar", { scale: 0.3 });
      heroTL.to(
        ".hero-avatar",
        {
          autoAlpha: 1,
          scale: 1,
          duration: 1.2,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.3"
      );

      /* Scroll indicator */
      heroTL.to(".hero-scroll", { autoAlpha: 1, duration: 0.6 }, "-=0.6");

      /* Orb parallax */
      gsap.utils.toArray<HTMLElement>(".hero-orb").forEach((orb, i) => {
        gsap.to(orb, {
          y: [80, -60, 40][i] || 50,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="hero" id="hero" ref={containerRef}>
      <div className="hero-bg" />
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />
      <div className="hero-grid" />

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-greeting gsap-hidden">{"// Hola, soy"}</span>
            <h1 className="hero-name gsap-hidden">
              <span className="gradient-text">
                {"Ricardo Ramirez".split("").map((char, i) => (
                  <span key={i} className="inline-block gradient-char">
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
            </h1>
            <p className="hero-title gsap-hidden">
              <strong>Senior Frontend Developer</strong> especializado en{" "}
              <strong>React</strong> · <strong>Next.js</strong> ·{" "}
              <strong>TypeScript</strong>
            </p>
            <div className="hero-stack gsap-hidden">
              {HERO_STACK_TAGS.map((tag) => (
                <span key={tag} className="hero-stack-tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="hero-cta gsap-hidden">
              <Button
                variant="primary"
                onClick={() => window.print()}
                title="Se abrirá el diálogo de impresión donde puede guardar como PDF"
              >
                <Download size={18} />
                Descargar CV (PDF)
              </Button>
              <Button as="a" variant="secondary" href="#contact">
                <Mail size={18} />
                Contáctame
              </Button>
            </div>
          </div>
          <div className="hero-avatar gsap-hidden">
            <div className="hero-avatar-ring" />
            <div className="hero-avatar-inner">
              <Image
                src="/avatar.png"
                alt="Ricardo Ramirez"
                width={320}
                height={320}
                className="hero-avatar-photo"
                priority
              />
            </div>
            <div className="hero-avatar-status" aria-hidden="true" />
            <span className="sr-only">Disponible para trabajar</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll gsap-hidden">
        <span>scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
