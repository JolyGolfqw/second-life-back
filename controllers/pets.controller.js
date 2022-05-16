const Pet = require("../models/Pet.model");

module.exports.petsController = {
  addPet: async (req, res) => {
  const { img, name, age, gender, description, type } = req.body;
    try {
      const pets = await Pet.create({
        img,
        name,
        age,
        type,
    description,
    gender,
      });
      return res.json(pets);
    } catch (err) {
      return res.json({ error: err.message });
    }
  },

  getPets: async (req, res) => {
    try {
      const pets = await Pet.find();
      return res.json(pets);
    } catch (e) {
      return res.json({ error: e.message });
    }
  },
  getPetsByType: async (req, res) => {
    try {
      const pets = await Pet.find({ type: req.params.id });
      return res.json(pets);
    } catch (err) {
      return res.json({ error: err.message });
    }
  },
};