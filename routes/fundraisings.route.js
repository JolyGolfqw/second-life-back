const { Router } = require("express");
const { fundraisingController } = require("../controllers/fundraisings.controller");

const router = Router();

router.post("/fundraising", fundraisingController.addFundraising);
router.get("/fundraising", fundraisingController.getFundraisings);
router.patch("/fundraising/:id", fundraisingController.editFundraisingById);
router.delete("/fundraising/:id", fundraisingController.deleteFundraisingById);

module.exports = router;