import Link from "next/link";
import Links from "../headerLinks";
import "./burgerMenu.css"

export default function burgerMenu() {
  return (
    <div className="menuContainer md:hidden">
      <input type="checkbox" id="burgerMenu" />
      <label htmlFor="burgerMenu">
        <div className="menuBars" />
      </label>
      <nav className="content">
      {Links.map((link, index) => (
              <li key={index}>
                <Link href={link.linkPath}> 
                    {link.linkName}
                </Link>
              </li>
        ))}
      </nav>
    </div>
  );
}