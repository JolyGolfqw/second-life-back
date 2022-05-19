const News = require("../models/News.model");

module.exports.newsController = {
  addNews: async (req, res) => {
    const { title, description } = req.body;
    try {
      const news = await News.create({
        image: req.file.path,
        title,
        description,
      });

      return res.json(news);
    } catch (err) {
      return res.json(err.message);
    }
  },

  getNews: async (req, res) => {
    try {
      const news = await News.find();
      return res.json(news);
    } catch (err) {
      return res.json(err);
    }
  },
};
