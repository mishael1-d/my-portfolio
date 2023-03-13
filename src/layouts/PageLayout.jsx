import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import BottomNav from "../components/bottomNav/BottomNav";

function PageLayout() {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  return (
    <>
      {isDesktop && (
        <>
          <Sidebar />
          <main className="ml-[8rem] relative top-[13rem] pl-[9.5rem]">
            <Outlet />
          </main>
        </>
      )}
      {!isDesktop && (
        <>
          <main className="relative w-[90%] mx-auto my-[3rem]">
            <Outlet />
          </main>
          <BottomNav />
        </>
      )}
    </>
  );
}

export default PageLayout;
