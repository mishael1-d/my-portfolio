import React, { useEffect, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { MoonIcon, SunIcon } from "../utils/icons";
import { motion } from "framer-motion";

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
  const spring = {
    type: "spring",
    stiffness: 100,
    damping: 5,
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className={`fixed ${
        isDesktop ? "right-[6rem] top-[3rem]" : "right-[1rem] top-[1rem]"
      } cursor-pointer z-40`}
      onClick={toggleThemeMode}
    >
      <div
        data-theme={darkMode}
        className={`${darkMode === "light" ? "bg-black" : "bg-white"} 
        data-[theme=light]:justify-start data-[theme=dark]:justify-end
        w-[5rem] h-[2rem]  flex relative rounded-[1.5rem] cursor-pointer`}
      >
        <motion.div
          layout
          transition={spring}
          className={`${
            darkMode === "light"
              ? "block bg-white text-black"
              : "block bg-black text-white"
          }   rounded-full cursor-pointer absolute duration-500`}
        >
          {darkMode === "light" ? <MoonIcon /> : <SunIcon />}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ThemeSwitcher;
