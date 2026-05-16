import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { Auth } from "../context/AuthContext";

const ProtectedRoute = () => {
  let { loggedInUSer } = useContext(Auth);

  if (!loggedInUSer) {
    return <Navigate to={"/auth"} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
