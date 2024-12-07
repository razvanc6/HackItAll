import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Importă stiluri globale dacă e nevoie

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
