"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What are you currently focused on?",
    a: "I'm currently doing hands-on SAP ABAP development training — building ALV reports, SmartForms, RFC-enabled function modules, and BAPI integrations in an SAP HANA environment. Alongside that I continue building full-stack web applications with Next.js, React, TypeScript, and Node.js.",
  },
  {
    q: "What is your SAP ABAP experience?",
    a: "I have built 15+ Z-programs covering Classical, Interactive, and ALV report types with drill-down navigation and PFSTATUS customization. I have also implemented SmartForms with custom print programs, and built RFC-enabled function modules for Sales Order (VBAK/VBAP) and Purchasing (BKPF) data — validated end-to-end for data integrity.",
  },
  {
    q: "What is your full-stack development background?",
    a: "I hold an AlmaBetter Full Stack Development certification (2025) and have built production-grade projects including an AI-powered social media automation platform, an AI resume analyzer with ATS scoring, and a grocery delivery platform — using React, Next.js, Node.js, Express, PostgreSQL, MongoDB, and various AI APIs.",
  },
  {
    q: "How did you transition from Automotive to Tech?",
    a: "While working as an Automotive Business Operations Executive at Khush Automobiles from 2022 to 2025 — managing dealership operations, sales, and inventory — I completed the AlmaBetter Full Stack certification concurrently. That combination of business operations experience and engineering skills is something I bring into every technical role.",
  },
  {
    q: "What AI tools and APIs have you worked with?",
    a: "I have integrated OpenAI API, Claude API, and Puter.js AI into real projects. My AI resume analyzer delivers ATS optimization scores with sub-1-second processing, and my social media automation platform uses AI for content generation. I also actively use prompt engineering as part of my development workflow.",
  },
  {
    q: "What does your TCS NQT score reflect?",
    a: "I scored 1955.84 out of 3000 (65%) on the TCS iON National Qualifier Test for IT in February 2026, with 66.5% in Advanced Quantitative Reasoning and 57% in Python. It reflects a solid foundation in problem solving and logical reasoning that I continue to build on.",
  },
  {
    q: "Are you open to opportunities?",
    a: "Yes — I am actively targeting SAP ABAP Developer roles where I can apply my ABAP training alongside my full-stack and business operations background. I am also open to full-stack engineering roles. You can reach me at zivsxdev@gmail.com or +91 9407921078.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-4%" });

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
      style={{ borderTop: "1px solid rgba(13,13,13,0.12)" }}>
      <button onClick={() => setOpen(!open)} style={{
        width: "100%", display: "flex",
        justifyContent: "space-between", alignItems: "center",
        padding: "1.35rem 0",
        background: "none", border: "none", cursor: "pointer",
        textAlign: "left", gap: "1.5rem",
      }}>
        <span style={{ fontSize: "clamp(0.82rem, 2vw, 0.92rem)", fontWeight: 600, lineHeight: 1.45, textAlign: "left" }}>{q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.3 }}
          style={{ fontSize: "1.1rem", opacity: 0.45, flexShrink: 0 }}>+</motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}>
            <p style={{
              fontSize: "clamp(0.78rem, 2vw, 0.82rem)",
              lineHeight: 1.75, opacity: 0.62,
              paddingBottom: "1.5rem", maxWidth: "640px",
            }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} style={{
      padding: "clamp(3rem, 8vw, 4rem) var(--pad) clamp(4rem, 10vw, 8rem)",
      maxWidth: "1400px", margin: "0 auto",
      borderTop: "1px solid rgba(13,13,13,0.1)",
    }}>
      {/* Stack on mobile, 2-col md+ */}
      <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}
        className="md:!grid md:!grid-cols-[1fr_2fr] md:!gap-24 md:!items-start">
        <div>
          <motion.p className="label-sm"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 0.38, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ marginBottom: "1.5rem" }}>
            — FAQ
          </motion.p>
          <motion.h2 className="display-md"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}>
            Common<br />Questions
          </motion.h2>
        </div>
        <div>
          {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} index={i} />)}
          <div style={{ borderTop: "1px solid rgba(13,13,13,0.12)" }} />
        </div>
      </div>
    </section>
  );
}
