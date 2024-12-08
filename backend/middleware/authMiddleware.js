const jwt = require("jsonwebtoken");

const generateAccessToken = (userId) => {
  // Aici setezi expirarea pentru mai mult timp
  return jwt.sign({ userId }, "your_secret_key", { expiresIn: "30d" }); // Token valid 30 zile
};

const authenticate = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "Tokenul nu a fost găsit" });
  }

  try {
    const decoded = jwt.verify(token, "your_secret_key"); // Verifică token-ul
    req.userId = decoded.userId; // Atașează userId la cererea curentă
    next(); // Continuă cu următorul middleware/rută
  } catch (error) {
    return res.status(401).json({ message: "Token invalid sau expirat" });
  }
};

module.exports = authenticate;
