import React, { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./index.css";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container">
      <div className={`card ${isLogin ? "show-login" : "show-signup"}`}>
        <Login setIsLogin={setIsLogin} />
        <Signup setIsLogin={setIsLogin} />
      </div>
    </div>
  );
};

export default App;