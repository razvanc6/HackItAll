import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [cnp, setCnp] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Forgot Password submitted:", { cnp, email });
    // Adaugă logica pentru resetarea parolei
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
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
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
      <div className="navigation-buttons">
        <button onClick={() => navigate("/")}>Back to Login</button>
      </div>
    </div>
  );
};

export default ForgotPassword;
