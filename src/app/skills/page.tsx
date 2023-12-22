"use client";
import {
  Backend_skill,
  DB,
  Frontend_skill,
  Lang,
  Main_Stack,
} from "../../lib/constants";
import React from "react";
import {
  StackDataProvider,  
  SkillDataProvider,
} from "../../components/global/skill-data-provider";
import { motion } from "framer-motion";
import {
  delay,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../utils/motion";
import { SparklesIcon } from "@heroicons/react/20/solid";
const Skills = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={`flex flex-col items-center justify-center mt-20 px-20 w-full z-[20]`}
    >
      <motion.div
        variants={slideInFromTop(0)}
        className={`Welcome-box py-2 px-4 border border-green-500 opacity-[0.9]`}
      >
        <SparklesIcon className={`h-5 w-5 text-green-500 inline-block mr-2`} />
        <h1 className={`text-[14px] text-washed-blue-400`}>Skills</h1>
      </motion.div>
      <motion.div 
      className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Main_Stack.map((image, index) => (
          <StackDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </motion.div>
      <motion.div 
      className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Lang.map((image, index, array) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={array.length - index - 1}
          />
        ))}
      </motion.div>
      <motion.div
      className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </motion.div>
      <motion.div
      className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, index, array) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={array.length - index - 1}
          />
        ))}
      </motion.div>
      <motion.div
      className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {DB.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
