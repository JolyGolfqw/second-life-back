const mongoose = require("mongoose");

const petKeepingSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  age: {
    type: String,
    required: true,
  },

  gender: String,

  image: String,

  description: String,

  type: {
    ref: "Category",
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },

  price: String,

  period: String,

  contact: Number,

  address: String,

  date: {
    type: Date,
    default: Date.now,
  },

  author: {
    ref: "User",
    type: mongoose.Schema.Types.ObjectId,
  },
});

const PetKeeping = mongoose.model("PetKeeping", petKeepingSchema);

module.exports = PetKeeping;
