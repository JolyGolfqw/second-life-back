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

    requisites: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },
});

const Fundraising = mongoose.model("Category", fundraisingSchema);

module.exports = Fundraising;