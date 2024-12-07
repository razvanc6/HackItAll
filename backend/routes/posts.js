const express = require("express");
const Post = require("../models/Post");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find(); // Căutăm toate postările din colecția "posts"
    res.status(200).json(posts); // Trimitem postările ca răspuns JSON
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "A apărut o eroare la obținerea postărilor" });
  }
});

module.exports = router;
