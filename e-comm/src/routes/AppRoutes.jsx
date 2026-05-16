import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import CartPage from "../pages/CartPage";
import ProductDetails from "../pages/ProductDetails";
import AuthPage from "../pages/AuthPage";
import ProtectedRoute from "../components/ProtectedRoute";
import PublicRoute from "../components/PublicRoute";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/auth" element={<AuthPage />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>

        <Route path="/products/details/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
