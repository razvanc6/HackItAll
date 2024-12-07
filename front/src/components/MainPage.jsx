import React from "react";
import { Link, useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Elimină token-ul de autentificare
    navigate("/login", { replace: true });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Bun venit pe Main Page!</h1>
      <div className="text-center mt-4">
        <p>Accesează funcționalitățile aplicației:</p>
        <div>
          <Link to="/map" className="btn btn-primary mx-2">
            Harta României
          </Link>
          <Link to="/profile" className="btn btn-secondary mx-2">
            Profilul meu
          </Link>
        </div>
        <button onClick={handleLogout} className="btn btn-danger mt-3">
          Logout
        </button>
      </div>
    </div>
  );
};

export default MainPage;
