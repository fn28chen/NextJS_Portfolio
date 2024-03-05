"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
}

const StackDataProvider = ({ src, width, height, index }: Props) => {
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
      <Image
        src={src}
        width={width}
        height={height}
        alt="skill image"
        className="sm:w-10 sm:h-10 md:w-13 md:h-13"
      />
    </motion.div>
  );
};

const SkillDataProvider = ({ src, width, height, index }: Props) => {
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
      <Image
        src={src}
        width={width}
        height={height}
        alt="skill image"
        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
      />
    </motion.div>
  );
};

const SkillDataProviderReverse = ({ src, width, height, index }: Props) => {
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
      <Image src={src} width={width} height={height} alt="skill image" />
    </motion.div>
  );
};

export { StackDataProvider, SkillDataProvider, SkillDataProviderReverse };
