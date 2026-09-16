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

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}
        className="md:!grid-cols-3 md:!gap-16"
      >
        {/* Col 1: Photo + contact */}
        <motion.div {...fade(0.05)}>
          <div className="img-zoom" style={{
            width: "100%", maxWidth: "320px",
            aspectRatio: "3/4", overflow: "hidden",
            marginBottom: "1.5rem", background: "#d5d2cd",
            position: "relative",
          }}>
            <Image src="/hero-img4.jpg" alt="Taukil Ahmed" fill
              style={{ objectFit: "cover", filter: "grayscale(20%)" }} />
          </div>

          <p style={{ fontSize: "1.3rem", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.2rem" }}>
            Taukil Ahmed
          </p>
          <p className="label-sm" style={{ opacity: 0.45, marginBottom: "1.25rem" }}>
            SAP ABAP Developer · Frontend Engineer
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              { label: "Email", val: "zivsxdev@gmail.com", href: "mailto:zivsxdev@gmail.com" },
              { label: "Phone", val: "+91 9407921078" },
              { label: "GitHub", val: "github.com/zivsxdev", href: "https://github.com/zivsxdev" },
              { label: "Location", val: "Korea, Chhattisgarh, India" },
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

        {/* Col 2: Bio + experience + education */}
        <motion.div {...fade(0.1)}>
          <p style={{ fontSize: "clamp(0.82rem, 2vw, 0.95rem)", lineHeight: 1.75, opacity: 0.72, marginBottom: "2.5rem" }}>
            SAP ABAP Developer with hands-on training in report development, SmartForms, and RFC/BAPI integration,
            backed by a full-stack engineering foundation in React, Next.js, Node.js, and TypeScript. Brings three years
            of operations leadership from the automotive industry into enterprise SAP environments — combining fast
            technical ramp-up with proven business execution.
          </p>

          <Section label="EXPERIENCE">
            {[
              {
                role: "SAP ABAP Development Training",
                co: "Remote — Noida",
                period: "May 2026 — Ongoing",
                points: [
                  "ALV, Classical & Interactive reports on Purchase Order data",
                  "SmartForms with custom print programs and TOP includes",
                  "RFC-enabled function modules for VBAK/VBAP & BKPF data",
                ]
              },
              {
                role: "Automotive Business Operations Executive",
                co: "Khush Automobiles",
                period: "2022 — 2025",
                points: [
                  "End-to-end dealership ops — sales, inventory, team coordination",
                  "Completed AlmaBetter Full Stack certification concurrently",
                ]
              },
              {
                role: "Independent Trader",
                co: "Self-directed",
                period: "2021 — Ongoing",
                points: []
              },
            ].map(({ role, co, period, points }) => (
              <div key={role} style={{ marginBottom: "1.5rem" }}>
                <p style={{ fontWeight: 700, fontSize: "0.83rem" }}>{role}</p>
                <p style={{ fontSize: "0.73rem", opacity: 0.52 }}>{co}</p>
                <p className="label-sm" style={{ opacity: 0.3, marginTop: "0.1rem", marginBottom: points.length ? "0.5rem" : 0 }}>{period}</p>
                {points.map((pt) => (
                  <p key={pt} style={{ fontSize: "0.7rem", opacity: 0.55, lineHeight: 1.6, paddingLeft: "0.75rem", borderLeft: "1px solid rgba(13,13,13,0.15)", marginBottom: "0.25rem" }}>
                    {pt}
                  </p>
                ))}
              </div>
            ))}
          </Section>

          <Section label="EDUCATION">
            {[
              { degree: "B.Tech — Mechanical Engineering", inst: "VEC Ambikapur (CSVTU)",  },
              { degree: "Full Stack Development Certification", inst: "AlmaBetter", year: "2025" },
              { degree: "SAP ABAP Development Training", inst: "Remote — Noida", year: "2026 (Ongoing)" },
              { degree: "TCS iON NQT — IT", inst: "Score: 1955.84 / 3000 (65%)", year: "Feb 2026" },
            ].map(({ degree, inst, year }) => (
              <div key={degree} style={{ marginBottom: "1rem" }}>
                <p style={{ fontWeight: 700, fontSize: "0.83rem" }}>{degree}</p>
                <p style={{ fontSize: "0.73rem", opacity: 0.52 }}>{inst}</p>
                <p className="label-sm" style={{ opacity: 0.3, marginTop: "0.1rem" }}>{year}</p>
              </div>
            ))}
          </Section>

          <Section label="LANGUAGES">
            <div style={{ display: "flex", gap: "1.5rem" }}>
              {["English (Professional)", "Hindi (Native)"].map((l) => (
                <p key={l} style={{ fontSize: "0.78rem", opacity: 0.68 }}>{l}</p>
              ))}
            </div>
          </Section>
        </motion.div>

        {/* Col 3: Skills + tools */}
        <motion.div {...fade(0.15)}>
          <Section label="SAP SKILLS">
            {[
              "ABAP Programming",
              "Data Dictionary",
              "Internal Tables & Work Areas",
              "ALV / Classical / Interactive Reports",
              "Module Pool Programming",
              "SmartForms & Print Programs",
              "BAPIs / Function Modules",
              "RFC Integration",
              "SAP HANA SQL Queries",
            ].map((skill) => (
              <div key={skill} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                borderBottom: "1px solid rgba(13,13,13,0.09)", padding: "0.5rem 0",
              }}>
                <span style={{ fontSize: "0.78rem" }}>{skill}</span>
              </div>
            ))}
          </Section>

          <Section label="FRONTEND SKILLS">
            {[
              "Python",
              "Next.js / React",
              "JavaScript",
              "Node.js / Express",
              "TailwindCSS",
              "REST & GraphQL APIs",
              "OpenAI / Claude / Puter.js AI",
              "Prompt Engineering",
            ].map((skill) => (
              <div key={skill} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                borderBottom: "1px solid rgba(13,13,13,0.09)", padding: "0.5rem 0",
              }}>
                <span style={{ fontSize: "0.78rem" }}>{skill}</span>
              </div>
            ))}
          </Section>

          <Section label="TOOLS">
            {[
              "VS Code — Advanced",
              "GitHub — Advanced",
              "Vercel / Netlify",
              "Postman",
              "Figma — Intermediate",
              "JWT Auth",
            ].map((t) => (
              <p key={t} style={{ fontSize: "0.73rem", opacity: 0.58, marginBottom: "0.3rem" }}>{t}</p>
            ))}
          </Section>

          <Section label="PERSONAL">
            {[
              "Self-directed fast learner",
              "3 yrs operations leadership",
              "Detail-obsessed builder",
              "AI-assisted development",
              "Fast iteration mindset",
            ].map((t) => (
              <p key={t} style={{ fontSize: "0.73rem", opacity: 0.58, marginBottom: "0.28rem" }}>{t}</p>
            ))}
          </Section>
        </motion.div>
      </div>
    </section>
  );
}