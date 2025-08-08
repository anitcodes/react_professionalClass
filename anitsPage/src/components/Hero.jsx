import React from "react";

const Hero = () => {
  return (
    <div className="heroContainer h-90 bg-blue-50 flex flex-col items-center py-20">
      <h1 className="text-5xl font-bold">Welcome to Anit's Page</h1>
      <p className="w-140 py-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        consectetur ipsa nobis illo iure fugit inventore dolor officiis sequi
        provident.
      </p>
      <button className="bg-blue-700 text-white px-4 py-2 cursor-pointer hover:bg-blue-500">Know More</button>
    </div>
  );
};

export default Hero;
