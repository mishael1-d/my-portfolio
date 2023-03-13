import React from "react";
import Buttons from "../../UIComponents/Buttons";
import {
  GithubIcon,
  LinkedInIcon,
  SendIcon,
  TwitterIcon,
} from "../../utils/icons";
import { motion } from "framer-motion";
import useMediaQuery from "../../hooks/useMediaQuery";

function Home() {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  return (
    <div className="app-container">
      <div
        className={`flex ${
          !isDesktop && "flex-col-reverse items-center justify-center"
        } justify-between`}
      >
        <div
          className={`flex flex-col gap-[2rem] ${
            isDesktop ? "max-w-[58.6rem]" : "max-w-full"
          }`}
        >
          {isDesktop ? (
            <motion.h3
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
              className={`text-[4.8rem] text-[#2E2E2E] leading-[5.9rem] ${
                !isDesktop && "mt-4"
              }`}
            >
              Dada Mishael
            </motion.h3>
          ) : (
            <motion.h3
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 1.2 }}
              className={`text-[4.8rem] text-[#2E2E2E] leading-[5.9rem] ${
                !isDesktop && "mt-4"
              }`}
            >
              Dada Mishael
            </motion.h3>
          )}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.2 }}
            className="flex items-center gap-[1.4rem]"
          >
            <div className="w-[9.5rem] h-[1px] bg-[#363636]"></div>
            <p className="text-[2.4rem] text-[#2E2E2E]">Frontend Engineer</p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.2 }}
            className={`text-[2rem] leading-[2.4rem]  ${
              isDesktop
                ? "max-w-[45.5rem] text-justify"
                : "max-w-full text-left"
            } `}
          >
            I am a Frontend Engineer based in Nigeria. I have always been
            passionate about solving problems, and I am fortunate enough to have
            turned that passion into my profession.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.2 }}
            className="flex gap-[3rem]"
          >
            <a
              href="http://github.com/mishael1-d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </a>
            <a
              href="http://linkedin.com/in/mishael-dada"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="http://twitter.com/dada_mishael"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </a>
          </motion.div>
          <motion.div
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Buttons text="say hello" icon={<SendIcon />} />
          </motion.div>
        </div>
        {isDesktop ? (
          <motion.div
            className={` ${isDesktop ? "w-[40rem]" : "w-full"}`}
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <picture>
              <img src="/assets/hero-img.png" alt="" />
            </picture>
          </motion.div>
        ) : (
          <motion.div
            className={` ${isDesktop ? "w-[40rem]" : "w-full"}`}
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
          >
            <picture>
              <img src="/assets/hero-img.png" alt="" />
            </picture>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Home;
