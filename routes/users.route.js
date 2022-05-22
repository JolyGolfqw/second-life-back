const { Router } = require("express");
const { usersController } = require("../controllers/users.controller");
const fileMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.get("/users", usersController.getUsers);
router.post("/user/login", usersController.login);
router.post("/users", usersController.registration);
router.patch("/user/:id/rating", usersController.rating);


module.exports = router;
