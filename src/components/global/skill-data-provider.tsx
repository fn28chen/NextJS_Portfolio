"use client";

import React from "react";
import DataProvider from "@/components/reuse-comp/data-provider";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
  link: string;
}

const StackDataProvider = ({ 
  src, 
  width, 
  height, 
  index, 
  link,
}: Props) => {
  return (
    <DataProvider
      src={src}
      width={width}
      height={height}
      index={index}
      link={link}
      time_delay={3.5}
    />
  );
};

const SkillDataProvider = ({ 
  src, 
  width, 
  height, 
  index, 
  link,
}: Props) => {
  return (
    <DataProvider
      src={src}
      width={width}
      height={height}
      index={index}
      link={link}
      time_delay={1.5}
    />
  );
};

const SkillDataProviderReverse = ({
  src,
  width,
  height,
  index,
  link,
}: Props) => {
  return (
    <DataProvider
      src={src}
      width={width}
      height={height}
      index={index}
      link={link}
      time_delay={4}
    />
  );
};

export { StackDataProvider, SkillDataProvider, SkillDataProviderReverse };
