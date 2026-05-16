import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (email, password) => {
    // Basic local storage simulation logic
    const userData = { email, password };
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    alert("you  are login");
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    alert("you are logout ");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
