"use client";
import { ThemeProvider } from "@/lib/providers/next-theme-provider";
import StarsCanvas from "@/components/global/star-background";
import { motion, useScroll, useSpring } from "framer-motion";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <div className={`py-16`}>
      {children}
    </div>
  );
}
