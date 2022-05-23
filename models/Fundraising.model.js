const mongoose = require("mongoose");

const fundraisingSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    organizer: {
        type: String,
        required: true,
    },

    amount: {
        type: String,
        required: true,
    },

    image: {
        type: String,
        required: true,
    },

    cardNumber: {
        type: String
    },

    phoneNumber: {
        type: Number
    },

    description: {
        type: String,
        required: true,
    },

    author: {
        ref: 'Shelter',
        type: mongoose.Schema.Types.ObjectId,
      },
});

const Fundraising = mongoose.model("Fundraising", fundraisingSchema);

module.exports = Fundraising;