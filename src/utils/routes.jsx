import About from "../components/about/About";
import Blog from "../components/blog/Blog";
import Contact from "../components/Contact/Contact";
import Home from "../components/home/Home";
import Portfolio from "../components/portfolio/Portfolio";
export const routes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/about",
    component: <About />,
  },
  {
    path: "/portfolio",
    component: <Portfolio />,
  },
  {
    path: "/blog",
    component: <Blog />,
  },
  {
    path: "/contact",
    component: <Contact />,
  },
];
