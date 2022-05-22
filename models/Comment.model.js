const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  text: {
    type: String,
    // required: true,
  },

  author: {
    ref: "User",
    type: mongoose.Schema.Types.ObjectId,
  },

  addressee: {
    ref: "User",
    type: mongoose.Schema.Types.ObjectId,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
