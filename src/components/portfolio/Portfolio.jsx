import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { projectData } from "./project.data";
import "./portfolio.css";
import { LinkIcon } from "../../utils/icons";
function Portfolio() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="app-container pb-[4rem]">
      <motion.h3
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className={`text-[4.8rem] text-[#2E2E2E] dark:text-[#F5F5F5] leading-[5.9rem] mb-4`}
      >
        Portfolio
      </motion.h3>
      <div className="grid md:grid-cols-3 md:gap-x-[10rem] md:gap-y-[13.2rem] gap-y-[2rem]">
        {projectData.map((project) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="relative md:odd:top-[13.2rem] bg-[#f7f7f7] dark:bg-[#4A4A4A] border-[8px] h-fit  border-white box-shadow rounded-md md:w-[32rem] lg:w-[40rem] mb-[2rem]"
              key={project.id}
            >
              <div className="relative py-[1.5rem] px-[2.3rem] dark:text-[#f5f5f5]">
                <div className="flex justify-between items-start">
                  <h4 className="text-[1.8rem] font-semibold mb-2">
                    {project.title}
                  </h4>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkIcon />
                  </a>
                </div>
                <p className="text-[1.4rem]">{project.description}</p>
              </div>
              <picture className="block w-full ">
                <img
                  src={`/assets/${project.imageSrc}`}
                  alt=""
                  className="w-[50rem]"
                />
              </picture>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
