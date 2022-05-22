const Comment = require("../models/Comment.model");

module.exports.commentsController = {
  addComment: async (req, res) => {
    try {
      const comment = await Comment.create({
        text: req.body.text,
        author: req.body.author,
        addressee: req.body.addressee,
      });
      return res.json(comment);
    } catch (err) {
      res.json({error: err.message});
    }
  },
  changeComment: async (req, res) => {
    try {
      await Comment.findByIdAndUpdate(req.params.id, {
        text: req.body.text,
        user: req.body.user,
        books: req.body.books,
        date: req.body.date,
        author: req.body.author,
      });
      res.json("Комментарий изменен!");
    } catch (err) {
      res.json({error: err.message});
    }
  },
  deleteComment: async (req, res) => {
    try {
      const comment = await Comment.findById(req.params.id);
			await comment.remove();
      res.json("Комментарий удален!");
    } catch (err) {
      res.json({error: err.message});
    }
  },
  getComments: async (req, res) => {
    try {
      const comments = await Comment.find()
      res.json(comments);
    } catch (err) {
      res.json({error: err.message});
    }
  },
};
