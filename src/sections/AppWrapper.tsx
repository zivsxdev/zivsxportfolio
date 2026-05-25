"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    const initLenis = async () => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const mod = await import("lenis" as any);
        const LenisClass = mod.default ?? mod.Lenis ?? mod;
        if (typeof LenisClass !== "function") return;
        const lenis = new LenisClass({
          duration: 1.1,
          smoothWheel: true,
        });
        let rafId: number;
        const raf = (time: number) => {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
        cleanup = () => {
          cancelAnimationFrame(rafId);
          lenis.destroy();
        };
      } catch {
        // no smooth scroll, that's fine
      }
    };

    initLenis();
    const timer = setTimeout(() => setLoading(false), 2200);

    return () => {
      clearTimeout(timer);
      cleanup?.();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      {loading && <Loader />}
      <div style={{ opacity: loading ? 0 : 1, transition: "opacity 0.6s ease" }}>
        {children}
      </div>
    </>
  );
}
