import React from "react";
import { motion } from "framer-motion";

import { delay } from "../../utils/motion";

interface SectionProps {
  title: string;
  Component_Name: React.ElementType;
  list: {
    skill_name: string;
    Image: string;
    width: number;
    height: number;
    link: string;
  }[];
}

const Section = ({ title, list, Component_Name }: SectionProps) => {
  return (
    <motion.div variants={delay(1)}>
      <motion.p className={`px-4 py-4 text-center`}>{title}</motion.p>
      <motion.div
        variants={delay(1)}
        className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center"
      >
        {list.map((image, index, array) => (
          <Component_Name
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            link={image.link}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

const SectionReverse = ({ title, list, Component_Name }: SectionProps) => {
  return (
    <motion.div variants={delay(1)}>
      <motion.p className={`px-4 py-4 text-center`}>{title}</motion.p>
      <motion.div
        variants={delay(1)}
        className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center"
      >
        {list.map((image, index, array) => (
          <Component_Name
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={array.length - index - 1}
            link={image.link}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export { Section, SectionReverse };