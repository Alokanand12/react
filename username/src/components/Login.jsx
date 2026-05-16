import React, { useState } from "react";

const Login = ({ setIsLogin }) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="form login">
      <h1>Welcome Back</h1>
      <p>Sign in to your account</p>

      <label>Email</label>
      <input type="email" placeholder="you@example.com" />

      <label>Password</label>
      <div className="password-field">
        <input
          type={showPass ? "text" : "password"}
          placeholder="•••••••"
        />
        <span onClick={() => setShowPass(!showPass)}>
          {showPass ? "🙈" : "👁"}
        </span>
      </div>

      <button className="primary-btn">Sign in</button>

      <span>
        Don't have an account?{" "}
        <button className="link-btn" onClick={() => setIsLogin(false)}>
          Sign up
        </button>
      </span>
    </div>
  );
};

export default Login;