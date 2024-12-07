import React from "react";
import { Link, useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Elimină token-ul de autentificare
    navigate("/login", { replace: true });
  };

  const [city, setCity] = useState("");

  const location = useLocation();

  useEffect(() => {
    // Extrage parametrii din URL
    const urlParams = new URLSearchParams(location.search);
    const cityFromUrl = urlParams.get("city");
    setCity(cityFromUrl);
  }, [location]);

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
      <div className="container mt-5">
        <h1 className="text-center">Pagina Principală</h1>
        <h2>
          Filtru activ:{" "}
          {city
            ? `Orașul selectat este: ${city}`
            : "Nu a fost selectat niciun oraș"}
        </h2>
        {/* Aici poți aplica logica pentru a filtra în funcție de orașul selectat */}
        {/* Ex: afișarea unor produse, articole, etc. care sunt relevante pentru orașul respectiv */}
      </div>
    </div>
  );
};

export default MainPage;
