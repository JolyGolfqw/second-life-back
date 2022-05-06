const Pet = require('../models/Pet.model');

module.exports.petsController = {
	addPet: async (req, res) => {
		const { name, age, gender, description, type, price } = req.body;

		try {
			const pet = await Pet.create({
				name,
				age,
				gender,
				image: req.file.path, // потом настроим
				description,
				type,
				price
			});
			return res.json(pet)
		} catch (e) {
			return res.json({error: e.message})
		}
	},

	getPets: async (req, res) => {
		try {
			const pets = Pet.find();
			return res.json(pets);
		} catch (e) {
			return res.json({error: e.message})
		}
	}
}