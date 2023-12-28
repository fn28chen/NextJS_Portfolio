"use client";
import React from "react";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/20/solid";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../utils/motion";

import HeroContent from "../intro/hero-content";
import Image from "next/image";
import Link from "next/link";

const Projects = [
  {
    title: "Prodigy Cypress Website",
    href: `https://github.com/cao28cao/prodigy-cypress`,
    description: `This project will be released soon.`,
    techStack: [
      `NextJS`,
      `TailwindCSS`,
      `ShadCN`,
      `TypeScript`,
      `Drizzle`,
      `SupaBase`,
    ],
  },
  {
    title: `Twitter T3-stack clone`,
    href: `https://t3-app-rho-three.vercel.app/`,
    description: `A Twitter clone with local storage as a first-time I use T3-stack as a full-stack framework. That's can use as a playground in a group.`,
    techStack: [`NextJS`, `TailwindCSS`, `TypeScript`, `Prisma`, `MySQL`],
  },
  {
    title: `Blog`,
    href: `https://blog-ketket.vercel.app/`,
    description: `This is a blog build for Facebook Page for their 12 Cung Hoang Dao Series. It is a blog that allows users to read their daily horoscope and also allows users to read their daily fortune.`,
    techStack: [
      `NextJS`,
      `TailwindCSS`,
      `FramerMotion`,
      `Prisma`,
      `MySQL`,
      `Sanity`,
    ],
  },
  {
    title: `Pro Chat`,
    href: `https://oversimplifiedteam7.netlify.app/`,
    description: `Pro Chat is a group project that I built in the 5th semester with my collaborators. It is a chat application that allows users to chat with each other in real-time.`,
    techStack: [
      `ReactJS`,
      `TailwindCSS`,
      `TypeScript`,
      `Python`,
      `SocketIO`,
      `MongoDB`,
    ],
  },
  {
    title: `NEXTlify`,
    href: `https://nextlify-iota.vercel.app/`,
    description: ``,
    techStack: [`NextJS`, `TailwindCSS`, `TypeScript`, `SupaBase`],
  },
  {
    title: `Football Blog`,
    href: `https://blog-football.vercel.app/`,
    description: `That's my simple blog about football and especially Bayern Munich, but it's not finished yet. I will update it soon.`,
    techStack: [`NextJS`, `TailwindCSS`, `JSONserver`],
  },
];

function getFrameworkImageLink(framework: string) {
  const frameworkImageLink: { [key: string]: string } = {
    NextJS: `/next.png`,
    TailwindCSS: `/tailwind.png`,
    ShadCN: `/shadcn.png`,
    TypeScript: `/ts.png`,
    Drizzle: `/drizzle.png`,
    Supabase: `/supabase.png`,
    Prisma: `/prisma.webp`,
    MySQL: `/mysql.png`,
    FramerMotion: `/framer.png`,
    ReactJS: `/react.png`,
    Python: `/python.png`,
    SocketIO: `/socket.png`,
    MongoDB: `/mongodb.webp`,
    JSONServer: `/jsonserver.png`,
    SupaBase: `/supabase.png`,
    Sanity: `/sanity.png`,
    JSONserver: `/jsonserver.png`,
  };

  return frameworkImageLink[framework];
}

const FrameworkImage = ({ framework }: { framework: string }) => {
  const src = getFrameworkImageLink(framework);
  return (
    <motion.div
      className={`flex justify-center items-center gap-2`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Image src={src} width={25} height={25} alt={`${framework}`} />
    </motion.div>
  );
};

const Skills = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={`flex flex-col items-center justify-center mt-20 px-6 sm:px-20 w-full z-[20]`}
    >
      <motion.div
        variants={slideInFromTop(0.5)}
        className={`Welcome-box py-2 px-4 border border-green-500 opacity-[0.9]`}
      >
        <SparklesIcon className={`h-5 w-5 text-green-500 inline-block mr-2`} />
        <h1 className={`text-[14px] text-washed-blue-400`}>Projects</h1>
      </motion.div>
      <motion.div
        className={`
        grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3
        gap-6 mt-6 text-sm sm:text-md md:text-base text-bold text-slate-100 z-10`}
      >
        {Projects.map((item, index) => (
          <motion.div
            key={index}
            variants={
              index % 2 === 0
                ? slideInFromLeft(0.75 + (index + 1) * 0.2)
                : slideInFromRight(0.75 + (index + 1) * 0.2)
            }
            className={`
          flex gap-6
          text-bold text-slate-100 
          z-10 h-[220px]
          lg:flex-row w-[300px]`}
          >
            <Card className={`w-[300px] items-center justify-center`}>
              <CardHeader>
                <CardTitle className={`text-base md:text-lg lg:text-2xl`}>
                  <Link
                    href={item.href}
                    target={`_blank`}
                    className={`text-base md:text-lg lg:text-2xl hover:text-green-500`}
                  >
                    <span>{item.title}</span>
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription
                  className={`text-justify text-[12px] md:text-[14px]`}
                >
                  {item.description}
                </CardDescription>
              </CardContent>
              <CardContent>
                <div className={`flex flex-row gap-2`}>
                  {item.techStack?.map((tech, index) => (
                    <FrameworkImage key={index} framework={tech} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
