import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-medium">
        Hello, <br />
        <span className="text-4xl font-bold">Anit👋</span>
      </h1>
      <button className="px-5 py-2 font-medium text-lg bg-red-600 rounded-sm cursor-pointer hover:bg-red-500 transition-all">Log Out</button>
    </div>
  );
};

export default Header;
