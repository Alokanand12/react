import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { Auth } from "../context/AuthContext";

const PublicRoute = () => {
  let { loggedInUSer } = useContext(Auth);

  if (loggedInUSer) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PublicRoute;
