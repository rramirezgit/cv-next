"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { CONTACT_ITEMS, SOCIAL_LINKS } from "@/lib/constants";
import { GradientText } from "./ui/GradientText";

gsap.registerPlugin(ScrollTrigger);

const CONTACT_ICON_MAP: Record<string, React.ElementType> = {
  Mail,
  Phone,
  MapPin,
};

const SOCIAL_ICON_MAP: Record<string, React.ElementType> = {
  Linkedin,
  Github,
  Mail,
};

export function Footer() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      /* Footer info */
      gsap.set(".footer-info", { y: 30, opacity: 0 });
      ScrollTrigger.create({
        trigger: ".footer-content",
        start: "top 85%",
        once: true,
        onEnter: () =>
          gsap.to(".footer-info", {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          }),
      });

      /* Social links */
      gsap.set(".footer-social-link", { scale: 0, opacity: 0 });
      ScrollTrigger.create({
        trigger: ".footer-social-links",
        start: "top 90%",
        once: true,
        onEnter: () =>
          gsap.to(".footer-social-link", {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            stagger: 0.1,
            ease: "back.out(2)",
          }),
      });
    },
    { scope: containerRef }
  );

  return (
    <footer className="footer" id="contact" ref={containerRef}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h2 className="footer-heading">
              <GradientText>Trabajemos juntos</GradientText>
            </h2>
            <p className="footer-desc">
              Estoy abierto a nuevas oportunidades y proyectos desafiantes. No
              dudes en contactarme.
            </p>
            <div className="footer-contact-list">
              {CONTACT_ITEMS.map((item) => {
                const Icon = CONTACT_ICON_MAP[item.icon];
                const Tag = item.href ? "a" : "span";
                return (
                  <Tag
                    key={item.text}
                    href={item.href}
                    className="footer-contact-item"
                  >
                    <Icon size={18} />
                    {item.text}
                  </Tag>
                );
              })}
            </div>
          </div>
          <div className="footer-social">
            <div className="footer-social-label">Conectemos</div>
            <div className="footer-social-links">
              {SOCIAL_LINKS.map((link) => {
                const Icon = SOCIAL_ICON_MAP[link.icon];
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target={link.url.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.url.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="footer-social-link"
                    aria-label={link.name}
                  >
                    {link.icon === "Linkedin" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width={20}
                        height={20}
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ) : (
                      <Icon size={20} />
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            &copy; 2026 Ricardo Ramirez. Todos los derechos reservados.
          </span>
          <span className="mono">// built with passion</span>
        </div>
      </div>
    </footer>
  );
}
