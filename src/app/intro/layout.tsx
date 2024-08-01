"use client";
import { ThemeProvider } from "@/lib/providers/next-theme-provider";
import StarsCanvas from "@/components/global/star-background";
import { motion, useScroll, useSpring } from "framer-motion";
import HeroContent from "./hero-content";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`relative flex flex-col h-full max-w-full items-center justify-center mt-20`}
    >
      {children}
    </div>
  );
}
