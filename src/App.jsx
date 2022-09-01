import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";

import { useRoutes } from "hookrouter";

const routes = {
  "/": () => <Home />,
  "/signup": () => <SignUp />,
  "/signin": () => <SignIn />,
};

function App() {
  const routeResult = useRoutes(routes);
  return routeResult || <NotFoundPage />;
}

export default App;
