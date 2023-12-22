"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SZP from "../../../public/SZP.gif";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

import { FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import { AiFillHome } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineBiotech } from "react-icons/md";
import { PiProjectorScreenChartDuotone } from "react-icons/pi";
import { RiContactsBook2Line } from "react-icons/ri";

import {
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@radix-ui/react-dropdown-menu";

const routes = [
  { title: "Intro", logo: <AiFillHome />, href: "intro" },
  { title: "About Me", logo: <IoPersonOutline />, href: "about-me" },
  { title: "Skills", logo: <MdOutlineBiotech />, href: "skills" },
  {
    title: "Projects",
    logo: <PiProjectorScreenChartDuotone />,
    href: "project",
  },
  { title: "Contact", logo: <RiContactsBook2Line />, href: "contact" },
];

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = (className) => {
  const [path, setPath] = useState("intro");
  console.log(path);
  return (
    <header
      className={`bg-black bg-opacity-50 py-2 fixed top-0 z-50 w-full px-12 flex justify-between items-center text-[20px] ${className}`}
    >
      <Link href={"/"} className="w-full flex flex-row items-center">
        <Image src={SZP} alt="Maoffff" width={50} height={50} />
        <span className="font-semibold dark:text-white px-2 text-base">
          SZP
        </span>
      </Link>
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList className="gap-2">
          {routes.map((item) => (
            <NavigationMenuItem>
              <Button
                variant="ghost"
                onClick={() => {
                  setPath(item.href);
                }}
                className={`dark:text-white dark:text-white/80 font-normal text-xl`}
              >
                <Link
                  href={`${item.href}`}
                  className={`flex flex-col items-center`}
                >
                  <p className={`flex flex-row`}>{item.logo}</p>
                  <p className={`text-[12px]`}>{item.title}</p>
                </Link>
              </Button>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <aside className="flex w-full gap-2 justify-end items-center">
        <Link href={"/"}>
          <Button variant="ghost" className="p-1 hidden sm:block">
            <FaFacebookF className={`text-3xl`} />
          </Button>
        </Link>
        <Link href={"/"}>
          <Button variant="ghost" className="p-1 hidden sm:block">
            <BsTwitterX className={`text-3xl`} />
          </Button>
        </Link>
        <Link href={"/"}>
          <Button variant="ghost" className="p-1 hidden sm:block">
            <FaLinkedin className={`text-3xl`} />
          </Button>
        </Link>
      </aside>
      <aside className={`md:hidden pr-4 justify-start`}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <HiOutlineMenuAlt3 />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-32 justify-right">
            <DropdownMenuLabel>Homepage</DropdownMenuLabel>
            <DropdownMenuGroup>
              {routes.map((item) => (
                <DropdownMenuItem>
                  <Link href={`${item.href}`} className="text-white">
                    {item.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </aside>
    </header>
  );
};

export default Header;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "group block select-none space-y-1 font-medium leading-none"
          )}
          {...props}
        >
          <div className="text-white text-sm font-medium leading-none">
            {title}
          </div>
          <p className="group-hover:text-white/70 line-clamp-2 text-sm leading-snug text-white/40">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
