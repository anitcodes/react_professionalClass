import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("Email is ", email);
    // console.log("Password is ", password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center">
      <div className="border-2 border-white p-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg w-[350px]">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Login
        </h1>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col gap-4"
        >
          <input
            className="border border-gray-300 px-4 py-2 rounded-full bg-transparent text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="email"
            value={email}
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <input
            className="border border-gray-300 px-4 py-2 rounded-full bg-transparent text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
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

export default Login;
