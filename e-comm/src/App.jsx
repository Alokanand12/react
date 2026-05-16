import React from "react";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="px-10 py-5">
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
