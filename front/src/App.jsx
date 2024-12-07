import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ForgotPassword from "./components/Auth/ForgotPassword";
import "./App.css";

const App = () => {
  return (
    <Router>
      <AuthRedirect />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </Router>
  );
};

// Componentă pentru redirecționare bazată pe autentificare
const AuthRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/homepage");
    }
  }, [navigate]);

  return null;
};

// Componenta Homepage (Exemplu simplu)
const Homepage = () => {
  return (
    <div>
      <h1>Bun venit pe Homepage!</h1>
    </div>
  );
};

export default App;
