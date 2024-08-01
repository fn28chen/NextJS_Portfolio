"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/20/solid";

import { useUpdatePath } from "@/lib/providers/path-provider";
import { TextGenerateEffect } from "@/components/style/text-generator-effect";
import { Describe } from "@/lib/constant";
import { Simple } from "@/components/ui/rive-component";
import ContinueButton from "@/components/reuse-comp/continue-button";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={`flex flex-col md:flex-row items-center justify-center mt-20 px-20 w-full z-[20] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-full`}
    >
      <div
        className={`h-full w-full flex flex-col gap-5 justify-center text-start m-auto`}
      >
        <motion.div
          variants={slideInFromTop(0.2)}
          className={`Welcome-box py-2 px-4 border border-green-500 opacity-[0.9]`}
        >
          <SparklesIcon
            className={`h-5 w-5 text-green-500 inline-block mr-2`}
          />
          <h1 className={`text-[14px] text-washed-blue-400`}>
            Front-End Developer
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.2)}
          className={`flex flex-col gap-6 mt-6 text-6xl text-bold text-slate-100 max-w-[750px] w-auto h-auto`}
        >
          <span
            className={`font-bold text-[16px] md:text-[32px] lg:text-[48px]`}
          >
            Tran Phong
          </span>
          <span
            className={`bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent font-bold
            text-[16px] md:text-[32px] lg:text-[48px]`}
          >
            Front-End Developer
          </span>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className={`text-sm md:text-lg lg:text-2xl text-gray-400 my-5 max-w-[600px] text-justify`}
        >
          <TextGenerateEffect words={Describe} />
        </motion.div>
        <ContinueButton
          nextPath="about-me"
          variant={slideInFromLeft(10)}
          content="Read full my bio"
          className={`text-lg text-gray-400 my-5 max-w-[600px]`}
        />
      </div>
      <motion.div
        variants={slideInFromRight(1)}
        className={`flex flex-col gap-5 justify-center items-center`}
      >
        <div className={`flex-1 flex justify-center items-center`}>
          <div
            className={`
              md:w-[300px]
              md:h-[300px]
              lg:w-[400px]
              lg:h-[400px]
              xl:w-[500px]
              xl:h-[500px]
              2xl:w-[600px]
              2xl:h-[600px]
              hidden md:flex justify-center items-center
            `}
            style={{ transform: "scale(1)" }}
          >
            <Simple />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
