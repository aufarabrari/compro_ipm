const router = require("express").Router();
const { inquiryController } = require("../../controller");

router.post("/addinquiry", inquiryController.addInquiry)

module.exports = router;