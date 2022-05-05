const { Router } = require("express");
const { usersController } = require("../controllers/users.controller");
const fileMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.get("/users", usersController.getUsers);
router.post("/login", usersController.login);
router.post("/users", usersController.registration);

module.exports = router;
