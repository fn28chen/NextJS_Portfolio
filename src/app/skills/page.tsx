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
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { useUpdatePath } from "@/lib/providers/path-provider";
const Skills = () => {

  const { setPath } = useUpdatePath();

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
      <div className="flex flex-col-reverse gap-4 lg:flex-row lg:gap-32 items-center justify-center">
        <div className="items-center justify-center">
          <motion.div variants={delay(1)}>
            <motion.p className={`px-4 py-4 text-center`}>
              Programming Language
            </motion.p>
            <motion.div
              variants={delay(1)}
              className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center"
            >
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
          </motion.div>
          <motion.div variants={delay(1)}>
            <motion.p className={`px-4 py-4 text-center`}>
              Front-End Frameworks/Tools
            </motion.p>
            <motion.div
              variants={delay(1)}
              className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center"
            >
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
          </motion.div>
          <motion.div variants={delay(1)}>
            <motion.p className={`px-4 py-4 text-center`}>
              Back-End Frameworks
            </motion.p>
            <motion.div
              variants={delay(1)}
              className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center"
            >
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
          </motion.div>
          <motion.div variants={delay(1)}>
            <motion.p className={`px-4 py-4 text-center`}>
              Database and ORM
            </motion.p>
            <motion.div
              variants={delay(1)}
              className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center"
            >
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
        </div>
        <div className="items-center justify-center">
          <motion.div variants={delay(3)}>
            <motion.p className={`px-4 py-4 text-center`}>
              My Main Stack
            </motion.p>
            <motion.div
              variants={delay(3.5)}
              className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center"
            >
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
          </motion.div>
          <motion.div variants={delay(6)} className={`mt-8 text-center`}>
            <Link href="/project">
              <Button
                onClick={() => setPath("/project")}
                className={`hover:before:bg-redborder-red-500 relative h-[50px] w-60 overflow-hidden border border-green-500 bg-black px-3 text-green-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-500 before:transition-all before:duration-300 hover:text-white hover:shadow-green-500 hover:bg-black hover:before:left-0 hover:before:w-full 
            `}
              >
                <span
                  className={`group-hover:${"hidden"} text-white group-hover:text-black relative z-10`}
                >
                  Continue to my projects
                </span>
                <LiaLongArrowAltRightSolid
                  className={`group-hover:${"display"} h-6 w-6 text-white group-hover:text-slate-900 transition-all duration-300 ${"group-hover:hidden"}`}
                />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
