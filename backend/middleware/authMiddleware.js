const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) return res.status(401).json({ message: "Acces interzis." });

  try {
    const verified = jwt.verify(token, "SECRET_KEY"); // Folosește cheia secretă
    req.user = verified; // Adaugă utilizatorul verificat în request
    next(); // Trece la următorul middleware sau handler de rută
  } catch (error) {
    res.status(400).json({ message: "Token invalid." });
  }
};

module.exports = authMiddleware;
