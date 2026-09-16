import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "zivsxdev",
  description: "Full-stack developer & creative technologist",
   icons: {
    icon: "/icon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body
        className="antialiased"
        style={{ backgroundColor: 'var(--paper)', color: 'var(--ink)', fontFamily: "'Archivo', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
