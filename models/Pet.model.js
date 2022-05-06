const mongoose = require('mongoose');

const petSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},

	age: {
		type: Number,
		required: true
	},

	gender: String, // пол

	image: String,

	description: String, // описание

	type: String, // тут можно было бы оставить реф на определенный тип животных, чтобы у нас была на фронте возможность сортировки животных по типу(виду). для этого надо будет создать отдельную модель

	price: Number
});

const Pet = mongoose.model('Animal', animalSchema);

module.exports = Pet;