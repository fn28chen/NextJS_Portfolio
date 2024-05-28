"use client";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromTop,
} from "../utils/motion";
export default function Home() {
  return (
    <main className="flex flex-col gap-2 h-full w-full justify-center items-center fixed">
      <motion.div
        initial="hidden"
        animate="visible"
        className={`flex flex-row items-center justify-center mt-20 px-20 w-full z-[20]`}
      >
        <motion.p className={`p-4`} variants={slideInFromTop(0.5)}>
          Click here to see more
        </motion.p>
        <motion.div variants={slideInFromLeft(1)}>
          <Link href="/intro" className={`group block`}>
            <Button
              className="
              rounded-full 
              w-12 h-12
              flex justify-center items-center 
              scale-125
              hover:scale-150 transform-gpu
              bg-inherit group-hover:bg-slate-50 
              shadow-[inset_7px_1px_127px_21px_rgba(114,_117,_133,_0.24)] 
              duration-300
              relative overflow-hidden bg-gray-800 text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:duration-500 before:ease-out group-hover:before:h-96 group-hover:before:w-96 group-hover:before:rounded-full group-hover:before:duration-500 group-hover:before:ease-out
              slide-out-to-right-4
              "
            >
              <FaArrowRight
                className={`h-6 w-6 text-white group-hover:text-slate-900 transition-all duration-300`}
              />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
