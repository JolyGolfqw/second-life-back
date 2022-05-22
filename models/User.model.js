const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  login: {
    type: String,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

	role: {
		type: String,
		default: "user",
	},

  name: { type: String, required: true },

  avatar: {
    type: String,
    //   default: "images\\user.png",
  },

  contact: {
    type: Number,
    // required: true,
  },

  address: {
    type: String,
    // required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
