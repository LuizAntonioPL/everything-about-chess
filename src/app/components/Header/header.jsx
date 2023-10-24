"use client";

import Image from "next/image";
import Logo from "@/../public/ChessLogo.png";
import { FaUserAlt } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeButton from "./ThemeBttn/themeBttn";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Links from "./headerLinks";
import { usePathname } from "next/navigation";

export default function Header() {
  const route = usePathname();
  let [bgGradient, setBg] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", headerBgColor);
  });

  const headerBgColor = (e) => {
    if (window.scrollY > 0) {
      setBg(
        (bgGradient =
          "bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 rounded-md")
      );
    } else {
      setBg((bgGradient = "bg-transparent"));
    }
  };

  return (
    <header
      className={`grid-area-header flex items-center justify-between px-8 lg:px-32 py-4 fixed top-0 w-full box-border ${bgGradient}`}
      style={{ zIndex: 1 }}
    >
      <div className="flex gap-3 lg:gap-10">
        <div className="flex items-center justify-start w-fit">
          <Image
            src={Logo}
            width={50}
            height={50}
            alt="Logo"
            className="dark:invert"
          />
          <p className="text-sm w-24 md:text-md">Everything About Chess</p>
        </div>
        <nav className="hidden items-center md:flex">
          <ul className="hidden items-center gap-4 lg:gap-6 md:flex font-bold text-lg">
            {Links.map((link, index) => (
              <li
                key={index}
                className={`${
                  route === link.linkPath
                    ? "opacity-100 border-b-2 border-black dark:border-white"
                    : "opacity-50"
                } transition-all duration-200`}
              >
                <Link href={link.linkPath}>{link.linkName}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex items-center h-full gap-6">
        <div className="flex gap-1">
          <Link
            className="p-2 rounded-sm hidden md:flex h-full cursor-pointer bg-gray-800 text-white dark:bg-white dark:text-black"
            href={"/Login"}
          >
            Login
          </Link>
          <Link
            className="p-2 rounded-sm hidden md:flex h-full cursor-pointer bg-indigo-300 text-black dark:text-white dark:bg-indigo-600"
            href={"/SignUp"}
          >
            Sign Up
          </Link>
        </div>
        <BurgerMenu />
        <ThemeButton />
      </div>
    </header>
  );
}
