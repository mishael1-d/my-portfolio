import React from "react";
import Buttons from "../../UIComponents/Buttons";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="app-container">
      <div className="relative flex  gap-[6.44rem]">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-[40rem]"
        >
          <picture className=" relative z-[1] scale-[.95] ">
            <img src="/assets/about-img.png" alt="" />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#363636] z-[-1] scale-[.97] rounded-[1.5rem]"></div>
          </picture>
        </motion.div>
        <div className="relative max-w-[64rem] flex flex-col gap-[1.7rem]">
          <motion.h3
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-black text-[4.8rem] font-bold"
          >
            About Me
          </motion.h3>
          <motion.p
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="text-[rgba(54, 54, 54, 0.76)] text-[2rem]"
          >
            I am a Frontend Engineer based in Nigeria. I have always been
            passionate about solving problems, and I am fortunate enough to have
            turned that passion into my profession. Throughout my career, I have
            had the opportunity to work with a variety of clients and projects,
            each one unique and challenging in its own way. I am always seeking
            to learn and improve, and I am constantly pushing myself to exceed
            expectations and deliver the best results possible.
          </motion.p>
          <motion.p
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-[rgba(54, 54, 54, 0.76)] text-[2rem]"
          >
            In this portfolio, you will find a selection of my best work,
            showcasing my skills and experience in Frontend Engineering. From
            Pupilbase to Hydreate, each project represents a different aspect of
            my abilities and demonstrates my versatility as a Frontend Engineer.
          </motion.p>
          <Buttons text="download CV" />
        </div>
      </div>
    </div>
  );
}

export default About;
