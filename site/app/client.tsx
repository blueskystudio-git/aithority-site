"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";

function useHashPrefix() {
  const pathname = usePathname();
  return pathname === "/" ? "" : "/";
}

export function SiteNav() {
  const prefix = useHashPrefix();

  useEffect(() => {
    const nav = document.querySelector<HTMLElement>('nav[role="navigation"]');
    if (!nav) return;

    const onScroll = () => {
      nav.style.borderBottomColor =
        window.scrollY > 60
          ? "rgba(242, 240, 235, 0.15)"
          : "rgba(242, 240, 235, 0.1)";
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav role="navigation" aria-label="Main navigation">
      <a href="/" className="nav-logo" aria-label="Aithority home">
        AITH<span>O</span>RITY
      </a>
      <ul className="nav-links">
        <li><a href={`${prefix}#services`}>Services</a></li>
        <li><a href={`${prefix}#tracks`}>Tracks</a></li>
        <li><a href={`${prefix}#how`}>Process</a></li>
        <li><a href={`${prefix}#tech`}>Stack</a></li>
      </ul>
      <a href={`${prefix}#cta`} className="nav-cta">Get a Proposal</a>
      <MobileMenu hashPrefix={prefix} />
    </nav>
  );
}

function MobileMenu({ hashPrefix }: { hashPrefix: string }) {
  const [open, setOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    document.body.style.overflow = "";
    hamburgerRef.current?.focus();
  }, []);

  // Move focus into the menu when it opens
  useEffect(() => {
    if (open) {
      closeRef.current?.focus();
    }
  }, [open]);

  // Escape to close, Tab trap within the open menu
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab" || !menuRef.current) return;

      const focusable = menuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <>
      <button
        ref={hamburgerRef}
        className="nav-hamburger"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => {
          setOpen(true);
          document.body.style.overflow = "hidden";
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        ref={menuRef}
        id="mobile-menu"
        className={`mobile-menu${open ? " open" : ""}`}
        role="dialog"
        aria-modal={true}
        aria-label="Navigation menu"
        aria-hidden={!open}
      >
        <button ref={closeRef} className="mobile-close" onClick={close} aria-label="Close menu">
          &times;
        </button>
        <a href={`${hashPrefix}#services`} onClick={close}>Services</a>
        <a href={`${hashPrefix}#tracks`} onClick={close}>Tracks</a>
        <a href={`${hashPrefix}#how`} onClick={close}>Process</a>
        <a href={`${hashPrefix}#tech`} onClick={close}>Stack</a>
        <a href={`${hashPrefix}#cta`} className="btn-primary" onClick={close}>Get a Proposal</a>
      </div>
    </>
  );
}

export function ScrollAnimations() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      document.querySelectorAll(".fade-in").forEach((el) => el.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const siblings = entry.target.parentElement?.querySelectorAll(
              ".fade-in:not(.visible)"
            );
            let delay = 0;
            siblings?.forEach((el, idx) => {
              if (el === entry.target) delay = idx * 80;
            });
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, Math.min(delay, 400));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
