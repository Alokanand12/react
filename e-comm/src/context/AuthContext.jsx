import { createContext, useState } from "react";

export let Auth = createContext();

export let AuthContextProvider = ({ children }) => {
  const [registerUsers, setRegisterUsers] = useState(
    JSON.parse(localStorage.getItem("reg users")) || []
  );
  const [loggedInUSer, setLoggedInUSer] = useState(
    JSON.parse(localStorage.getItem("log user"))
  );

  return (
    <Auth.Provider
      value={{
        registerUsers,
        setRegisterUsers,
        setLoggedInUSer,
        loggedInUSer,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
