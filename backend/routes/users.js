const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Obține toți utilizatorii
router.get("/", async (req, res) => {
  try {
    const users = await User.find(); // Găsește toți utilizatorii din baza de date
    res.status(200).json(users); // Trimite utilizatorii ca răspuns JSON
  } catch (error) {
    res
      .status(500)
      .json({ message: "Eroare la obținerea utilizatorilor.", error });
  }
});

module.exports = router;
