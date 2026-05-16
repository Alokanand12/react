import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div style={{ display: "flex", gap: "40px" }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
};

export default Navbar;
