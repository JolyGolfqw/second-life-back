const mongoose = require("mongoose");

const petSchema = mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },

  age: {
    type: String,
    // required: true,
  },

  gender: {
    type: String,
    // required: true,
  },

  img: {
    type: String,
    // required: true,
  },

  description: {
    type: String,
    // required: true,
  },

  type: {
    ref: "Category",
    type: mongoose.Schema.Types.ObjectId,
    // // required: true,
  },

  isShelter: {
	  type: Boolean,
	  default: false
  },


  author: {
	  ref: 'User',
	  type: mongoose.Schema.Types.ObjectId,
	},

	shelter: {
		ref: 'Shelter',
		type: mongoose.Schema.Types.ObjectId,
	  },
});

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;