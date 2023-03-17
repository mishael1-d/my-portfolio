import React, { useEffect } from "react";
import { motion } from "framer-motion";
import useMediaQuery from "../../hooks/useMediaQuery";
import Buttons from "../../UIComponents/Buttons";
import { SendIcon } from "../../utils/icons";

function Contact() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const isDesktop = useMediaQuery("(min-width: 960px)");
  return (
    <div id="contact">
      <div className="flex lg:gap-[10.4rem] flex-col lg:flex-row gap-[4rem]">
        <div>
          <motion.h3
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            className={`text-[4.8rem] text-[#2E2E2E] dark:text-[#f5f5f5] leading-[5.9rem] mb-[2rem]`}
          >
            Get In Touch
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.2 }}
            className={`text-[2rem] leading-[2.4rem text-[#2E2E2E] dark:!text-[#F5F5F5]  ${
              isDesktop ? "max-w-[50rem] text-justify" : "max-w-full text-left"
            } `}
          >
            Lorem ipsum dolor sit amet consectetur. Nibh porttitor id at velit
            risus aliquet. Malesuada cum
          </motion.p>
        </div>
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-[2.2rem] text-[2rem] dark:text-[#f5f5f5]"
          >
            Say Hello
          </motion.p>
          <form>
            <div className="flex flex-col lg:w-[40rem] w-full gap-[2rem]">
              <motion.input
                initial={{ opacity: 0, x: "100vw" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                type="text"
                placeholder="Name"
                className="bg-[#2726262B] dark:bg-white w-full outline-none border-none py-[1.3rem] pl-[1.1rem] rounded-[1rem] placeholder:text-black placeholder:text-[1.2rem] text-[1.2rem]"
              />
              <motion.input
                initial={{ opacity: 0, x: "100vw" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                type="email"
                placeholder="Email"
                className="bg-[#2726262B] dark:bg-white w-full outline-none border-none py-[1.3rem] pl-[1.1rem] rounded-[1rem] placeholder:text-black placeholder:text-[1.2rem] text-[1.2rem]"
              />
              <motion.textarea
                initial={{ opacity: 0, x: "100vw" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                cols="30"
                rows="10"
                className="bg-[#2726262B] dark:bg-white resize-none outline-none border-none py-[1.3rem] pl-[1.1rem] rounded-[1rem] placeholder:text-black placeholder:text-[1.2rem] text-[1.2rem]"
                placeholder="Message..."
              ></motion.textarea>
              <motion.div
                initial={{ opacity: 0, y: "100vh" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Buttons text="Send Message" icon={<SendIcon />} />
              </motion.div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
