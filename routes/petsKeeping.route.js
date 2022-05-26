const { Router } = require("express");
const {
  petsKeepingController,
} = require("../controllers/petsKeeping.controller");
const imageMiddleware = require("../middlewares/image.middleware");

const router = Router();

router.post(
  "/pets-keeping",
  imageMiddleware.single("img"),
  petsKeepingController.addPet
);
router.get("/pets-keeping", petsKeepingController.getPets);

module.exports = router;
