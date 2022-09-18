import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";

import { useRoutes } from "hookrouter";
import Test from "./pages/Test";

// Replace DATABASE_URL with your MongoDB Database URL
// in the .env file

// Run this project
// // npm install
// // npm start

// Front-end at port 5173 (default)
// API server at port 3000

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
