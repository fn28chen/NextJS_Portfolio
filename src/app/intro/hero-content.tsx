"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRive } from "@rive-app/react-canvas";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/20/solid";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

import { Button } from "../../components/ui/button";
import Link from "next/link";

function Simple() {
  const { rive, RiveComponent } = useRive({
    src: "https://public.rive.app/community/runtime-files/1752-3469-coder.riv",
    autoplay: true,
    stateMachines: "Animation 1",
  });
  return (
    <RiveComponent
    // onMouseEnter={() => rive && rive.play()}
    // onMouseLeave={() => rive && rive.pause()}
    />
  );
}

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={`flex flex-row items-center justify-center mt-20 px-20 w-full z-[20]`}
    >
      <div
        className={`h-full w-full flex flex-col gap-5 justify-center text-start m-auto`}
      >
        <motion.div
          variants={slideInFromTop}
          className={`Welcome-box py-2 px-4 border border-green-500 opacity-[0.9]`}
        >
          <SparklesIcon
            className={`h-5 w-5 text-green-500 inline-block mr-2`}
          />
          <h1 className={`text-[14px] text-washed-blue-400`}>
            Front-End Developer
          </h1>
        </motion.div>
        {/* Name and the running text */}
        <motion.div
          variants={slideInFromLeft(0.5)}
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
        <motion.p
          variants={slideInFromLeft(1)}
          className={`text-lg text-gray-400 my-5 max-w-[600px] text-justify`}
        >
          Hello, I'm Tr Phong - Dominik, a web designer and developer, I am a
          person who is always curious about new things. Recently I am trying to
          challenge myself by learning web development with ambition to become a
          specialist.
        </motion.p>
        <motion.div
          variants={slideInFromLeft(1)}
          className={`text-lg text-gray-400 my-5 max-w-[600px]`}
        >
          <Link href={`/about-me`} className={`group block`}>
            <Button
              className="
              before:ease relative h-12 w-40 overflow-hidden border border-white bg-black text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-black hover:before:-translate-x-40
              hover:bg-white hover:text-black hover:duration-700"
            >
              <span
                className={`text-white group-hover:text-black relative z-10`}
              >
                Read Full My Bio
              </span>
              <LiaLongArrowAltRightSolid
                className={`text-white group-hover:text-black items-center justify-center relative z-10`}
              />
            </Button>
          </Link>
        </motion.div>
      </div>
      <motion.div
        variants={slideInFromRight(1)}
        className={`flex flex-col gap-5 justify-center items-center`}
      >
        <div className={`flex-1 flex justify-center items-center`}>
          <div
            className={`
              sm:w-[300px]
              sm:h-[300px]
              md:w-[400px]
              md:h-[400px]
              lg:w-[500px]
              lg:h-[500px]
              xl:w-[600px]
              xl:h-[600px]
              2xl:w-[700px]
              2xl:h-[700px]
              flex justify-center items-center
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
