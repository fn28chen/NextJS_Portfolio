import React from "react";
import { EvervaultCard, Icon } from "./vault-card";

interface EvervaultCardDemoProps {
  title: string;
  description: string;
}

export function EvervaultCardContent({
  title,
  description,
}: EvervaultCardDemoProps) {
  return (
    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-[32rem] mx-auto p-2 relative h-[40vh]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <h2 className="dark:text-white text-black mt-2 text-[20px] font-bold">
        {title}
      </h2>

      <EvervaultCard text={description} className="text-justify text-md font-light"/>
    </div>
  );
}
