import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
(
<AuthProvider>
  <CartProvider>
    <App />
  </CartProvider>
</AuthProvider>);