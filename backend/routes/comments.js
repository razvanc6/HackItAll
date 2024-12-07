const express = require("express");
const Comment = require("../models/Comment"); // Importă modelul Comment

const router = express.Router();

// Endpoint pentru a obține toate comentariile
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find(); // Găsim toate comentariile
    res.json(comments); // Trimitem comentariile ca răspuns JSON
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "A apărut o eroare la obținerea comentariilor" });
  }
});

// Endpoint pentru a adăuga un comentariu
router.post("/", async (req, res) => {
  const { userId, postId, content } = req.body; // Extragem datele din body

  if (!userId || !postId || !content) {
    return res
      .status(400)
      .json({ message: "Toate câmpurile sunt obligatorii" });
  }

  try {
    const newComment = new Comment({
      userId,
      postId,
      content,
      upvotes: 0, // Setăm upvotes la 0 când se creează comentariul
    });

    const savedComment = await newComment.save(); // Salvăm comentariul în baza de date
    res.status(201).json(savedComment); // Răspuns cu comentariul salvat
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "A apărut o eroare la adăugarea comentariului" });
  }
});

// Endpoint pentru a actualiza upvotes-ul unui comentariu
router.patch("/:id/upvote", async (req, res) => {
  const { id } = req.params;

  try {
    const comment = await Comment.findById(id); // Căutăm comentariul după ID

    if (!comment) {
      return res.status(404).json({ message: "Comentariul nu a fost găsit" });
    }

    comment.upvotes += 1; // Incrementăm numărul de upvotes
    await comment.save(); // Salvăm comentariul cu upvotes actualizați

    res.json(comment); // Răspuns cu comentariul actualizat
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "A apărut o eroare la actualizarea upvotes" });
  }
});

module.exports = router;
