const Category = require("../models/Category.model");

module.exports.categoriesController = {
  addCategory: async (req, res) => {
    try {
      const category = await Category.create({
        category: req.body.category,
        img: req.body.img,
      });

      return res.json(category);
    } catch (err) {
      return res.json({ error: err.message });
    }
  },

  getCategories: async (req, res) => {
    try {
      const categories = await Category.find();
      return res.json(categories);
    } catch (err) {
      return res.json({ error: err.message });
    }
  },
};