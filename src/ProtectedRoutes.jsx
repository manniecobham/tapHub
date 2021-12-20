import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Context from "./context/context";

const useAuth = () => {
  const context = useContext(Context);
  const isAuthenticated = context.isAuthenticated;
  return isAuthenticated;
};

const ProtectedRoutes = () => {
  const isAuthenticated = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
