import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import backgroundImage from "../../assets/loginBackground.jpg";

const Register = () => {
  const [formData, setFormData] = useState({
    cnp: "",
    firstName: "",
    lastName: "",
    email: "",
    localitate: "",
    judet: "",
    strada: "",
    password: "",
    phoneNumber: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const userData = {
      cnp: formData.cnp,
      nume: formData.firstName,
      prenume: formData.lastName,
      email: formData.email,
      adresa: {
        localitate: formData.localitate,
        judet: formData.judet,
        strada: formData.strada,
      },
      parola: formData.password,
      telefon: formData.phoneNumber,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        userData
      );
      console.log(response.data);
      alert("Înregistrare realizată cu succes!");
      navigate("/login");
    } catch (error) {
      console.error(error.response?.data || "Eroare server");
      alert("A apărut o eroare la înregistrare.");
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
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "10px",
        }}
      >
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="row">
            {/* Left Column */}
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="cnp" className="form-label">
                  CNP
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="cnp"
                  value={formData.cnp}
                  onChange={handleChange}
                  placeholder="Enter CNP"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter First Name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter Last Name"
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="localitate" className="form-label">
                  Localitate
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="localitate"
                  value={formData.localitate}
                  onChange={handleChange}
                  placeholder="Enter Localitate"
                  required
                />
              </div>
            </div>
            {/* Right Column */}
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="judet" className="form-label">
                  Judet
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="judet"
                  value={formData.judet}
                  onChange={handleChange}
                  placeholder="Enter Judet"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="strada" className="form-label">
                  Strada
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="strada"
                  value={formData.strada}
                  onChange={handleChange}
                  placeholder="Enter Strada"
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
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                name="confirmPassword"
                value={formData.confirmPassword || ""}
                onChange={handleChange}
                placeholder="Confirm Password"
                required
              />
            </div>
              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter Phone Number"
                  required
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{ marginTop: "20px" }}
          >
            Register
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

  

export default Register;
