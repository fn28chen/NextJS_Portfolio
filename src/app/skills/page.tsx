"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import {
  StackDataProvider,
  SkillDataProvider,
} from "../../components/global/skill-data-provider";
import {
  Backend_skill,
  DB,
  Frontend_skill,
  Lang,
  Main_Stack,
} from "../../lib/constant";
import { delay, slideInFromTop } from "../../utils/motion";

import { SparklesIcon } from "@heroicons/react/20/solid";
import { Button } from "@/components/ui/button";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { useUpdatePath } from "@/lib/providers/path-provider";
import {
  Section,
  SectionReverse,
} from "../../components/reuse-comp/section-provider";
import ContinueButton from "@/components/reuse-comp/continue-button";

const Skills = () => {

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={`flex flex-col items-center justify-center mt-20 px-20 w-full h-full z-[20]`}
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
          <Section
            title="Programming Language"
            list={Lang}
            Component_Name={SkillDataProvider}
          />

          <SectionReverse
            title="Front-End Frameworks/Tools"
            list={Frontend_skill}
            Component_Name={SkillDataProvider}
          />

          <Section
            title="Back-End Frameworks"
            list={Backend_skill}
            Component_Name={SkillDataProvider}
          />

          <SectionReverse
            title="Others"
            list={DB}
            Component_Name={SkillDataProvider}
          />
        </div>
        <div className="items-center justify-center">
          <Section
            title="Main Stack"
            list={Main_Stack}
            Component_Name={StackDataProvider}
          />
          <ContinueButton
            nextPath="project"
            variant={delay(5)}
            content="Continue to my project"
            className={`hidden lg:block md:mt-8 md:text-center`}
        />
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
