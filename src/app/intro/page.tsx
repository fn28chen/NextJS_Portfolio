"use client";
import React from "react";
import HeroContent from "./hero-content";
import { motion, useScroll, useSpring } from "framer-motion";

const Hero = () => {
  return (
    <div className={`relative flex flex-col h-full w-full`}>
      {/* <video autoPlay muted loop className={``}></video> */}
      <HeroContent />
    </div>
  );
};

export default Hero;
