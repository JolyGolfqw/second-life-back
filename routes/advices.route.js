const { Router } = require("express");
const { advicesController } = require("../controllers/advices.controller");

const router = Router();

router.get("/advices", advicesController.getAdvices);
router.post("/advices", advicesController.addAdvice)

module.exports = router;