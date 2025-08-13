import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dsContainer h-screen w-screen bg-gray-50 px-10 py-4 relative">
      <h1>Welcome Anit😊</h1>
      <div className="topBox flex gap-6">
        <div className="h-[100px] w-[23%] bg-red-400 mt-2 rounded-2xl flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold">999</h2>
        </div>
        <div className="h-[100px] w-[23%] bg-purple-400 mt-2 rounded-2xl flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold">223</h2>
        </div>
        <div className="h-[100px] w-[23%] bg-green-400 mt-2 rounded-2xl flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold">20</h2>
        </div>
        <div className="h-[100px] w-[23%] bg-orange-400 mt-2 rounded-2xl flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold">32</h2>
        </div>
      </div>

      <div className="midBox w-[98%] h-[200px] bg-blue-400 rounded-2xl mt-8 flex items-center justify-center text-5xl text-gray-100 font-bold">
        <h1>Welcome To Admin Dashboard, Anit😍</h1>
      </div>

      <div className="boxBottom mt-4 flex gap-8">
        <div className="h-[200px] w-[270px] bg-violet-300 rounded-2xl p-8 text-gray-800">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            omnis?
          </p>
        </div>
        <div className="h-[200px] w-[270px] bg-pink-200 rounded-2xl p-8 text-gray-800">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            omnis?
          </p>
        </div>
        <div className="h-[200px] w-[270px] bg-yellow-300 rounded-2xl p-8 text-gray-800">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            omnis?
          </p>
        </div>
        <div className="h-[200px] w-[270px] bg-blue-300 rounded-2xl p-8 text-gray-800">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            omnis?
          </p>
        </div>
      </div>

      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-green-200 p-2 rounded-full flex items-center justify-center absolute top-0 right-20 cursor-pointer hover:bg-green-300"
      >
        👈
      </button>
    </div>
  );
};

export default Dashboard;
