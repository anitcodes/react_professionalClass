import React from "react";

const Home = () => {
  return (
    <div className="homeContainer h-screen w-full bg-gray-50 flex px-8 py-10 relative">
      <div className="home-content h-full w-1/2">
        <h3 className="uppercase text-sm text-green-800">Try it now!</h3>
        <h1 className="heading text-7xl font-semibold leading-18">
          Change the way <br />
          You use your <br />
          <span className="italic font-serif font-medium">money</span>
        </h1>

        <div className="pt-10 max-w-[70%]">
          <p>
            From your everyday spending, to planning for your future with
            savings and investments, Ascone helps you get more from your money
          </p>
          <div className="flex pb-4 gap-4">
            <button className="px-4 py-2 bg-green-950 text-white rounded-full mt-4 cursor-pointer hover:bg-green-900">
              Get Started Now
            </button>
            <div className="flex flex-col items-center justify-center">
              <h3>⭐⭐⭐⭐⭐3.0</h3>
              <h3>from 1+ reviews</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="home-img h-[75%] w-1/2">
        <div className="homeTop h-1/2 w-full flex">
          <div className="h-full w-1/2 bg-[url('https://images.unsplash.com/photo-1652151368404-d9b0e7713bdb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"></div>
          <div className="h-full w-1/2 rounded-bl-full bg-[url('https://images.unsplash.com/photo-1561414927-6d86591d0c4f?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"></div>
        </div>

        <div className="homeBottom h-1/2 w-full flex">
          <div className="h-full w-1/2 rounded-tr-full bg-[url('https://plus.unsplash.com/premium_photo-1754432777426-46d9027859cf?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"></div>
          <div className="h-full w-1/2 bg-[url('https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?q=80&w=1255&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
