import React, { useState } from "react";

const Signup = ({ setIsLogin }) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="form signup">
      <h1>Create Account</h1>
      <p>Join us today</p>

      <label>Full Name</label>
      <input type="text" placeholder="John Doe" />

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

      <button className="primary-btn">Sign up</button>

      <span>
        Already have an account?{" "}
        <button className="link-btn" onClick={() => setIsLogin(true)}>
          Sign in
        </button>
      </span>
    </div>
  );
};

export default Signup;