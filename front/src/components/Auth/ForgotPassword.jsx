import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/loginBackground.jpg";

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
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="card shadow p-4"
        style={{
          width: "25%",
          height: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "10px",
          minHeight: "400px",
          minWidth: "400px",
        }}
      >
        <h3
          className="text-center mb-4"
          style={{
            fontFamily: "'Arial', sans-serif",
            fontSize: "40px",
            fontWeight: "bold",
          }}
        >
          Forgot Password
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="cnp" className="form-label">
              CNP
            </label>
            <input
              type="text"
              className="form-control"
              value={cnp}
              onChange={(e) => setCnp(e.target.value)}
              placeholder="Enter CNP"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Reset Password
          </button>
        </form>
        <div className="text-center mt-3">
          <button
            className="btn btn-link text-decoration-none"
            onClick={() => navigate("/login")}
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
