import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RomaniaMap from "../assets/ultima.svg"; // Înlocuiește cu calea către SVG
import mapData from "../assets/mapdata.js";

const Map = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedLocalities, setSelectedLocalities] = useState([]);
  const [svgContent, setSvgContent] = useState("");
  const navigate = useNavigate();

  // Funcție pentru încărcarea SVG-ului din fișier
  useEffect(() => {
    fetch(RomaniaMap)
      .then((response) => response.text())
      .then((data) => setSvgContent(data))
      .catch((error) => console.error("Eroare la încărcarea SVG-ului:", error));
  }, []);

  const handleRegionClick = (e) => {
    const regionId = e.target.getAttribute("id"); // Atributul `id` din SVG
    console.log("Ai apăsat pe ID-ul:", regionId);
    const regionData = mapData.state_specific[regionId];

    if (regionData) {
      console.log(`Ai apăsat pe județul: ${regionData.name}`);
      setSelectedRegion(regionData.name);
      setSelectedLocalities(regionData.localities || []);
      setIsModalOpen(true);
    } else {
      console.log("Ai apăsat pe un element care nu este un județ.");
    }
  };

  const handleCitySelect = (city) => {
    // Navighează la pagina principală cu orașul selectat ca parametru
    navigate(`/mainpage?city=${city}`);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Harta României</h1>
      <div
        className="text-center"
        dangerouslySetInnerHTML={{ __html: svgContent }}
        onClick={handleRegionClick}
        style={{ cursor: "pointer" }}
      ></div>

      {isModalOpen && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Județ: {selectedRegion}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsModalOpen(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Localități:</p>
                <ul>
                  {selectedLocalities.map((locality, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleCitySelect(locality)}
                        style={{
                          cursor: "pointer",
                          border: "none",
                          background: "transparent",
                          textDecoration: "underline",
                        }}
                      >
                        {locality}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;
