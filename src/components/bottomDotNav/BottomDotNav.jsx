import { routes } from "../../utils/routes";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function BottomDotNav({ pathname }) {
  return (
    <motion.div
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="z-50 fixed left-0 right-0 flex w-full justify-center top-[5rem] pb-[4rem]"
    >
      <div className="flex gap-[0.6rem]">
        {routes.map((data) => {
          return (
            <Link to={data.path} key={data.path}>
              <div
                className={`w-[2.6rem] h-[4px] ${
                  pathname === data.path ? "bg-[#363636]" : "bg-[#939393]"
                } bg-[#363636] cursor-pointer`}
              ></div>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}

export default BottomDotNav;
