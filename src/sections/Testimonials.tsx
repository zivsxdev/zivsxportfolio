"use client";

import { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";

const testimonials = [
  {
    quote: "The website exceeded our expectations. From online cake orders to showcasing our bakery products, everything was delivered professionally and on time. Since launch, managing customer inquiries has become much easier.",
    author: "Happy Bakery",
    role: "Bakery Owner",
    index: "01",
  },
  {
    quote: "zivsxdev built a clean and modern website for our automobile parts business. The product catalog is easy to manage, customers can quickly find spare parts, and the entire project was handed over smoothly with complete support.",
    author: " Khushi AutoParts ",
    role: "Automobile Parts Dealer",
    index: "02",
  },
  {
    quote: "Our wedding planning website was delivered exactly as envisioned. The gallery, service showcase, and inquiry system work perfectly. Communication throughout the project was excellent, and the final handover was seamless.",
    author: "Elegant Weddings",
    role: "Wedding Planner",
    index: "03",
  },
];

function TestimonialCard({ t, i, inView }: { t: typeof testimonials[0]; i: number; inView: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [flipped, setFlipped] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.9, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: "1000px", cursor: "pointer" }}
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: flipped ? 0 : rotateX,
          rotateY: flipped ? 180 : rotateY,
          transformStyle: "preserve-3d",
          position: "relative",
          // NO fixed height — grows with content
          minHeight: "320px",
          transition: flipped ? "transform 0.7s cubic-bezier(0.16,1,0.3,1)" : undefined,
        }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* FRONT */}
        <div style={{
          // use position absolute only when flipped so front/back stack
          position: flipped ? "absolute" : "relative",
          inset: 0,
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          border: "1px solid rgba(13,13,13,0.12)",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          background: hovered ? "rgba(13,13,13,0.03)" : "transparent",
          transition: "background 0.3s ease",
          minHeight: "320px",
        }}>
          {/* Top row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <span style={{
              fontSize: "3.5rem", fontWeight: 900, lineHeight: 1,
              opacity: 0.07, letterSpacing: "-0.04em",
            }}>
              {t.index}
            </span>
            <motion.span
              animate={{ rotate: hovered ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ fontSize: "1.2rem", opacity: 0.3 }}
            >
              +
            </motion.span>
          </div>

          {/* Quote — grows freely */}
          <p style={{
            fontSize: "clamp(0.78rem, 1.6vw, 0.86rem)",
            lineHeight: 1.8,
            opacity: 0.72,
            fontStyle: "italic",
            flex: 1,
          }}>
            &ldquo;{t.quote}&rdquo;
          </p>

          {/* Author — always at bottom */}
          <div style={{
            borderTop: "1px solid rgba(13,13,13,0.12)",
            paddingTop: "1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "auto",
          }}>
            <div>
              <p style={{ fontWeight: 700, fontSize: "0.78rem" }}>{t.author}</p>
              <p style={{
                fontSize: "0.6rem", fontWeight: 500,
                letterSpacing: "0.16em", textTransform: "uppercase",
                opacity: 0.38, marginTop: "0.2rem",
              }}>{t.role}</p>
            </div>
            <span style={{
              fontSize: "0.55rem", opacity: 0.28,
              letterSpacing: "0.12em", textTransform: "uppercase",
            }}>
              tap to flip
            </span>
          </div>

          {/* Shimmer */}
          <motion.div
            animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              height: "2px",
              background: "linear-gradient(90deg, transparent, var(--ink), transparent)",
              transformOrigin: "left",
            }}
          />
        </div>

        {/* BACK */}
        <div style={{
          position: "absolute",
          inset: 0,
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
          background: "var(--ink)",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.75rem",
          textAlign: "center",
          minHeight: "320px",
        }}>
          <p style={{
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            fontWeight: 900, color: "var(--paper)",
            lineHeight: 1, letterSpacing: "-0.03em",
          }}>
            {t.author}
          </p>
          <p style={{
            fontSize: "0.62rem", fontWeight: 500,
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: "var(--paper)", opacity: 0.5,
          }}>
            {t.role}
          </p>
          <div style={{ width: "30px", height: "1px", background: "var(--paper)", opacity: 0.3 }} />
          <p style={{ fontSize: "0.72rem", color: "var(--paper)", opacity: 0.6, lineHeight: 1.6 }}>
            tap again to flip back
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function MarqueeStrip({ inView }: { inView: boolean }) {
  const words = ["TESTIMONIALS", "·", "CLIENT WORK", "·", "FEEDBACK", "·", "REVIEWS", "·"];
  const repeated = [...words, ...words, ...words, ...words];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ delay: 0.2, duration: 0.6 }}
      style={{
        overflow: "hidden",
        borderTop: "1px solid rgba(13,13,13,0.1)",
        borderBottom: "1px solid rgba(13,13,13,0.1)",
        padding: "0.65rem 0",
        marginBottom: "4rem",
      }}
    >
      <div className="animate-marquee">
        {repeated.map((w, i) => (
          <span key={i} style={{
            fontSize: "0.58rem", fontWeight: 600,
            letterSpacing: "0.2em", textTransform: "uppercase",
            opacity: 0.28, marginRight: "1.5rem",
            whiteSpace: "nowrap",
          }}>
            {w}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function Counter({ value, inView }: { value: number; inView: boolean }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(false);
  if (inView && !ref.current) ref.current = true;
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      onAnimationComplete={() => {
        if (!inView) return;
        let start = 0;
        const step = () => { start += 1; setDisplay(start); if (start < value) setTimeout(step, 60); };
        setTimeout(step, 300);
      }}
    >
      {display}
    </motion.span>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} style={{
      padding: "clamp(3rem, 8vw, 4rem) var(--pad) clamp(4rem, 10vw, 8rem)",
      maxWidth: "1400px", margin: "0 auto",
    }}>
      <div style={{
        display: "flex", justifyContent: "space-between",
        alignItems: "flex-end", marginBottom: "3rem",
        flexWrap: "wrap", gap: "1rem",
      }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p style={{
            fontSize: "0.62rem", fontWeight: 500,
            letterSpacing: "0.18em", textTransform: "uppercase",
            opacity: 0.38, marginBottom: "0.75rem",
          }}>
            — TESTIMONIALS
          </p>
          <h2 style={{
            fontSize: "clamp(1.8rem, 5vw, 4rem)",
            fontWeight: 900, lineHeight: 0.95,
            letterSpacing: "-0.03em",
          }}>
            What people<br />are saying
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ display: "flex", gap: "3rem" }}
        >
          {[{ num: 3, label: "Happy clients" }, { num: 100, label: "% satisfaction" }].map(({ num, label }) => (
            <div key={label} style={{ textAlign: "right" }}>
              <p style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 900, lineHeight: 1,
                letterSpacing: "-0.04em",
              }}>
                <Counter value={num} inView={inView} />
                {label.includes("%") ? "" : "+"}
              </p>
              <p style={{
                fontSize: "0.6rem", fontWeight: 500,
                letterSpacing: "0.14em", textTransform: "uppercase",
                opacity: 0.38, marginTop: "0.3rem",
              }}>
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <MarqueeStrip inView={inView} />

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "1.5rem",
        alignItems: "start",
      }}>
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} t={t} i={i} inView={inView} />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 0.3, y: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
        style={{
          textAlign: "center",
          fontSize: "0.62rem", fontWeight: 500,
          letterSpacing: "0.15em", textTransform: "uppercase",
          marginTop: "3rem",
        }}
      >
        tap any card to reveal
      </motion.p>
    </section>
  );
}