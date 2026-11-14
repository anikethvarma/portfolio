import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Syne, Figtree, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-syne", display: "swap" });
const figtree = Figtree({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-figtree", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Aniketh Varma | AI Engineer",
  description:
    "Aniketh Varma Mudunuri, AI Engineer at TCS. Multi-agent systems and RAG applications with Google ADK, LangGraph and Gemini.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${figtree.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
