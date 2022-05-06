const Animal = require('../models/Animal.model');

module.exports.animalController = {
	addAnimal: async (req, res) => {
		const { name, age, gender, description, type, price } = req.body;

		try {
			const animal = await Animal.create({
				name,
				age,
				gender,
				image: req.file.path, // потом настроим
				description,
				type,
				price
			});
			return res.json(animal)
		} catch (e) {
			return res.json({error: e.message})
		}
	},

	getAnimals: async (req, res) => {
		try {
			const animals = Animal.find();
			return res.json(animals);
		} catch (e) {
			return res.json({error: e.message})
		}
	}
}