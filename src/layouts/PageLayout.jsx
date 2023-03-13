import React, { useEffect, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import BottomNav from "../components/bottomNav/BottomNav";
import BottomDotNav from "../components/bottomDotNav/BottomDotNav";

function PageLayout() {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const [pathname, setPathname] = useState(window.location.pathname);
  return (
    <>
      {isDesktop && (
        <>
          <Sidebar />
          <main className="ml-[8rem] relative top-[13rem] pl-[9.5rem]">
            <Outlet />
          </main>
          <BottomDotNav pathname={pathname} setPathname={setPathname} />
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
