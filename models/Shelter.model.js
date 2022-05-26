const mongoose = require("mongoose");

const shelterSchema = mongoose.Schema({
  login: {
    type: String,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  name: String,

  avatar: {
    type: String,
    // default: 'images\\user.png'
  },

  description: String,

  contacts: String,

  address: String,

  email: String,

  requisites: [
    {
      type: String,
    },
  ],
});

const Shelter = mongoose.model("Shelter", shelterSchema);

module.exports = Shelter;
