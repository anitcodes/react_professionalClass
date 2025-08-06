import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="main">
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              required
            />
          </div>
          <div className="input-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
