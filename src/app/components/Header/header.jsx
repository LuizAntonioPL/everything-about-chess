import "./burgerMenu.css";
import Image from "next/image";
import Logo from "@/../public/ChessLogo.png";
import { FaSearch, FaUserAlt } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  return (
    <header
      className="grid-area-header flex items-center justify-between px-8 py-3 fixed top-0 w-full bg-lime-800 text-white box-border lg:px-20"
      style={{ zIndex: 1 }}
    >
      <div className="flex gap-0 md:gap-10">
        <div className="flex items-center justify-start w-fit">
          <Image
            src={Logo}
            width={40}
            height={40}
            className="invert"
            alt="Logo"
          />
          <p className="text-sm w-24 md:text-md">All About Chess</p>
        </div>
        <nav className="hidden items-center gap-3 md:flex font-bold">
          <ul>
            {Links.map((link, index) => (
              <li>
                <Link href={link.linkPath}>{link.linkName}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex items-center h-full gap-6">
        <a className="flex cursor-pointer h-fit">
          <FaSearch size={25} />
        </a>
        <a className="hidden md:flex h-fit cursor-pointer">
          <FaUserAlt size={25} />
        </a>
      </div>
    </header>
  );
}
