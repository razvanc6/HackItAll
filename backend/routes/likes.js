const express = require("express");
const router = express.Router();
const Like = require("../models/like");

// Endpoint pentru a adăuga sau actualiza un like
router.post("/toggle-like", async (req, res) => {
  const { postId, commentId, liked, userId } = req.body;

  if (!userId || (!postId && !commentId) || typeof liked !== "boolean") {
    return res.status(400).json({ message: "Parametrii lipsă sau invalidi" });
  }

  try {
    const existingLike = await Like.findOne({
      userId,
      $or: [{ postId }, { commentId }],
    });

    if (existingLike) {
      existingLike.liked = liked;
      await existingLike.save();
      return res.status(200).json({
        message: "Like actualizat",
        liked,
        likeId: existingLike._id,
      });
    } else {
      const newLike = new Like({
        userId,
        postId,
        commentId,
        liked,
        createdAt: new Date(),
      });
      await newLike.save();
      return res.status(201).json({
        message: "Like adăugat",
        liked,
        likeId: newLike._id,
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Eroare la togglarea like-ului" });
  }
});

// Endpoint pentru a verifica dacă un utilizator a dat like la o postare sau comentariu
router.get("/check-like", async (req, res) => {
  const { userId, commentId } = req.query;

  console.log("Received userId:", userId);
  console.log("Received commentId:", commentId);

  if (!userId || !commentId) {
    return res.status(400).json({
      message: "Parametrii userId și commentId sunt necesari",
    });
  }

  try {
    const like = await Like.findOne({
      userId,
      commentId,
    });

    if (like) {
      return res.status(200).json({ liked: like.liked });
    } else {
      return res.status(200).json({ liked: false });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Eroare la verificarea like-ului" });
  }
});

module.exports = router;
