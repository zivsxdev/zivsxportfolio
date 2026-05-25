"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [blur, setBlur] = useState(40);
  const [opacity, setOpacity] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    // Fade in + sharpen
    const t1 = setTimeout(() => setOpacity(1), 50);
    const t2 = setTimeout(() => setBlur(0), 200);
    // Start exit
    const t3 = setTimeout(() => {
      setBlur(20);
      setOpacity(0);
    }, 1500);
    const t4 = setTimeout(() => setExit(true), 2100);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, []);

  if (exit) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "#0d0d0d",
        zIndex: 9998,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.6s ease",
        opacity,
      }}
    >
      <h1
        className="loader-text"
        style={{
          filter: `blur(${blur}px)`,
          transition: "filter 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        zivsxdev
      </h1>
    </div>
  );
}
