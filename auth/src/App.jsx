import React, { useContext, useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { Auth } from "./context/AuthContext";

const App = () => {
  let lsd = JSON.parse(localStorage.getItem("log user"));
  let { toggle, registeredUsers, setLoggedInUser } = useContext(Auth);

  return (
    <div className="h-screen p-5">  
      {toggle ? <Register /> : <Login />}

      {lsd ? (
        <div>
          <button
            onClick={() => {
              localStorage.removeItem("log user");
              setLoggedInUser(null);
            }}
          >
            Logout
          </button>
          <div>
            {registeredUsers.map((elem) => {
              return <h1 className="text-4xl font-bold">{elem.name}</h1>;
            })}
          </div>
        </div>
      ) : (
        "Please logged in first"
      )}
    </div>
  );
};

export default App;