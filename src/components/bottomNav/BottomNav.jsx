import React from "react";
import {
  AboutIcon,
  BlogIcon,
  ContactIcon,
  HomeIcon,
  WorkIcon,
} from "../../utils/icons";
import { motion } from "framer-motion";

function BottomNav() {
  return (
    <motion.div
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 1 }}
      className="flex fixed bottom-0 py-8 border-t-[1px] w-full justify-center gap-[3rem] bg-[#e6e6e6]"
    >
      <a href="/">
        <HomeIcon />
      </a>
      <a href="/about">
        <AboutIcon />
      </a>
      <a href="/portfolio">
        <WorkIcon />
      </a>
      <a href="/blog">
        <BlogIcon />
      </a>
      <a href="/">
        <ContactIcon />
      </a>
    </motion.div>
  );
}

export default BottomNav;
