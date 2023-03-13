import "./App.css";
import Home from "./components/home/Home";
import useMediaQuery from "./hooks/useMediaQuery";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageLayout from "./layouts/PageLayout";

function App() {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  console.log(isDesktop);
  return (
    <Router>
      <Routes>
        <Route element={<PageLayout />}>
          <Route exact path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
