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
import Image from "next/image";

const Projects = [
    {
        title: 'Prodigy Cypress Website',
        href: `https://github.com/cao28cao/prodigy-cypress`,
        description: ``,
    },
    {
        title: `Twitter T3-stack clone`,
        href: `https://t3-app-rho-three.vercel.app/`,
        description: ``,
    },
    {
        title: `Blog`,
        href: `https://blog-ketket.vercel.app/`,
        description: ``,   
    },
    {
        title: `Pro Chat`,
        href: `https://oversimplifiedteam7.netlify.app/`,
        description: ``,
    },
]

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
        <h1 className={`text-[14px] text-washed-blue-400`}>Projects</h1>
      </motion.div>
      
    </motion.div>
  );
};

export default Skills;
