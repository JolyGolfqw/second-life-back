const PetKeeping = require("../models/PetKeeping.model");

module.exports.petsKeepingController = {
  addPet: async (req, res) => {
    const {
      name,
      age,
      gender,
      description,
      type,
      price,
      period,
      contact,
      address,
      author,
    } = req.body;

    try {
      const pet = await PetKeeping.create({
        name,
        age,
        gender,
        image: req.file.path,
        description,
        type,
        price,
        period,
        contact,
        address,
        author,
      });
      return res.json(pet);
    } catch (err) {
      return res.json({ error: err.message });
    }
  },

  getPets: async (req, res) => {
    try {
      const pets = await PetKeeping.find();
      return res.json(pets);
    } catch (err) {
      return res.json({ error: err.message });
    }
  },
};
