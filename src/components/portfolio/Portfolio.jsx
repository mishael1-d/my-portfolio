import React from "react";
import { motion } from "framer-motion";
import { projectData } from "./project.data";
import "./portfolio.css";
function Portfolio() {
  return (
    <div className="app-container pb-[4rem]">
      <motion.h3
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className={`text-[4.8rem] text-[#2E2E2E] leading-[5.9rem] mb-4`}
      >
        Portfolio
      </motion.h3>
      <div className="grid md:grid-cols-2 md:gap-x-[10rem] md:gap-y-[13.2rem] gap-y-[2rem]">
        {projectData.map((project) => {
          return (
            <motion.div
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative md:odd:top-[13.2rem] bg-[#f7f7f7] border-[8px] border-white box-shadow rounded-md md:w-[32rem] lg:w-[40rem] mb-[2rem]"
            >
              <div className="relative py-[1.5rem] px-[2.3rem]">
                <h4 className="text-[2rem] font-semibold mb-2">
                  {project.title}
                </h4>
                <p className="text-[1.4rem]">{project.description}</p>
              </div>
              <picture key={project.id} className="block w-full ">
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
