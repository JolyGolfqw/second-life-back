const mongoose = require("mongoose");

const petKeepingSchema = mongoose.Schema({
  name: {
    type: String,
    // required: true
  },

  age: {
    type: String,
    // required: true
  },

  gender: String, // пол

  image: String,

  description: String, // описание

  type: String, // тут можно было бы оставить реф на определенный тип животных, чтобы у нас была на фронте возможность сортировки животных по типу(виду). для этого надо будет создать отдельную модель

  price: String,

  period: String,

  contact: Number,

  address: String,

  date: {
    type: Date,
    default: Date.now,
  },

  author: {
    ref: 'User',
    type: mongoose.Schema.Types.ObjectId,
  }
});

const PetKeeping = mongoose.model("PetKeeping", petKeepingSchema);

module.exports = PetKeeping;
