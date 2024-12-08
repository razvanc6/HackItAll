import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RomaniaMap from "../assets/ultima.svg"; // Update path to SVG
import mapData from "../assets/mapdata.js";

const Map = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedLocalities, setSelectedLocalities] = useState([]);
  const [svgContent, setSvgContent] = useState("");
  const navigate = useNavigate();

  // Load SVG content
  useEffect(() => {
    fetch(RomaniaMap)
      .then((response) => response.text())
      .then((data) => setSvgContent(data))
      .catch((error) => console.error("Error loading SVG:", error));
  }, []);

  const handleRegionClick = (e) => {
    const regionId = e.target.getAttribute("id");
    console.log("Clicked ID:", regionId);
    const regionData = mapData.state_specific[regionId];

    if (regionData) {
      console.log(`Clicked region: ${regionData.name}`);
      setSelectedRegion(regionData.name);
      setSelectedLocalities(regionData.localities || []);
      setIsModalOpen(true);
    } else {
      console.log("Clicked on a non-region element.");
    }
  };

  const handleCitySelect = (city) => {
    navigate(`/mainpage?city=${city}`);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav
        className="navbar navbar-dark bg-dark"
        style={{ padding: "10px 20px" }}
      >
        <a className="navbar-brand" href="/">
          Home
        </a>
        <div>
          <a className="nav-link text-light" href="/create-post">
            Create Post
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-5">
        <h1 className="text-center">Harta României</h1>
        <div
          className="text-center"
          dangerouslySetInnerHTML={{ __html: svgContent }}
          onClick={handleRegionClick}
          style={{ cursor: "pointer", marginTop: "20px" }}
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
    </div>
  );
};

export default Map;
