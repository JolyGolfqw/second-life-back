const Pet = require("../models/Pet.model");

module.exports.petsController = {
  addPet: async (req, res) => {
    const { name, age, gender, description, type, contact, address, isShelter } = req.body;

    try {
      const pet = await Pet.create({
        name,
        age,
        gender,
        image: req.file.path,
        description,
        type,
        contact,
        address,
        isShelter
      });
      return res.json(pet);
    } catch (err) {
      return res.json({ error: err.message });
    }
  },

  getPets: async (req, res) => {
    try {
      const pets = await Pet.find();
      return res.json(pets);
    } catch (err) {
      return res.json({ error: err.message });
    }
  },

  getShelterPets: async (req, res) => {
    try {
      const pets = await Pet.find({isShelter: true});
      return res.json(pets);
    } catch (err) {
      return res.json({ error: err.message });
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
