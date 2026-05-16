import React, { useContext } from "react";
import { Counter } from "../context/CountContext";

const Contact = () => {
  console.log("contact renderingg...");

  useContext(Counter);

  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
};

export default Contact;