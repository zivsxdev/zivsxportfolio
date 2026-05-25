"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function ContactMe() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [hovering, setHovering] = useState(false);

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: "clamp(3rem, 8vw, 6rem) var(--pad) clamp(5rem, 12vw, 10rem)",
        maxWidth: "1400px",
        margin: "0 auto",
        borderTop: "1px solid rgba(13,13,13,0.1)",
      }}>
      <motion.p
        className="label-sm"
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 0.38, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={{ marginBottom: "clamp(2.5rem, 7vw, 5rem)" }}>
        — LET&apos;S TALK
      </motion.p>

      {/* Stack on mobile, side-by-side md+ */}
      <div
        style={{ display: "flex", flexDirection: "column", gap: "3rem" }}
        className="md:!grid md:!grid-cols-2 md:!gap-24 md:!items-end">
        {/* Big blurred heading */}
        <motion.h2
          className="display-xl"
          initial={{ filter: "blur(30px)", opacity: 0 }}
          animate={inView ? { filter: "blur(0px)", opacity: 1 } : {}}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          onHoverStart={() => setHovering(true)}
          onHoverEnd={() => setHovering(false)}
          style={{
            filter: hovering ? "blur(8px)" : "blur(0px)",
            transition: "filter 0.5s ease",
          }}>
          say
          <br />
          hello.
        </motion.h2>

        {/* Contact details */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.8rem",
              marginBottom: "2.5rem",
            }}>
            {[
              {
                label: "GitHub",
                val: "github.com/zivsxdev",
                href: "https://github.com/zivsxdev",
              },
              {
                label: "Email",
                val: "zivsxdev@gmail.com",
                href: "mailto:zivsxdev@gmail.com",
              },
              {
                label: "Insta",
                val: "abe_sssaaiiff",
                href: "https://www.instagram.com/abe_sssaaiiff/",
              },
              { label: "X", val: "zivsxdev", href: "https://x.com/zivsxdev" },
              {
                label: "LeetCode",
                val: "zivsxdev",
                href: "https://leetcode.com/u/zivsxdev/",
              },
              { label: "Location", val: "Raipur, Chhattisgarh, India" },
            ].map(({ label, val, href }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  alignItems: "baseline",
                  flexWrap: "wrap",
                }}>
                <span
                  className="label-sm"
                  style={{ opacity: 0.32, minWidth: "70px" }}>
                  {label}
                </span>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "clamp(0.78rem, 2vw, 0.82rem)",
                      color: "var(--ink)",
                      textDecoration: "underline",
                      textUnderlineOffset: "4px",
                    }}>
                    {val}
                  </a>
                ) : (
                  <span
                    style={{
                      fontSize: "clamp(0.78rem, 2vw, 0.82rem)",
                      opacity: 0.68,
                    }}>
                    {val}
                  </span>
                )}
              </div>
            ))}
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              display: "inline-block",
              fontSize: "0.62rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--paper)",
              background: "var(--ink)",
              padding: "0.85rem 2rem",
              border: "none",
              cursor: "pointer",
            }}>
            Back To Top ↑
          </button>
        </motion.div>
      </div>
    </section>
  );
}
