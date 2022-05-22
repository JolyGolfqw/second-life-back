const { Router } = require("express");
const { commentsController } = require("../controllers/comments.controller");
const router = Router();
const authMiddleware = require('../middlewares/auth.middleware')

router.post("/comments",authMiddleware, commentsController.addComment);
router.patch("/comments/:id", commentsController.changeComment);
router.delete("/comments/:id", commentsController.deleteComment);
router.get("/comments", commentsController.getComments);


module.exports = router;
