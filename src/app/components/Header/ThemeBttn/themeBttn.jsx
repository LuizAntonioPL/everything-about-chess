"use client";
import "./themeBttn.css";
import { useTheme } from "next-themes";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme()

  const themeSwitcher = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark")
  }

  return (
    <div>
        <input type="checkbox" id="ThemeBttn" onClick={themeSwitcher} defaultChecked/>
        <label htmlFor="ThemeBttn">
          <div className="circle"></div>
          <div className="sunrayTop" />
          <div className="sunray45deg" />
          <div className="sunrayBottom" />
          <div className="sunray135deg" />
          <div className="sunrayLeft" />
          <div className="sunray225deg" />
          <div className="sunrayRight" />
          <div className="sunray315deg" />
        </label>
    </div>
  );
}
