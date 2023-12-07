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

import {
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@radix-ui/react-dropdown-menu";

const routes = [
  { title: "Intro", href: "/intro" },
  { title: "About Me", href: "/about-me" },
  { title: "Skills", href: "/skills" },
];

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = (className) => {
  const [path, setPath] = useState("intro");
  return (
    <header
      className={`bg-black py-2 fixed top-0 z-50 w-full px-12 flex justify-between items-center text-[20px] ${className}`}
    >
      <Link href={"/"} className="w-full flex flex-row items-center">
        <Image src={SZP} alt="Maoffff" width={50} height={50} />
        <span className="font-semibold dark:text-white px-2 text-base">
          SZP
        </span>
      </Link>
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList className="gap-2">
          <NavigationMenuItem>
            <Button
              variant="ghost"
              className="dark:text-white dark:text-white/80 font-normal text-xl"
            >
              <Link href={"/intro"}>Intro</Link>
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button
              variant="ghost"
              className="dark:text-white dark:text-white/80 font-normal text-xl"
            >
              <Link href={"/about-me"}>About Me</Link>
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button
              variant="ghost"
              className="dark:text-white dark:text-white/80 font-normal text-xl"
            >
              <Link href={"/skills"}>Skills</Link>
            </Button>
          </NavigationMenuItem>
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
              <DropdownMenuItem>
                <Link href={"/intro"}>Intro</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/about-me"}>About Me</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/skills"}>Skills</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/contact"}>Contact</Link>
              </DropdownMenuItem>
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
