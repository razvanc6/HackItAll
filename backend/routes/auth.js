const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  const { cnp, nume, prenume, email, adresa, parola, telefon } = req.body;

  try {
    // Verifică dacă utilizatorul există deja
    const existingUser = await User.findOne({ cnp });
    if (existingUser)
      return res
        .status(400)
        .json({ message: "Aveti un cont deja pe acest CNP." });

    // Hash parola
    const hashedPassword = await bcrypt.hash(parola, 10);

    // Creează utilizator
    const newUser = new User({
      cnp,
      nume,
      prenume,
      email,
      adresa,
      parola: hashedPassword,
      telefon,
    });
    await newUser.save();

    res.status(201).json({ message: "Utilizator creat cu succes!" });
  } catch (error) {
    res.status(500).json({ message: "Eroare server.", error });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { cnp, parola } = req.body;

  try {
    // Verifică dacă utilizatorul există
    const user = await User.findOne({ cnp });
    if (!user) return res.status(404).json({ message: "CNP inexistent." });

    // Verifică parola fără bcrypt (doar o comparare simplă)
    if (user.parola !== parola) {
      return res.status(401).json({ message: "Parolă incorectă." });
    }

    // Generează token JWT (opțional)
    const token = jwt.sign({ id: user._id, email: user.email }, "SECRET_KEY", {
      expiresIn: "1h",
    });

    // Trimite un obiect cu token și userId
    res.status(200).json({ token, userId: user._id });
  } catch (error) {
    res.status(500).json({ message: "Eroare server.", error });
  }
});

module.exports = router;

// Forgot Password
router.post("/forgot-password", async (req, res) => {
  const { email, cnp } = req.body;

  try {
    // Verifică dacă utilizatorul există
    const user = await User.findOne({ email, cnp });
    if (!user)
      return res.status(404).json({ message: "CNP sau email incorect." });

    // Generează un link de resetare (simulat aici)
    const resetToken = jwt.sign({ id: user._id }, "SECRET_KEY", {
      expiresIn: "15m",
    });

    // Trimi email (simulat aici)
    console.log(
      `Trimite acest link de resetare: http://localhost:5000/reset-password/${resetToken}`
    );

    res.status(200).json({ message: "Link-ul de resetare a fost trimis." });
  } catch (error) {
    res.status(500).json({ message: "Eroare server.", error });
  }
});

module.exports = router;
