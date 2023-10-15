"use client";

import Image from "next/image";
import Logo from "@/../public/ChessLogo.png";
import { FaUserAlt } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeButton from "./ThemeBttn/themeBttn";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Links from "./headerLinks";

export default function Header() {
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
          <Image src={Logo} width={50} height={50} alt="Logo" className="dark:invert"/>
          <p className="text-sm w-24 md:text-md">Everything About Chess</p>
        </div>
        <nav className="hidden items-center md:flex">
          <ul className="hidden items-center gap-4 lg:gap-6 md:flex font-bold text-lg">
            {Links.map((link, index) => (
              <li key={index}>
                <Link href={link.linkPath}>{link.linkName}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex items-center h-full gap-6">
        <Link
          className="hidden md:flex h-fit cursor-pointer"
          href={"penis"}
        >
          <FaUserAlt size={25} />
        </Link>
        <BurgerMenu />
        <ThemeButton />
      </div>
    </header>
  );
}
