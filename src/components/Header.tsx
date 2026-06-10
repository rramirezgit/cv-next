"use client";

import { useState, useEffect, useCallback, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { useActiveSection } from "@/hooks/useActiveSection";
import { MobileNav } from "./MobileNav";

const sectionIds = NAV_LINKS.map((l) => l.href.slice(1));

const emptySubscribe = () => () => {};
const useIsHydrated = () =>
  useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

export function Header() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mounted = useIsHydrated();
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    document.body.style.overflow = "";
  }, []);

  const toggleMobile = useCallback(() => {
    setMobileOpen((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? "hidden" : "";
      return next;
    });
  }, []);

  return (
    <>
      <header
        className={`header ${scrolled ? "scrolled" : ""}`}
        id="header"
        style={scrolled ? { backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" } : undefined}
      >
        <div className="header-inner">
          <a href="#hero" className="header-logo">
            <span className="bracket">&lt;</span>RR
            <span className="bracket"> /&gt;</span>
          </a>

          <nav className="nav" id="nav">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link ${activeId === link.href.slice(1) ? "active" : ""}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <button
              className="theme-toggle"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Cambiar tema"
            >
              {mounted && (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
            </button>
            <button
              className="mobile-toggle"
              onClick={toggleMobile}
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <MobileNav
        isOpen={mobileOpen}
        activeId={activeId}
        onClose={closeMobile}
      />
    </>
  );
}
