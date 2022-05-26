const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
  image: String,
  title: String,
  description: String,
  author: {
    ref: "Shelter",
    type: mongoose.Schema.Types.ObjectId,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const News = mongoose.model("News", newsSchema);

module.exports = News;
