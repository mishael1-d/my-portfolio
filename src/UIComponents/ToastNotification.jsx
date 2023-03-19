import React, { useState, forwardRef, useImperativeHandle } from "react";
import { motion } from "framer-motion";

export const ToastNotification = forwardRef((props, ref) => {
  const [show, setShow] = useState(false);
  const [type, setType] = useState("failure");
  useImperativeHandle(ref, () => ({
    show() {
      setShow(true);
    },
    expireShow() {
      setTimeout(() => {
        setShow(false);
      }, 3000);
    },
    displaySuccess() {
      setType("success");
    },
    displayFail() {
      setType("failure");
    },
  }));
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "-100vw" }}
      transition={{ duration: 1.5, type: "spring" }}
      className={`${
        show ? "flex" : "hidden"
      } md:w-[25rem] bg-[#4a4a4a] dark:bg-[#363636] text-[#f5f5f5] h-[5rem] p-3 fixed right-0 top-0 md:right-4 md:top-[4rem] lg:top-[6rem] w-[100%] z-50 items-center border-b-[5px] ${
        type === "success" ? "border-b-green-500" : "border-b-red-500"
      } rounded-md`}
    >
      <p className="text-[1.4rem]">
        {type === "success" ? "Message Sent Successfully" : "Message Not Sent"}
      </p>
    </motion.div>
  );
});

// export default ToastNotification;
