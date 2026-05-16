import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Player from "../components/Player";

const MainLayout = () => {
  return (
    <div className="h-screen flex flex-col gap-2">
      <Navbar />
      <div className="h-[75%] p-2 grid gap-4 grid-cols-[1fr_3fr_1fr]">
        <div className="border shadow-md rounded"></div>
        <div className="border overflow-auto shadow-md rounded p-4">
          <Outlet />
        </div>
        <div className="border shadow-md rounded"></div>
      </div>
      <div className="h-[15%] ">
        <Player />
      </div>
    </div>
  );
};

export default MainLayout;
