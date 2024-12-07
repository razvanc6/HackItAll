const mongoose = require("mongoose");

// Creăm schema pentru comentarii
const commentSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  postId: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
    minlength: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  upvotes: {
    type: Number,
    default: 0,
    min: 0,
  },
});

// Creăm modelul pentru comentarii
const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
