"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "project\none",
    subtitle: "ZIVSXSEO — Smart SEO Intelligence Suite",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Gemini AI", "JWT"],
    description: "Comprehensive SEO monitoring platform featuring AI-driven website analysis, keyword tracking, ranking history, and automated optimization recommendations.",
    href: "https://github.com/zivsxdev",
    year: "2025",
    category: "Full-Stack / AI",
  },
  {
    number: "02",
    title: "project\ntwo",
    subtitle: "AI Resume Analyzer",
    tags: ["Next.js", "React", "TypeScript", "Puter.js AI", "PDF Parsing"],
    description: "AI-powered resume analyzer delivering ATS optimization scores, keyword gap suggestions, and resume evaluation with sub-1-second processing time. Built with Puter.js AI for intelligent document analysis.",
    href: "https://github.com/zivsxdev",
    year: "2025",
    category: "AI / Full-Stack",
  },
  {
    number: "03",
    title: "project\nthree",
    subtitle: "Social Media Automation Platform",
    tags: ["React", "Node.js", "Express", "MongoDB", "OAuth2", "AI APIs"],
    description: "AI-powered social media automation platform with AI-generated content creation, automated post scheduling, and multi-account management via secure OAuth2 authentication across third-party APIs.",
    href: "https://github.com/zivsxdev",
    year: "2025",
    category: "AI / Full-Stack",
  },
  {
    number: "04",
    title: "project\nfour",
    subtitle: "SAP ABAP Practice Programs",
    tags: ["SAP ABAP", "ALV Reports", "SmartForms", "RFC", "BAPI", "SAP HANA"],
    description: "15+ Z-programs spanning ALV, Classical, and Interactive report types with drill-down navigation and PFSTATUS customization on Purchase Order data. RFC-enabled function modules and BAPI calls validated against Sales Order (VBAK/VBAP) and Purchasing (BKPF) data end-to-end.",
    href: "https://github.com/zivsxdev",
    year: "2026",
    category: "SAP ABAP",
  },
];

function ProjectRow({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-6%" });

  return (
    <motion.a
      ref={ref}
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
      style={{
        display: "block",
        padding: "clamp(2rem, 5vw, 4rem) 0",
        borderTop: "1px solid rgba(13,13,13,0.12)",
        textDecoration: "none", color: "var(--ink)",
      }}
      whileHover="hover"
    >
      {/* Mobile layout: stacked. MD+: 3-col grid */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
        className="md:!grid md:!grid-cols-[60px_1fr_180px] md:!gap-12 md:!items-start">

        {/* Vertical category label — hidden on mobile */}
        <div className="hidden md:block" style={{ paddingTop: "0.25rem" }}>
          <span className="vertical-text label-sm" style={{ opacity: 0.28, fontSize: "0.52rem" }}>
            {project.category}
          </span>
        </div>

        {/* Center */}
        <div>
          {/* Mobile: show category inline */}
          <p className="label-sm md:hidden" style={{ opacity: 0.38, marginBottom: "0.6rem" }}>
            {project.category}
          </p>

          <motion.h2
            className="display-lg project-title-hover"
            variants={{ hover: { x: 8 } }}
            transition={{ duration: 0.4 }}
            style={{ whiteSpace: "pre-line", marginBottom: "1.25rem" }}
          >
            {project.title}
          </motion.h2>

          <p style={{
            fontSize: "clamp(0.75rem, 2vw, 0.82rem)",
            opacity: 0.58, maxWidth: "480px", lineHeight: 1.65,
            marginBottom: "1.25rem",
          }}>
            {project.description}
          </p>

          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
            {project.tags.map((tag) => (
              <span key={tag} style={{
                fontSize: "0.58rem", fontWeight: 600,
                letterSpacing: "0.13em", textTransform: "uppercase",
                border: "1px solid rgba(13,13,13,0.22)",
                padding: "0.28rem 0.6rem", opacity: 0.65,
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right meta */}
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}
          className="md:!flex-col md:!items-end md:!justify-between">
          <span style={{
            fontSize: "clamp(2rem, 6vw, 4rem)", fontWeight: 900,
            opacity: 0.06, lineHeight: 1, letterSpacing: "-0.04em",
          }}>
            {project.number}
          </span>
          <div style={{ textAlign: "right" }}>
            <p className="label-sm" style={{ opacity: 0.32 }}>{project.year}</p>
            <p style={{ fontSize: "0.72rem", opacity: 0.48, marginTop: "0.2rem" }}>{project.subtitle}</p>
            <motion.span
              variants={{ hover: { opacity: 1, x: 0 } }}
              initial={{ opacity: 0, x: -6 }}
              style={{
                display: "inline-block",
                fontSize: "0.62rem", fontWeight: 600,
                letterSpacing: "0.14em", textTransform: "uppercase",
                marginTop: "0.6rem",
                borderBottom: "1px solid var(--ink)", paddingBottom: "2px",
              }}
            >
              View →
            </motion.span>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <section id="projects" ref={ref} style={{
      padding: "0 var(--pad) clamp(4rem, 10vw, 8rem)",
      maxWidth: "1400px", margin: "0 auto",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "0.5rem" }}>
        <motion.p className="label-sm"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 0.38, y: 0 } : {}}
          transition={{ duration: 0.7 }}>
          — SELECTED WORK
        </motion.p>
        <motion.p className="label-sm"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.28, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}>
          {projects.length} PROJECTS
        </motion.p>
      </div>
      <div>
        {projects.map((p, i) => <ProjectRow key={p.number} project={p} index={i} />)}
        <div style={{ borderTop: "1px solid rgba(13,13,13,0.12)" }} />
      </div>
    </section>
  );
}
