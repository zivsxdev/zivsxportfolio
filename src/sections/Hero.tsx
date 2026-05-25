"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scrollOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const yTitle = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yPhoto = useTransform(scrollYProgress, [0, 1], [0, -30]);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 2300);
    return () => clearTimeout(t);
  }, []);

  const linkStyle: React.CSSProperties = {
    fontSize: "0.65rem",
    fontWeight: 600,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "var(--ink)",
    textDecoration: "none",
    borderBottom: "1px solid var(--ink)",
    paddingBottom: "2px",
    whiteSpace: "nowrap",
    display: "inline-block",
  };

  return (
    <section
      ref={containerRef}
      style={{
        height: "100svh",
        position: "relative",
        overflow: "hidden",
        display: "grid",
        gridTemplateRows: "1fr auto auto",
        paddingLeft: "var(--pad)",
        paddingRight: "var(--pad)",
        paddingBottom: "clamp(5rem, 12vw, 7rem)",
        paddingTop: "60px",
      }}
    >
      {/* PHOTO — desktop only, hidden on mobile */}
      <motion.div
        className="hidden md:block"
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "min(58vw, 680px)",
          y: yPhoto,
          opacity: scrollOpacity,
          pointerEvents: "none",
          zIndex: 0,
        }}
        initial={{ opacity: 0, x: 40, filter: "blur(20px)" }}
        animate={
          loaded
            ? { opacity: 1, x: 0, filter: "blur(0px)" }
            : { opacity: 0, x: 40, filter: "blur(20px)" }
        }
        transition={{ duration: 1.6, delay: 0.4 }}
      >
        <Image
          src="/hero3.jpg"
          alt="zivsxdev"
          fill
          priority
          style={{
            objectFit: "contain",
            objectPosition: "right bottom",
            mixBlendMode: "multiply",
            filter: "grayscale(100%) contrast(1.05)",
          }}
        />
      </motion.div>

      {/* ROW 1 — empty spacer */}
      <div />

      {/* ROW 2 — title */}
      <motion.div
        style={{
          y: yTitle,
          opacity: scrollOpacity,
          position: "relative",
          zIndex: 2,
        }}
      >
        <motion.p
          className="label-sm"
          initial={{ opacity: 0, y: 12 }}
          animate={loaded ? { opacity: 0.4, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          style={{ marginBottom: "clamp(0.75rem, 2vw, 1.5rem)" }}
        >
          ZIVSXDEV 2026
        </motion.p>

        {/* 
          Mobile: full width, very large
          Desktop: maxWidth 58vw to leave room for photo
        */}
        <motion.h1
          style={{
            color: "var(--ink)",
            lineHeight: 0.88,
            fontWeight: 900,
            letterSpacing: "-0.04em",
            // mobile: full viewport width text
            fontSize: "clamp(5.5rem, 22vw, 16rem)",
            // desktop: constrained to left side
            maxWidth: "min(58vw, 9999px)",
          }}
          className="md:max-w-[58vw] max-w-full"
          initial={{ filter: "blur(60px)", opacity: 0, scale: 1.03 }}
          animate={
            loaded
              ? { filter: "blur(0px)", opacity: 1, scale: 1 }
              : { filter: "blur(60px)", opacity: 0, scale: 1.03 }
          }
          transition={{ duration: 1.6, delay: 0.1 }}
        >
          port
          <br />
          folio
        </motion.h1>

        {/* Desktop subtitle */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={loaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ delay: 0.8, duration: 0.9 }}
          style={{ display: "none" }}
          className="md:!flex"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              flexWrap: "wrap",
              marginTop: "2rem",
              gap: "2rem",
              alignItems: "flex-end",
              maxWidth: "55%",
            }}
          >
            <p
              style={{
                fontSize: "0.78rem",
                maxWidth: "260px",
                lineHeight: 1.6,
                opacity: 0.55,
                textAlign: "right",
              }}
            >
              Building digital experiences at the intersection of clean code and
              considered design.
            </p>
            <motion.a href="#projects" style={linkStyle}>
              View Work
            </motion.a>
          </div>
        </motion.div>

        {/* Mobile: description + CTA below title */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ delay: 1, duration: 0.8 }}
          style={{
            marginTop: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
          className="md:!hidden"
        >
          <p
            style={{
              fontSize: "0.75rem",
              lineHeight: 1.65,
              opacity: 0.55,
              maxWidth: "280px",
            }}
          >
            Building digital experiences at the intersection of clean code and
            considered design.
          </p>
          <motion.a href="#projects" style={linkStyle}>
            View Work
          </motion.a>
        </motion.div>
      </motion.div>

      {/* ROW 3 — category labels */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.5rem",
          zIndex: 10,
          position: "relative",
          paddingTop: "1rem",
        }}
      >
        {["Software Dev", "Trader", "Creative Tech"].map(
          (label) => (
            <span key={label} className="label-sm" style={{ opacity: 0.45 }}>
              {label}
            </span>
          )
        )}
      </motion.div>

      {/* Scroll indicator desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.4, duration: 1 }}
        style={{
          position: "absolute",
          right: "var(--pad)",
          top: "50%",
          transform: "translateY(-50%)",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          display: "none",
          zIndex: 10,
        }}
        className="md:!flex"
      >
        <span className="vertical-text label-sm" style={{ opacity: 0.3 }}>
          SCROLL
        </span>
        <div
          style={{
            width: "1px",
            height: "60px",
            background: "var(--ink)",
            opacity: 0.18,
          }}
        />
      </motion.div>
    </section>
  );
}