const { Router } = require("express");
const {
  fundraisingsController,
} = require("../controllers/fundraisings.controller");
const imageMiddleware = require("../middlewares/image.middleware");

const router = Router();

router.post(
  "/fundraising",
  imageMiddleware.single("img"),
  fundraisingsController.addFundraising
);
router.get("/fundraising", fundraisingsController.getFundraisings);
router.patch("/fundraising/:id", fundraisingsController.editFundraisingById);
router.delete("/fundraising/:id", fundraisingsController.deleteFundraisingById);

module.exports = router;
