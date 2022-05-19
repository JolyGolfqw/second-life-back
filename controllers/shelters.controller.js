const Shelter = require("../models/Shelter.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.sheltersController = {
  getShelters: async (req, res) => {
    try {
      const shelters = await Shelter.find();
      return res.json(shelters);
    } catch (err) {
      return res.json({ error: err.message });
    }
  },

  registration: async (req, res) => {
		const {
			login,
			password,
			name,
			description,
			contacts,
			address,
			email,
			requisites,
		} = req.body;

    try {
      const hash = await bcrypt.hash(password, Number(process.env.ROUNDS));
      const shelter = await Shelter.create({
        login,
        password: hash,
        name,
        avatar: req.file.path,
        description,
        contacts,
        address,
        email,
        requisites,
      });
      return res.json(shelter);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  login: async (req, res) => {
    const { login, password } = req.body;
    const candidate = await Shelter.findOne({ login });

    if (!candidate) {
      return res.status(401).json({ error: "Неверный логин" });
    }

    const valid = await bcrypt.compare(password, candidate.password);

    if (!valid) {
      return res.status(401).json({ error: "Неверный пароль" });
    }

    const payload = { id: candidate._id };

    const token = await jwt.sign(payload, process.env.SECRET, {
      expiresIn: "24h",
    });
    return res.json({
      token,
      id: payload.id,
      name: candidate.name,
      avatar: candidate.avatar,
      description: candidate.description,
      contacts: candidate.contacts,
      address: candidate.address,
      email: candidate.email,
      requisites: candidate.registration,
    });
  },
};
