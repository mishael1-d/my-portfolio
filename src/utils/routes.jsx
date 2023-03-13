import About from "../components/about/About";
import Home from "../components/home/Home";
export const routes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/about",
    component: <About />,
  },
];
