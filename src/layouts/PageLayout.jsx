import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import BottomNav from "../components/bottomNav/BottomNav";
import BottomDotNav from "../components/bottomDotNav/BottomDotNav";

function PageLayout() {
  const location = useLocation();
  const isDesktop = useMediaQuery("(min-width: 960px)");
  return (
    <>
      {isDesktop && (
        <>
          <Sidebar />
          <BottomDotNav pathname={location.pathname} />
          <main className="ml-[8rem] relative top-[13rem] pl-[9.5rem]">
            <Outlet />
          </main>
        </>
      )}
      {!isDesktop && (
        <>
          <main className="relative w-[90%] mx-auto my-[3rem] mb-[7rem]">
            <Outlet />
          </main>
          <BottomNav />
        </>
      )}
    </>
  );
}

export default PageLayout;
