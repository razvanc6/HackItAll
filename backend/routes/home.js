const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Rută protejată
router.get("/homepage", authMiddleware, (req, res) => {
  res.status(200).json({ message: `Bun venit, utilizator ${req.user.id}` });
});

module.exports = router;
