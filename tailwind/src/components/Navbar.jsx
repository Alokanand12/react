import React from "react";

const Navbar = () => {
  const linkClass =
    "cursor-pointer relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <div className="flex rounded-xl justify-between bg-red-700 text-white p-6 text-2xl">
      <h1>Logo</h1>

      <div className="flex gap-12 text-xl">
        <p className={linkClass}>Home</p>
        <p className={linkClass}>About</p>
        <p className={linkClass}>Contact</p>
        <p className={linkClass}>Follow</p>
        <p className={linkClass}>Review</p>
        <p className={linkClass}>Customer Care</p>
      </div>

      <div className="ml-4  text-2xl"> 
        User</div>
    </div>
  );
};

export default Navbar;