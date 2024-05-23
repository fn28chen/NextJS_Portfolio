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
  slideInFromBot,
} from "../../utils/motion";

import Image from "next/image";
import Link from "next/link";
import { Projects } from "@/content/content";
import getFrameworkImageLink from "@/components/style/get-image-link";

const FrameworkImage = ({ framework }: { framework: string }) => {
  const src = getFrameworkImageLink(framework);
  return (
    <motion.div
      className={`flex justify-center items-center gap-2`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Image src={src} width={25} height={25} alt={`${framework}`} />
    </motion.div>
  );
};

const Skills = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={`flex flex-col items-center justify-center mt-20 px-6 sm:px-20 w-full z-[20]`}
    >
      <motion.div
        variants={slideInFromTop(0.5)}
        className={`Welcome-box py-2 px-4 border border-green-500 opacity-[0.9]`}
      >
        <SparklesIcon className={`h-5 w-5 text-green-500 inline-block mr-2`} />
        <h1 className={`text-[14px] text-washed-blue-400`}>Projects</h1>
      </motion.div>
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
