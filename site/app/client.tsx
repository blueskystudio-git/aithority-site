"use client";

import { useEffect, useState, useCallback } from "react";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => {
    setOpen(false);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [close]);

  return (
    <>
      <button
        className="nav-hamburger"
        aria-label="Open menu"
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
        className={`mobile-menu${open ? " open" : ""}`}
        role="dialog"
        aria-modal={true}
        aria-label="Navigation menu"
      >
        <button className="mobile-close" onClick={close} aria-label="Close menu">
          &times;
        </button>
        <a href="#services" onClick={close}>Services</a>
        <a href="#tracks" onClick={close}>Tracks</a>
        <a href="#how" onClick={close}>Process</a>
        <a href="#tech" onClick={close}>Stack</a>
        <a href="#cta" className="btn-primary" onClick={close}>Get a Proposal</a>
      </div>
    </>
  );
}

export function ScrollAnimations() {
  useEffect(() => {
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

export function NavScrollState() {
  useEffect(() => {
    const nav = document.querySelector("nav");
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

  return null;
}
