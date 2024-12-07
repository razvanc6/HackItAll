import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
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
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter First Name"
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter Last Name"
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
            required
          />
        </div>
        <div className="form-group">
          <label>Localitate</label>
          <input
            type="text"
            name="localitate"
            value={formData.localitate}
            onChange={handleChange}
            placeholder="Enter Localitate"
            required
          />
        </div>
        <div className="form-group">
          <label>Județ</label>
          <input
            type="text"
            name="judet"
            value={formData.judet}
            onChange={handleChange}
            placeholder="Enter Județ"
            required
          />
        </div>
        <div className="form-group">
          <label>Stradă</label>
          <input
            type="text"
            name="strada"
            value={formData.strada}
            onChange={handleChange}
            placeholder="Enter Stradă"
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
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter Phone Number"
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <div className="navigation-buttons">
        <button onClick={() => navigate("/login")}>Back to Login</button>
      </div>
    </div>
  );
};

export default Register;
