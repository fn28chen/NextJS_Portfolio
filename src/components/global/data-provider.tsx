"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
  link: string;
  time_delay: number;
}

const DataProvider = ({ src, width, height, index, link, time_delay }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: time_delay + index * animationDelay }}
    >
      <Link href={link} className={`relative`} target="_blank" rel="noreferrer">
        <Image
          src={src}
          width={width}
          height={height}
          alt="skill image"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
        />
      </Link>
    </motion.div>
  );
};

export default DataProvider;