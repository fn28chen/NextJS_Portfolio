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
}

const StackDataProvider = ({ src, width, height, index, link }: Props) => {
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
      transition={{ delay: 3.5 + index * animationDelay }}
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

const SkillDataProvider = ({ src, width, height, index, link }: Props) => {
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
      transition={{ delay: 1.5 + index * animationDelay }}
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

const SkillDataProviderReverse = ({
  src,
  width,
  height,
  index,
  link,
}: Props) => {
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
      transition={{ delay: 4 + index * animationDelay }}
    >
      <Link href={link} className={`relative`} target="_blank" rel="noreferrer">
        <Image src={src} width={width} height={height} alt="skill image" />
      </Link>
    </motion.div>
  );
};

export { StackDataProvider, SkillDataProvider, SkillDataProviderReverse };
