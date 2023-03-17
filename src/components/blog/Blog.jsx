import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { blogData } from "./blogData";
import { ShareIcon } from "../../utils/icons";
import Buttons from "../../UIComponents/Buttons";

function Blog() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="app-container relative pb-[4rem]">
      <motion.h3
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className={`text-[4.8rem] text-[#2E2E2E] leading-[5.9rem] mb-[6.7rem]`}
      >
        Blog
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className=""
      >
        <picture className="relative">
          <img
            src="/assets/blog-banner.png"
            alt=""
            className="relative z-40 opacity-[52%]"
          />
          <div className="absolute inset-0 bg-[#363636]  z-30"></div>
          <p className="absolute top-0 bottom-0 right-0 left-0 z-50 text-white flex justify-center items-center font-semibold md:text-[4.8rem] text-[3rem]">
            Welcome To My Blog
          </p>
        </picture>
      </motion.div>
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="mt-[2rem]"
      >
        {blogData.map((article) => {
          return (
            <motion.div
              key={article.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="md:flex justify-between gap-[2.4rem]"
            >
              <picture>
                <img src={article.imageSrc} alt="" />
              </picture>
              <div className="flex flex-col py-7 justify-between">
                <div className="mb-[2rem] md:mb-0">
                  <h3 className="text-black text-[2rem] font-bold">
                    {article.title}
                  </h3>
                  <p className="text-[1.4rem]">{article.introduction}</p>
                </div>
                <div className="flex justify-between">
                  <ShareIcon />
                  <button className="bg-white text-black shadow-md px-[3rem] py-[1rem] text-[1.4rem] font-semibold rounded-lg cursor-pointer">
                    Read More
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="w-full mt-[4rem] flex justify-center"
      >
        <Buttons text="Load More" />
      </motion.div>
    </div>
  );
}

export default Blog;
