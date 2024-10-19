"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  slideInFromBot,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../utils/motion";
import { info } from "../../content/content";
import { useUpdatePath } from "@/lib/providers/path-provider";
import { EvervaultCardContent } from "@/components/ui/vault-card-test";
import ContinueButton from "@/components/reuse-comp/continue-button";
import SparklesBox from "@/components/reuse-comp/sparkles-box";

const AboutMe = () => {
  const { setPath } = useUpdatePath();

  const [animationVariant, setAnimationVariant] = useState({});
  const index = 0; // Add the declaration of the 'index' variable here

  useEffect(() => {
    setAnimationVariant(
      window.innerWidth >= 1024 // 1024px is typically considered the breakpoint for large screens
        ? index % 2 === 0
          ? slideInFromTop(0.75 + (index + 1) * 0.2)
          : slideInFromBot(0.75 + (index + 1) * 0.2)
        : index % 2 === 0
        ? slideInFromLeft(0.75 + (index + 1) * 0.2)
        : slideInFromRight(0.75 + (index + 1) * 0.2)
    );
  }, [index]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={`flex flex-col items-center justify-center mt-20 px-10 md:px-20 w-full h-full z-[20]`}
    >
      <SparklesBox button_name="About Me" />
      <motion.div
        className={`
        grid grid-cols-12 grid-rows-12
        gap-4 mt-6 text-sm sm:text-md md:text-base text-bold text-slate-100 z-10 h-full md:h-[70vh] lg:h-[50vh]`}
      >
        {info.map((item, index) => (
          <motion.div
            key={index}
            variants={
              index % 2 === 0
                ? slideInFromTop(0.75 + (index + 1) * 0.2)
                : slideInFromBot(0.75 + (index + 1) * 0.2)
            }
            className={`${
              index % 2 === 0 ? `sm:mt-0 md:mt-0 lg:mt-0 ` : `sm:mt-0 md:mt-8 lg:mt-10 `
            }
              row-span-12 md:row-span-6 lg:row-span-3
              col-span-12 md:col-span-6 lg:col-span-3
              text-bold text-slate-100 
              z-10 max-w-[300px] h-[35vh]
              lg:flex-row lg:max-w-[400px]`}
          >
            <EvervaultCardContent
              title={item.title}
              description={item.description}
            />
          </motion.div>
        ))}
      </motion.div>
      
      <ContinueButton
        nextPath="skills"
        variant={slideInFromLeft(2)}
        content="Continue to my skills"
        className={`flex flex-row items-center justify-center mt-10 mb-5 md:mt-20 md:px-20 w-full z-[20] gap-2`}
      />
    </motion.div>
  );
};

export default AboutMe;

