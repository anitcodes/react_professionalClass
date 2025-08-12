import React, { useState } from "react";

const LoginForm = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const formsubmitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted Successfully");
    console.log("Email is ", email);
    console.log("Password is ", password);
    setemail("");
    setpassword("");
  };

  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center">
      <div className="border-2 border-white p-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg w-[350px]">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Login
        </h1>
        <form onSubmit={formsubmitHandler} className="flex flex-col gap-4">
          <input
            className="border border-gray-300 px-4 py-2 rounded-full bg-transparent text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />

          <input
            className="border border-gray-300 px-4 py-2 rounded-full bg-transparent text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-2 rounded-full transition duration-300 shadow-md cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
