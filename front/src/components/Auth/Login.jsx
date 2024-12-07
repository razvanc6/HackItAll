import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [cnp, setCnp] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", { cnp, password });
    // Logica autentificării
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>CNP</label>
          <input
            type="text"
            value={cnp}
            onChange={(e) => setCnp(e.target.value)}
            placeholder="Enter CNP"
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <button onClick={() => navigate("/register")}>Register</button>
      <button onClick={() => navigate("/forgot-password")}>
        Forgot Password?
      </button>
    </div>
  );
};

export default Login;
