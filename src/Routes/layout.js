import { Outlet, Navigate } from "react-router-dom";

export const PrivateRoutes = () => {
  const auth = sessionStorage.getItem("userAuthToken");
  return auth ? <Outlet /> : <Navigate to="/" />;
};

export const PublicRoutes = () => {
  const auth = sessionStorage.getItem("userAuthToken");
  
  return auth ? <Navigate to="/dashboard" /> : <Outlet />;
};
