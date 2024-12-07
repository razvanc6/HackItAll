import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>CNP</label>
          <input
            type="text"
            name="cnp"
            value={formData.cnp}
            onChange={handleChange}
            placeholder="Enter CNP"
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="navigation-buttons">
        <button onClick={() => navigate("/register")}>Register</button>
        <button onClick={() => navigate("/forgot-password")}>
          Forgot Password
        </button>
      </div>
    </div>
  );
  z``;
};

export default Login;
