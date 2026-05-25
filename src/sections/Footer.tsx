"use client";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      borderTop: "1px solid rgba(13,13,13,0.12)",
      padding: "1.75rem var(--pad)",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "1rem",
      maxWidth: "1400px", margin: "0 auto",
    }}>
      <p className="label-sm" style={{ opacity: 0.32 }}>© {year} ZIVSXDEV</p>
      <p className="label-sm" style={{ opacity: 0.32 }}>BUILT BY TAUKIL</p>
    </footer>
  );
}
