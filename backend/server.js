const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// Import rute
const authRoutes = require("./routes/auth");
const homeRoutes = require("./routes/home");
const userRoutes = require("./routes/users"); // Importă ruta pentru utilizatori

dotenv.config();

const app = express();

// Middleware global
app.use(cors());
app.use(express.json());

// Conectare la MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectat la MongoDB"))
  .catch((err) => console.error("Eroare conectare MongoDB:", err));

// Rute
app.use("/api/auth", authRoutes); // Rute publice (fără middleware)
app.use("/api/home", homeRoutes); // Rute protejate (cu middleware)
app.use("/api/users", userRoutes); // Rute pentru utilizatori

// Pornire server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serverul rulează pe portul ${PORT}`));
