import { Navigate, Route, Routes } from "react-router-dom";

const PrivateRoutes = () => {

  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <Routes>
      <Route
        path="/home"
        element={
          isAuthenticated ? (
            <Navigate to="/pages/Home" />
          ) : (
            <Navigate to="/pages/login" />
          )
        }
      />
    </Routes>
  );
};

export default PrivateRoutes;

