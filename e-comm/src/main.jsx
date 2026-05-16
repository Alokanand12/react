import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { ProductContextProvider } from "./context/productContext.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <ProductContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductContextProvider>
  </AuthContextProvider>
);
