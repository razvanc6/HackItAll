const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  votes: {
    type: Number,
    min: 0,
    default: 0,
  },
  approved: {
    type: Boolean,
    default: false,
  },
  answered: {
    type: Number,
    enum: [0, 1, 2, 3],
    default: 0,
  },
  description: {
    type: String,
    minlength: 10,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
