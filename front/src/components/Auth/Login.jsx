import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import backgroundImage from "../../assets/loginBackground.jpg";



const Login = () => {
  const [formData, setFormData] = useState({ cnp: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          cnp: formData.cnp,
          parola: formData.password,
        }
      );

      // Stochează token-ul în localStorage
      localStorage.setItem("token", response.data.token);

      // Redirecționează la homepage
      navigate("/homepage");
    } catch (error) {
      console.error(error.response?.data || "Eroare la autentificare");
      alert("Autentificare eșuată.");
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
      <div className="card shadow p-4" 
        style={{
        width: "25%",
        height: "35%",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: "10px",
        minHeight:"400px",
        minWidth:"400px"
          }}>
        <h3 className="text-center mb-4" style={{ fontFamily: "'Arial', sans-serif", fontSize: "40px", fontWeight: "bold", color: "##413FA0" }}> Login </h3>
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
              value={formData.cnp}
              onChange={handleChange}
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
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
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
            onClick={() => navigate("/register")}
          >
            Register
          </button>
          <button
            className="btn btn-link text-decoration-none"
            onClick={() => navigate("/forgot-password")}
          >
            Forgot Password?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;