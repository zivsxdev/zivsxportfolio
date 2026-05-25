"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <p className="label-sm" style={{
        opacity: 0.38, marginBottom: "0.85rem",
        borderTop: "1px solid rgba(13,13,13,0.13)", paddingTop: "0.7rem",
      }}>
        {label}
      </p>
      {children}
    </div>
  );
}

export default function Intro() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 28 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
    transition: { duration: 0.75, delay },
  });

  return (
    <section id="about" ref={ref} style={{
      padding: "clamp(3rem, 8vw, 6rem) var(--pad) clamp(4rem, 10vw, 8rem)",
      maxWidth: "1400px", margin: "0 auto",
    }}>
      <motion.p className="label-sm" {...fade(0)}
        style={{ opacity: 0.38, marginBottom: "clamp(2rem, 6vw, 4rem)" }}>
        — ABOUT
      </motion.p>

      {/* MOBILE: single column. MD+: 3 columns */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "3rem",
      }}
        className="md:!grid-cols-3 md:!gap-16"
      >
        {/* Col 1: Photo + contact */}
        <motion.div {...fade(0.05)}>
          <div className="img-zoom" style={{
            width: "100%",
            maxWidth: "320px",
            aspectRatio: "3/4",
            overflow: "hidden",
            marginBottom: "1.5rem",
            background: "#d5d2cd",
            position: "relative",
          }}>
            <Image src="/hero-img4.jpg" alt="zivsxdev" fill
              style={{ objectFit: "cover", filter: "grayscale(20%)" }} />
          </div>
          <p style={{ fontSize: "1.3rem", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.2rem" }}>
            zivsxdev
          </p>
          <p className="label-sm" style={{ opacity: 0.45, marginBottom: "1.25rem" }}>
            Software Developer
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            {[
              { label: "GitHub", val: "github.com/zivsxdev", href: "https://github.com/zivsxdev" },
              { label: "Location", val: "Raipur, India" },
            ].map(({ label, val, href }) => (
              <div key={label} style={{ display: "flex", gap: "1rem", alignItems: "baseline", flexWrap: "wrap" }}>
                <span className="label-sm" style={{ opacity: 0.38, minWidth: "65px" }}>{label}</span>
                {href
                  ? <a href={href} target="_blank" rel="noopener noreferrer"
                      style={{ fontSize: "0.75rem", color: "var(--ink)", textDecoration: "underline", textUnderlineOffset: "3px" }}>{val}</a>
                  : <span style={{ fontSize: "0.75rem", opacity: 0.7 }}>{val}</span>}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Col 2: Bio + experience */}
        <motion.div {...fade(0.1)}>
          <p style={{ fontSize: "clamp(0.82rem, 2vw, 0.95rem)", lineHeight: 1.75, opacity: 0.72, marginBottom: "2.5rem" }}>
            I build full-stack applications that are fast, accessible, and carefully crafted.
            My work sits at the boundary of engineering precision and visual thinking —
            writing clean code while obsessing over the details that make interfaces feel alive.
          </p>
          <Section label="EXPERIENCE">
            {[
              { role: "Sales Manager", co: "AutoMobile parts", period: "2022 — 2024" },
              { role: "Software Developer", co:"", period: "2024 — Ongoing" },
              { role: "Trader", co: "Independent", period: "2021 — Ongoing" },
             
            ].map(({ role, co, period }) => (
              <div key={role} style={{ marginBottom: "1.1rem" }}>
                <p style={{ fontWeight: 700, fontSize: "0.83rem" }}>{role}</p>
                <p style={{ fontSize: "0.73rem", opacity: 0.52 }}>{co}</p>
                <p className="label-sm" style={{ opacity: 0.3, marginTop: "0.1rem" }}>{period}</p>
              </div>
            ))}
          </Section>
          <Section label="EDUCATION">
            <p style={{ fontWeight: 700, fontSize: "0.83rem" }}>Mechanical Engineering</p>
            <p style={{ fontSize: "0.73rem", opacity: 0.52 }}>VEC Ambikapur (CSVTU)</p>
            <p className="label-sm" style={{ opacity: 0.3, marginTop: "0.1rem" }}>2022</p>
            <p style={{ fontWeight: 700, fontSize: "0.83rem" }}>Full-Stack Developer</p>
            <p style={{ fontSize: "0.73rem", opacity: 0.52 }}>Almabetter</p>
            <p className="label-sm" style={{ opacity: 0.3, marginTop: "0.1rem" }}>2025</p>
            <p style={{ fontWeight: 700, fontSize: "0.83rem" }}>TCS-NQT(IT)</p>
            <p style={{ fontSize: "0.73rem", opacity: 0.52 }}>Score: 1955.84 </p>
            <p style={{ fontSize: "0.73rem", opacity: 0.52 }}>Adv, Quant/Reasoning: 66.5%, Python: 57% </p>
            <p className="label-sm" style={{ opacity: 0.3, marginTop: "0.1rem" }}>2026 (FEB)</p>
          </Section>
          <Section label="LANGUAGES">
            <div style={{ display: "flex", gap: "1.5rem" }}>
              {["English", "Hindi"].map((l) => (
                <p key={l} style={{ fontSize: "0.78rem", opacity: 0.68 }}>{l}</p>
              ))}
            </div>
          </Section>
        </motion.div>

        {/* Col 3: Skills + tools */}
        <motion.div {...fade(0.15)}>
          <Section label="CORE SKILLS">
            {["Python","Next.js / React", "TypeScript", "Node.js / Express", "PostgreSQL", "TailwindCSS", "REST & GraphQL APIs","Problem Solving"].map((skill) => (
              <div key={skill} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                borderBottom: "1px solid rgba(13,13,13,0.09)", padding: "0.55rem 0",
              }}>
                <span style={{ fontSize: "0.78rem" }}>{skill}</span>
              </div>
            ))}
          </Section>
          <Section label="TOOLS">
            {["Figma — Intermediate", "VS Code — Advanced", "Git / GitHub — Advanced", "Vercel / Cloudflare", "Docker — Intermediate", "Linux"].map((t) => (
              <p key={t} style={{ fontSize: "0.73rem", opacity: 0.58, marginBottom: "0.3rem" }}>{t}</p>
            ))}
          </Section>
          <Section label="PERSONAL">
            {["Self-directed learner", "Open-source contributor", "Detail-obsessed builder", "Fast iteration mindset"].map((t) => (
              <p key={t} style={{ fontSize: "0.73rem", opacity: 0.58, marginBottom: "0.28rem" }}>{t}</p>
            ))}
          </Section>
        </motion.div>
      </div>
    </section>
  );
}
