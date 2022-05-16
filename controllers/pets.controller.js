const Pet = require("../models/Pet.model");

module.exports.petsController = {
  addPet: async (req, res) => {
    const { name, age, gender, description, type, price } = req.body;

    try {
      const pet = await Pet.create({
        name,
        age,
        gender,
        image: req.file.path,
        description,
        type,
        price,
      });
      return res.json(pet);
    } catch (err) {
      return res.json({ error: err.message });
    }
  },

  getPets: async (req, res) => {
    try {
      const pets = Pet.find();
      return res.json(pets);
    } catch (err) {
      return res.json({ error: err.message });
    }
  },
};
