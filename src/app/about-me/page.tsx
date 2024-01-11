"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SparklesIcon } from "@heroicons/react/20/solid";
import {
  slideInFromBot,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../utils/motion";
import HeroContent from "../intro/hero-content";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const info = [
  {
    title: `Detail Information`,
    description: `I am a Front-End Developer with 1 years of experience. I have
    experience in building responsive websites and web applications.
    I am passionate about building excellent software that improves
    the lives of those around me.`,
  },
  {
    title: `Education`,
    description: `Now I am a 4-year student at the Post Telecommunication Institute of Technology. My major is Electronic Telecommunications. I have a top-class GPA with top 1% of the school.`,
  },
  {
    title: `Career Objective`,
    description: `Now I work as a freelancer Front-End Developer. I am looking for a job. Addition, I work part-time as a channel leader of Discord HLV Online - that's a channel with content around football analysis and tactics.`,
  },
  {
    title: `More...`,
    description: `I'm interested in something new like T3-stack, shadcnUI, trpc or something else. I want to learn new things whenever my schedule allow me to do this.`,
  },
];

const AboutMe = () => {
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
        <h1 className={`text-[14px] text-washed-blue-400`}>About Me</h1>
      </motion.div>
      <motion.div
        className={`
        grid grid-cols-1
        sm:grid-cols-2 
        gap-6 mt-6 text-sm sm:text-md md:text-base text-bold text-slate-100 z-10`}
      >
        {info.map((item, index) => (
          <motion.div
            key={index}
            variants={
              index % 2 === 0
                ? slideInFromLeft(0.75 + (index + 1) * 0.2)
                : slideInFromRight(0.75 + (index + 1) * 0.2)
            }
            className={
              `${ index % 2 === 0 ? `sm:mt-0 lg:mt-0 `: `sm:mt-10 lg:mt-10 `}
              flex gap-6
              text-bold text-slate-100 
              z-10 max-w-[300px] h-[220px]
              lg:flex-row lg:max-w-[400px]`
            }
          >
            <Card className={
              `hover:drop-shadow-xl pb-2`
            }>
              <CardHeader>
                <CardTitle className={`text-base md:text-lg lg:text-2xl`}>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className={`text-justify text-[12px] md:text-[14px]`}>
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        variants={slideInFromLeft(2)}
        className={`flex flex-row items-center justify-center mt-10 mb-5 md:mt-20 md:px-20 w-full z-[20]`}
      >
        <Link href="/skills">
          <Button
            className={`hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-green-500 bg-black px-3 text-green-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-500 before:transition-all before:duration-300 hover:text-white hover:shadow-green-500 hover:bg-black hover:before:left-0 hover:before:w-full 
            `}
          >
            <span
              className={`group-hover:${"hidden"} text-white group-hover:text-black relative z-10`}
            >
              Continue to my skills
            </span>
            <LiaLongArrowAltRightSolid
              className={`group-hover:${"display"} h-6 w-6 text-white group-hover:text-slate-900 transition-all duration-300 ${"group-hover:hidden"}`}
            />
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
