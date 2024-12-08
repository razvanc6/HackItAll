const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      description: "ID-ul utilizatorului care a dat like",
    },
    postId: {
      type: String,
      required: false, // Opțional pentru comentarii
      description: "ID-ul postării la care s-a dat like",
    },
    commentId: {
      type: String,
      required: false, // Opțional pentru postări
      description: "ID-ul comentariului la care s-a dat like",
    },
    liked: {
      type: Boolean,
      required: true,
      description: "Indică dacă s-a dat like (true) sau nu (false)",
    },
    createdAt: {
      type: Date,
      default: Date.now,
      description: "Data și ora la care a fost dat like-ul",
    },
  },
  { timestamps: true }
);

// Crearea modelului Like pe baza schemei definite
module.exports = mongoose.model("Like", likeSchema);
