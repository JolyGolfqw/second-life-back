const Fundraising = require("../models/Fundraising.model");

module.exports.fundraisingsController = {
  addFundraising: async (req, res) => {
    const { title, organizer, amount, cardNumber, phoneNumber, description, author } =
      req.body;
    try {
      const fundraisings = await Fundraising.create({
        title,
        organizer,
        amount,
        image: req.file.path,
        cardNumber,
        phoneNumber,
        description,
        author
      });
      return res.json(fundraisings);
    } catch (err) {
      return res.json({ error: err.message });
    }
  },

  getFundraisings: async (req, res) => {
    try {
      const fundraising = await Fundraising.find();
      return res.json(fundraising);
    } catch (err) {
      return res.json({ error: err.message });
    }
  },

  editFundraisingById: async (req, res) => {
    const { title, organizer, amount, cardNumber, phoneNumber, description  } =
      req.body;
    try {
      const fundraisings = await Fundraising.findByIdAndUpdate(req.params.id, {
        title,
        organizer,
        amount,
        image,
        requisites,
        description,
      });
      return res.json(fundraisings);
    } catch (err) {
      return res.json({ error: err.message });
    }
  },

  deleteFundraisingById: async (req, res) => {
    try {
      const fundraising = await Fundraising.findByIdAndRemove(req.params.id);
      return res.json(fundraising);
    } catch (err) {
      return res.json({ error: err.message });
    }
  },
};
