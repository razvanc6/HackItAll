import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ForgotPassword from "./components/Auth/ForgotPassword";

import FrontPage from "./components/FrontPage/FrontPage";
import Map from "./components/Map";
const isAuthenticated = () => {
  return !!localStorage.getItem("token"); // Verifică dacă există un token în localStorage
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthRedirect />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/mainpage" element={<FrontPage />} />
        <Route path="/map" element={<Map />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

// Componentă pentru redirecționare bazată pe autentificare
const AuthRedirect = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      navigate("/mainpage", { replace: true });
    } else {
      navigate("/login", { replace: true });
    }
  }, [navigate, token]);

  return null; // Nu afișăm nimic pentru AuthRedirect
};

export default App;
