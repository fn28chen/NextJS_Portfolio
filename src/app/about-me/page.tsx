"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SparklesIcon } from "@heroicons/react/20/solid";
import {
  slideInFromBot,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../utils/motion";
import { info } from "../../content/content";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { useUpdatePath } from "@/lib/providers/path-provider";
import { EvervaultCardContent } from "@/components/ui/vault-card-test";

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
      <motion.div
        variants={slideInFromTop(0.5)}
        className={`Welcome-box py-2 px-4 border border-green-500 opacity-[0.9]`}
      >
        <SparklesIcon className={`h-5 w-5 text-green-500 inline-block mr-2`} />
        <h1 className={`text-[14px] text-washed-blue-400`}>About Me</h1>
      </motion.div>
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
      <motion.div
        variants={slideInFromLeft(2)}
        className={`flex flex-row items-center justify-center mt-10 mb-5 md:mt-20 md:px-20 w-full z-[20] gap-2`}
      >
        <Link href="/skills">
          <Button
            onClick={() => {
              setPath("/skills");
            }}
            className={`hover:before:bg-redborder-red-500 relative h-[50px] w-56 overflow-hidden border border-green-500 bg-black px-3 text-green-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-500 before:transition-all before:duration-300 hover:text-white hover:shadow-green-500 hover:bg-black hover:before:left-0 hover:before:w-full 
            `}
          >
            <span
              className={`group-hover:${"hidden"} text-white group-hover:text-black relative z-10`}
            >
              Continue to my skills
            </span>
            <LiaLongArrowAltRightSolid className="text-[24px] z-10" />
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;

