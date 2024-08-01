"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import {
  slideInFromTop,
  slideInFromBot,
} from "../../utils/motion";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SparklesIcon } from "@heroicons/react/20/solid";

import { Projects } from "@/content/content";
import { FrameworkImage } from "@/components/ui/framework-display";
import SparklesBox from "@/components/reuse-comp/sparkles-box";


const Skills = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={`flex flex-col items-center justify-center mt-20 px-6 sm:px-20 w-full z-[20]`}
    >
      <SparklesBox button_name="Projects" />
      <motion.div
        className={`
        grid grid-cols-12
        gap-6 mt-6 text-sm sm:text-md md:text-base text-bold text-slate-100 z-10 h-[50vh]`}
      >
        {Projects.map((item, index) => (
          <motion.div
            key={index}
            variants={
              index % 2 === 0
                ? slideInFromTop(0.75 + (index + 1) * 0.2)
                : slideInFromBot(0.75 + (index + 1) * 0.2)
            }
            className={`
          flex gap-6
          text-bold text-slate-100 
          z-10 h-[250px]
          lg:flex-row w-[350px]
          col-span-12
          md:col-span-6
          xl:col-span-4
          `}
          >
            <Card
              className={`w-full items-center justify-between flex flex-col p-4`}
            >
              <CardHeader>
                <CardTitle className={`text-base md:text-lg lg:text-2xl`}>
                  <Link
                    href={item.href}
                    target={`_blank`}
                    className={`text-base md:text-lg lg:text-2xl hover:text-green-500`}
                  >
                    <span>{item.title}</span>
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription
                  className={`text-justify text-[12px] md:text-[14px]`}
                >
                  {item.description}
                </CardDescription>
              </CardContent>
              <CardContent className={`mt-auto`}>
                <div className={`flex flex-row gap-2`}>
                  {item.techStack?.map((tech, index) => (
                    <FrameworkImage key={index} framework={tech} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
