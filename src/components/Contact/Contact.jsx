import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useMediaQuery from "../../hooks/useMediaQuery";
import Buttons from "../../UIComponents/Buttons";
import {
  GithubIcon,
  LinkedInIcon,
  SendIcon,
  TwitterIcon,
} from "../../utils/icons";
import emailjs from "emailjs-com";
import { ToastNotification } from "../../UIComponents/ToastNotification";

function Contact() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const form = useRef();
  const toastRef = useRef();
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const sendMessage = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vh8croe",
        "template_2u1j7sq",
        form.current,
        "AXPrZIVEQGj7GfHOZ"
      )
      .then(
        (result) => {
          toastRef.current.show();
          toastRef.current.expireShow();
          toastRef.current.displaySuccess();
          console.log(result.text);
        },
        (error) => {
          toastRef.current.show();
          toastRef.current.expireShow();
          toastRef.current.displayFail();
          console.log(error.text);
        }
      );
    form.current.reset();
  };
  const displayToast = () => {
    return (
      <AnimatePresence>
        <ToastNotification ref={toastRef} />
      </AnimatePresence>
    );
  };
  return (
    <div id="contact">
      {displayToast()}
      <div className="flex lg:gap-[10.4rem] flex-col lg:flex-row gap-[4rem]">
        <div className="flex flex-col justify-between">
          <div>
            <motion.h3
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
              className={`text-[4.8rem] max-w-[50rem] text-[#2E2E2E] dark:text-[#f5f5f5] leading-[5.9rem] mb-[2rem]`}
            >
              Let's bring your vision to life, together!
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1.2 }}
              className={`text-[2rem] leading-[2.4rem text-[#2E2E2E] dark:!text-[#F5F5F5]  ${
                isDesktop
                  ? "max-w-[50rem] text-justify"
                  : "max-w-full text-left mb-2"
              } `}
            >
              So let's connect and start creating! Whether you have a specific
              project in mind or just want to chat about your ideas, I'm always
              excited to hear from other creatives who are passionate about
              their work. Together, we can bring your vision to life and make
              something truly special.
            </motion.p>
          </div>
          <div>
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
          </div>
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
          <form ref={form} onSubmit={sendMessage}>
            <div className="flex flex-col lg:w-[40rem] w-full gap-[2rem]">
              <motion.input
                initial={{ opacity: 0, x: "100vw" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                type="text"
                placeholder="Name"
                className="bg-[#2726262B] dark:bg-white w-full outline-none border-none py-[1.3rem] px-[1.1rem] rounded-[1rem] placeholder:text-black placeholder:text-[1.2rem] text-[1.2rem]"
                name="name"
              />
              <motion.input
                initial={{ opacity: 0, x: "100vw" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                type="email"
                placeholder="Email"
                className="bg-[#2726262B] dark:bg-white w-full outline-none border-none py-[1.3rem] px-[1.1rem] rounded-[1rem] placeholder:text-black placeholder:text-[1.2rem] text-[1.2rem]"
                name="email"
              />
              <motion.textarea
                initial={{ opacity: 0, x: "100vw" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                cols="20"
                rows="8"
                className="bg-[#2726262B] dark:bg-white resize-none outline-none border-none py-[1.3rem] px-[1.1rem] rounded-[1rem] placeholder:text-black placeholder:text-[1.2rem] text-[1.2rem]"
                placeholder="Message..."
                name="message"
              ></motion.textarea>
              <motion.div
                initial={{ opacity: 0, y: "100vh" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Buttons
                  text="Send Message"
                  icon={<SendIcon />}
                  type="submit"
                  toastRef={toastRef}
                />
              </motion.div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
