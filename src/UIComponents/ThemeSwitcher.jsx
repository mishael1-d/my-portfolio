import React, { useEffect, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { MoonIcon, SunIcon } from "../utils/icons";

function ThemeSwitcher() {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const [darkMode, setDarkMode] = useState("light");
  useEffect(() => {
    if (window.localStorage.getItem("darkMode") === null) {
      window.localStorage.setItem("darkMode", "light");
    }
  }, []);
  useEffect(() => {
    const html = document.querySelector("html");
    const body = document.querySelector("body");
    if (window.localStorage.getItem("darkMode") === "dark") {
      setDarkMode("dark");
      html.classList.add("dark");
      body.style.backgroundColor = "#4a4a4a";
    } else {
      html.classList.remove("dark");
      body.style.backgroundColor = "#ffffff";
      setDarkMode("light");
    }
  }, [darkMode]);
  const toggleThemeMode = () => {
    if (window.localStorage.getItem("darkMode") === "light") {
      window.localStorage.setItem("darkMode", "dark");
      setDarkMode("dark");
    } else {
      setDarkMode("light");
      window.localStorage.setItem("darkMode", "light");
    }
  };
  return (
    <div
      className={`fixed ${
        isDesktop ? "right-[6rem] top-[3rem]" : "right-[1rem] top-[1rem]"
      } cursor-pointer z-40`}
      onClick={toggleThemeMode}
    >
      <div
        className={`${
          darkMode === "light" ? "bg-black text-white" : "bg-white text-black"
        } w-[5rem] h-[2rem]  flex relative rounded-[1.5rem] cursor-pointer`}
      >
        <div
          className={`${
            darkMode === "light" ? "block left-0" : "right-0 hidden"
          } bg-white text-black rounded-full cursor-pointer absolute duration-500`}
        >
          <MoonIcon />
        </div>

        <div
          className={`${
            darkMode === "dark" ? "block right-0" : "left-0 hidden"
          } bg-black text-white rounded-full cursor-pointer absolute duration-500`}
        >
          <SunIcon />
        </div>
      </div>
    </div>
  );
}

export default ThemeSwitcher;
