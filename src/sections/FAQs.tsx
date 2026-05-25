"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What technologies are you currently focused on?",
    a: "My primary focus is building modern web applications with Next.js, React, TypeScript, Node.js, and MongoDB. I enjoy creating fast, scalable, and user-friendly full-stack products."
  },
  {
    q: "Are you working with Artificial Intelligence?",
    a: "Yes. I'm actively exploring AI-powered applications and integrating tools such as Gemini AI into real-world projects. My goal is to combine modern web development with practical AI solutions."
  },
  {
    q: "What is your experience with Python?",
    a: "I use Python for problem solving, automation, and AI-related learning. I'm continuously improving my Python skills while exploring machine learning and AI development workflows."
  },
  {
    q: "Do you practice Data Structures and Algorithms?",
    a: "Absolutely. I consistently practice DSA to strengthen my problem-solving abilities and prepare for technical interviews. I focus on writing efficient, optimized, and clean solutions."
  },
  {
    q: "How do you stay up to date as a developer?",
    a: "I learn continuously through hands-on projects, open-source contributions, technical documentation, and building real-world applications. Every project is an opportunity to improve my engineering skills."
  },
  {
    q: "Why do you prefer Next.js?",
    a: "Next.js provides an excellent developer experience with features like Server Components, App Router, API Routes, SEO optimization, and performance improvements. It's my preferred framework for modern web applications."
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
