import React from "react";
import {
  AboutIcon,
  BlogIcon,
  ContactIcon,
  HomeIcon,
  WorkIcon,
} from "../../utils/icons";
import "./sidebar.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <motion.aside
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 top-0 bg-white dark:bg-[#4a4a4a] p-[2.5rem] w-[8rem] min-h-screen flex flex-col justify-between items-center z-10`}
    >
      <motion.a
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5 }}
        href="#home"
      >
        <p className="font-extrabold text-[2.5rem] dark:text-white">M.</p>
      </motion.a>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="nav"
      >
        <div className="nav__menu">
          <ul className="nav__list flex flex-col gap-[2.5rem]">
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.2 }}
              className="nav__item"
            >
              <Link
                to="/"
                className="text-[2.5rem] font-700 hover:text-blue-700"
              >
                <HomeIcon />
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.2 }}
              className="nav__item"
            >
              <Link
                to="/about"
                className="text-[2.5rem] font-700 hover:text-blue-700"
              >
                <AboutIcon />
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.2 }}
              className="nav__item"
            >
              <Link
                to="/portfolio"
                className="text-[2.5rem] font-700 hover:text-blue-700"
              >
                <WorkIcon />
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.2 }}
              className="nav__item"
            >
              <Link
                to="/blog"
                className="text-[2.5rem] font-700 hover:text-blue-700"
              >
                <BlogIcon />
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.2 }}
              className="nav__item"
            >
              <Link
                to="#home"
                className="text-[2.5rem] font-700 hover:text-blue-700"
              >
                <ContactIcon />
              </Link>
            </motion.li>
          </ul>
        </div>
      </motion.nav>
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="nav__footer"
      >
        <span className="text-[1.2rem] text-slate-400 -rotate-180 copyright">
          &copy; 2023. Mishael Dada
        </span>
      </motion.div>
    </motion.aside>
  );
}

export default Sidebar;
