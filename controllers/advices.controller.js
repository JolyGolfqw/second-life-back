const Advice = require("../models/Advice.model");

module.exports.advicesController = {
  getAdvices: async (req, res) => {
    try {
      const advices = await Advice.find();
      res.json(advices);
    } catch (err) {
      res.json({ error: err.message });
    }
  },

  addAdvice: async (req, res) => {
    try {
      const advice = await Advice.create({
        image: req.body.image,
        name: req.body.name,
        description: req.body.description,
      });
      return res.json(advice);
    } catch (err) {
      return { error: err.message };
    }
  },
};
