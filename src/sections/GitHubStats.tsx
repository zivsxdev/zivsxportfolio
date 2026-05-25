"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar"),
  { ssr: false }
);
export default function GitHubStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} style={{
      padding: "clamp(3rem, 8vw, 4rem) var(--pad) clamp(4rem, 10vw, 8rem)",
      maxWidth: "1400px", margin: "0 auto",
      borderTop: "1px solid rgba(13,13,13,0.1)",
    }}>
      <motion.p className="label-sm"
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 0.38, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={{ marginBottom: "clamp(2rem, 6vw, 4rem)" }}>
        — CONTRIBUTIONS
      </motion.p>

      {/* Stack on mobile, side-by-side on md+ */}
      <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}
        className="md:!grid md:!grid-cols-2 md:!gap-24 md:!items-center">

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <h2 className="display-md" style={{ marginBottom: "1.25rem" }}>
            GitHub<br />Activity
          </h2>
          <p style={{ fontSize: "clamp(0.75rem, 2vw, 0.8rem)", opacity: 0.52, lineHeight: 1.7, maxWidth: "320px" }}>
            Consistent contributions across open-source projects, personal experiments, and client work.
          </p>
          <div style={{ marginTop: "1.75rem" }}>
            <a href="https://github.com/zivsxdev" target="_blank" rel="noopener noreferrer"
              style={{
                fontSize: "0.62rem", fontWeight: 600,
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "var(--ink)", textDecoration: "none",
                borderBottom: "1px solid var(--ink)", paddingBottom: "2px",
              }}>
              @zivsxdev →
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          style={{ overflowX: "auto" }}>
          <GitHubCalendar
            username="zivsxdev"
            colorScheme="light"
            theme={{ light: ["#e8e5e0", "#c5bdb3", "#9e9389", "#706860", "#3d3530"] }}
          />
        </motion.div>
      </div>
    </section>
  );
}
