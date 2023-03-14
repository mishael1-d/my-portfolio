import React from "react";
import {
  AboutIcon,
  BlogIcon,
  ContactIcon,
  HomeIcon,
  WorkIcon,
} from "../../utils/icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function BottomNav() {
  return (
    <motion.div
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 1 }}
      className="flex sticky bottom-0 py-8 border-t-[1px] w-full justify-center gap-[3rem] bg-[#e6e6e6]"
    >
      <Link to="/">
        <HomeIcon />
      </Link>
      <Link to="/about">
        <AboutIcon />
      </Link>
      <Link to="/">
        <WorkIcon />
      </Link>
      <Link to="/">
        <BlogIcon />
      </Link>
      <Link to="/">
        <ContactIcon />
      </Link>
    </motion.div>
  );
}

export default BottomNav;
