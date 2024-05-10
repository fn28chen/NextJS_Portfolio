import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/providers/next-theme-provider";
import StarsCanvas from "@/components/global/star-background";
import Header from "@/components/global/header";
import { PathProvider } from "@/lib/providers/path-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Phongretzka's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <PathProvider>
          <StarsCanvas />
          <ThemeProvider attribute={`class`} defaultTheme={`dark`}>
            <Header />
            {children}
            <SpeedInsights />
          </ThemeProvider>
        </PathProvider>
      </body>
    </html>
  );
}
