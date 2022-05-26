const mongoose = require("mongoose");

const adviceShema = mongoose.Shema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Advice = mongoose.model("Advice", adviceShema);
module.exports = Advice;
