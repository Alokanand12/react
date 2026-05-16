import React from "react";
import { axiosInstance } from "./config/axiosInstance";
import { toast } from "react-toastify";

const App = () => {
  let fetchUsers = async () => {
    try {
      let res = await axiosInstance.get("/users");
      console.log(res);
      
    } catch (error) {
      console.log("error in api", error);
    }
  };

  fetchUsers();

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default App;
