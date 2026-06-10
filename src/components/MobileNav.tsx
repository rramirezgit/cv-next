"use client";

import { useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";

interface MobileNavProps {
  isOpen: boolean;
  activeId: string;
  onClose: () => void;
}

export function MobileNav({ isOpen, activeId, onClose }: MobileNavProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  return (
    <nav
      className={`mobile-nav ${isOpen ? "open" : ""}`}
      aria-label="Menú principal"
      aria-hidden={!isOpen}
    >
      {NAV_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={`nav-link ${activeId === link.href.slice(1) ? "active" : ""}`}
          onClick={onClose}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
