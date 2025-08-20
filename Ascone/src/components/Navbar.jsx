import React from "react";

const Navbar = () => {
  return (
    <div className="navbar px-8 py-2 flex items-center justify-between">
      <div className="nav-logo text-2xl font-semibold">Ascone</div>
      <div className="nav-items flex gap-8 pr-[40%]">
        <a href="#" className="hover:text-gray-500">Features</a>
        <a href="#" className="hover:text-gray-500">Accounts</a>
        <a href="#" className="hover:text-gray-500">Company</a>
        <a href="#" className="hover:text-gray-500">Insights</a>
      </div>
      <div className="nav-button flex gap-8">
        <button className=" hover:text-gray-500 cursor-pointer">Login</button>
        <button className="px-4 py-2 bg-green-800 text-white rounded-full cursor-pointer hover:bg-green-900">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
