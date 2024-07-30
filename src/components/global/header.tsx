"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Coder from "../../../public/coder.png";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

import { HiOutlineMenuAlt3 } from "react-icons/hi";

import {
  IoHomeOutline,
  IoHomeSharp,
  IoPersonOutline,
  IoPersonSharp,
  IoBarChartOutline,
  IoBarChartSharp,
  IoAppsOutline,
  IoApps,
  IoAddCircleOutline,
  IoAddCircleSharp,
} from "react-icons/io5";

import { DropdownMenuGroup } from "@/components/ui/dropdown-menu";
import { useUpdatePath } from "@/lib/providers/path-provider";
import { Socials } from "@/lib/constant";

const routes = [
  {
    title: "Intro",
    logo: <IoHomeOutline />,
    logo_active: <IoHomeSharp />,
    href: "/intro",
  },
  {
    title: "About Me",
    logo: <IoPersonOutline />,
    logo_active: <IoPersonSharp />,
    href: "/about-me",
  },
  {
    title: "Skills",
    logo: <IoBarChartOutline />,
    logo_active: <IoBarChartSharp />,
    href: "/skills",
  },
  {
    title: "Projects",
    logo: <IoAppsOutline />,
    logo_active: <IoApps />,
    href: "/project",
  },
  {
    title: "Contact",
    logo: <IoAddCircleOutline />,
    logo_active: <IoAddCircleSharp />,
    href: "/contact",
  },
];

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = (className) => {
  const { path, setPath } = useUpdatePath();

  return (
    <header
      className={`bg-black bg-opacity-50 py-2 fixed top-0 z-50 w-full px-12 flex justify-between items-center text-[20px] ${className}`}
    >
      <Link href={"/"} className="w-full flex flex-row items-center">
        <Image src={Coder} alt="Coder" width={50} height={50} />
        <span className="font-semibold dark:text-white px-2 text-base">
          SZP
        </span>
      </Link>
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList className="gap-2">
          {routes.map((item) => (
            <NavigationMenuItem
              key={item.title}
              className={`flex flex-col items-center`}
            >
              <Button
                variant="ghost"
                onClick={() => {
                  setPath(item.href);
                }}
                className={`
                ${path === item.href ? "text-green" : "text-white/60"}
                font-normal text-xl
                `}
              >
                <Link
                  href={`${item.href}`}
                  className={`flex flex-col items-center`}
                >
                  <p className={`flex flex-row`}>
                    {path === item.href ? item.logo_active : item.logo}
                  </p>
                  <p className={`text-[12px]`}>{item.title}</p>
                </Link>
              </Button>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <aside className="flex w-full gap-2 justify-end items-center">
        {Socials.map((item) => (
          <Link href={item.link} key={item.name} target="_blank">
            <Button variant="ghost" className="p-2">
              <Image src={item.src} alt={item.name} width={20} height={20} />
            </Button>
          </Link>
        ))}
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
                <DropdownMenuItem key={item.title}>
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
