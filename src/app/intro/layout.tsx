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
    <div className={`flex items-center justify-center w-full mt-20`}>
      <div className={`relative flex flex-col h-full w-full items-center justify-center max-w-[90vw]`}>
      {/* <video autoPlay muted loop className={``}></video> */}
      {children}
    </div>
    </div>
  );
}
