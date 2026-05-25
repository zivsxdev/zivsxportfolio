"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 500,
        padding: "1.1rem var(--pad)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled || menuOpen ? "rgba(240,237,232,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled && !menuOpen ? "1px solid rgba(13,13,13,0.1)" : "1px solid transparent",
        transition: "background 0.4s ease, border-color 0.4s ease",
      }}>
        {/* Logo */}
        <a href="/" onClick={() => setMenuOpen(false)} style={{
          fontSize: "0.72rem", fontWeight: 700,
          letterSpacing: "0.2em", textTransform: "uppercase",
          color: "var(--ink)", textDecoration: "none", zIndex: 600,
          position: "relative",
        }}>
          ZIVSXDEV
        </a>

        {/* Desktop nav — visible md and above */}
        <nav style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: "0.68rem", fontWeight: 500,
                letterSpacing: "0.15em", textTransform: "uppercase",
                color: "var(--ink)", textDecoration: "none",
                opacity: 0.6, transition: "opacity 0.2s ease",
                display: "none",
              }}
              className="md:!inline-block"
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.6")}
            >
              {link.label}
            </a>
          ))}

          {/* Hamburger — visible below md */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            style={{
              background: "none", border: "none",
              padding: "6px", cursor: "pointer",
              display: "flex", flexDirection: "column",
              justifyContent: "center", gap: "5px",
              zIndex: 600, position: "relative",
            }}
            className="md:!hidden"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6.5 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ display: "block", width: "22px", height: "1.5px", background: "var(--ink)", transformOrigin: "center" }}
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              style={{ display: "block", width: "22px", height: "1.5px", background: "var(--ink)" }}
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6.5 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ display: "block", width: "22px", height: "1.5px", background: "var(--ink)", transformOrigin: "center" }}
            />
          </button>
        </nav>
      </header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed", inset: 0, zIndex: 490,
              background: "var(--paper)",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ delay: i * 0.06, duration: 0.35 }}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: "clamp(2rem, 10vw, 3.5rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: "var(--ink)",
                  textDecoration: "none",
                  padding: "0.4rem 0",
                  opacity: 0.85,
                }}
              >
                {link.label}
              </motion.a>
            ))}

            {/* Small label at bottom */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 0.35 }}
              style={{
                position: "absolute", bottom: "2rem",
                fontSize: "0.6rem", letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              ZIVSXDEV — 2026
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
