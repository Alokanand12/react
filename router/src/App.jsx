import React from "react";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <AppRoutes />
    </div>
  );
};

export default App;