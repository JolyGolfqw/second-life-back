const { Router } = require("express");
const { fundraisingsController } = require("../controllers/fundraisings.controller");

const router = Router();

router.post("/fundraising", fundraisingsController.addFundraising);
router.get("/fundraising", fundraisingsController.getFundraisings);
router.patch("/fundraising/:id", fundraisingsController.editFundraisingById);
router.delete("/fundraising/:id", fundraisingsController.deleteFundraisingById);

module.exports = router;
