import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

const AuthPage = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {toggle ? (
        <Register setToggle={setToggle} />
      ) : (
        <Login setToggle={setToggle} />
      )}
    </>
  );
};

export default AuthPage;
