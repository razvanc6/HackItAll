import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImage from "../../assets/loginBackground.jpg";

const Login = () => {
  const [cnp, setCnp] = useState("");
  const [parola, setParola] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          cnp,
          parola,
        }
      );

      // Dacă login-ul este valid, salvăm userId în localStorage
      if (response.data.userId) {
        localStorage.setItem("userId", response.data.userId); // Salvează userId
        // Redirectăm utilizatorul la homepage sau la o altă pagină
        window.location.href = "/mainpage";
      }
    } catch (err) {
      setError(err.response ? err.response.data.message : "Eroare necunoscută");
    }
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
          height: "35%",
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
            color: "##413FA0",
          }}
        >
          Login
        </h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="cnp" className="form-label">
              CNP
            </label>
            <input
              type="text"
              className="form-control"
              id="cnp"
              name="cnp"
              value={cnp}
              onChange={(e) => setCnp(e.target.value)}
              placeholder="Enter CNP"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="parola"
              name="parola"
              value={parola}
              onChange={(e) => setParola(e.target.value)}
              placeholder="Enter Password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        <div className="text-center mt-3">
          <button
            className="btn btn-link text-decoration-none"
            onClick={() => (window.location.href = "/register")}
          >
            Register
          </button>
          <button
            className="btn btn-link text-decoration-none"
            onClick={() => (window.location.href = "/forgot-password")}
          >
            Forgot Password?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
