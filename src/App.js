import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageLayout from "./layouts/PageLayout";
import { routes } from "./utils/routes";

function App() {
  const routeComponents = routes.map(({path, component}, key) => <Route exact path={path} element={component} key={key} />);
  return (
    <Router>
      <Routes>
        <Route element={<PageLayout />}>
        {routeComponents}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
