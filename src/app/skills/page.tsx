"use client";
import React from "react";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/20/solid";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../utils/motion";

import HeroContent from "../intro/hero-content";
import { frameworks } from "@/lib/constants";
import Image from "next/image";

const Skills = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={`flex flex-col items-center justify-center mt-20 px-20 w-full z-[20]`}
    >
      <motion.div
        variants={slideInFromTop(0.5)}
        className={`Welcome-box py-2 px-4 border border-green-500 opacity-[0.9]`}
      >
        <SparklesIcon className={`h-5 w-5 text-green-500 inline-block mr-2`} />
        <h1 className={`text-[14px] text-washed-blue-400`}>Skills</h1>
      </motion.div>
      <div
        className="overflow-hidden flex 
        after:absolute
        after:content[''] 
        after:dark:from-brand-dark 
        after:to-transparent 
        after:from-background 
        after:bg-gradient-to-l 
        after:right-0 
        after:bottom-0
        after:top-0 
        after:w-20 
        after:z-10
        before:absolute
        before:content[''] 
        before:dark:from-brand-dark 
        before:to-transparent 
        before:from-background 
        before:bg-gradient-to-r 
        before:right-0 
        before:top-0
        before:bottom-0 
        before:w-20 
        before:z-10
        "
      >
        {[...Array(2)].map((arr) => (
          <div key={arr} className={`flex flex-nowrap animate-slide`}>
            {frameworks.map((framework) => (
              <div
                key={framework.alt}
                className={`relative w-[200px] m-20 shrink-0 flex items-center`}
              >
                <Image
                  src={framework.logo}
                  alt={framework.alt}
                  width={100}
                  height={100}
                  className="object-contain max-w-none"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
