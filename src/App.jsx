import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";

import { useRoutes } from "hookrouter";
import Test from "./pages/Test";

const routes = {
  "/": () => <Home />,
  "/signup": () => <SignUp />,
  "/signin": () => <SignIn />,
  "/test": () => <Test />,
};

function App() {
  const routeResult = useRoutes(routes);
  return routeResult || <NotFoundPage />;
}

export default App;
