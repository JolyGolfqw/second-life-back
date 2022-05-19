const mongoose = require("mongoose");

const petSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    required: true,
  },

  gender: {
    type: String,
    required: true,
  },

  img: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  type: {
    ref: "Category",
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

const Pet = mongoose.model("Pets", petSchema);

module.exports = Pet;