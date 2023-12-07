'use client';
import React from "react";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/20/solid";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../utils/motion";
import HeroContent from "../intro/hero-content";

const AboutMe = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={`flex flex-row items-center justify-center mt-20 px-20 w-full z-[20]`}
    >
      <motion.div
        variants={slideInFromTop}
        className={`Welcome-box py-2 px-4 border border-green-500 opacity-[0.9]`}
      >
        <SparklesIcon className={`h-5 w-5 text-green-500 inline-block mr-2`} />
        <h1 className={`text-[14px] text-washed-blue-400`}>
          About Me
        </h1>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
