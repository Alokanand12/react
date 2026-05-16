import React from "react";
import { Route, Routes } from "react-router";
import LoginPage from "../pages/LoginPage";
import AuthLayout from "../layout/AuthLayout";
import RegisterPage from "../pages/RegisterPage";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import SongsPage from "../pages/SongsPage";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        <Route path="/home" element={<MainLayout />}>
          <Route path="" element={<HomePage />} />
          <Route path="/home/songs" element={<SongsPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
