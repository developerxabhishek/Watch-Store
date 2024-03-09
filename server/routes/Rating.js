const express = require("express");
const router = express.Router();

const ratingController = require("../controllers/Rating");

router.post("/rating", ratingController.rating);
router.get("/ratingdisplay",ratingController.displayrating);
module.exports = router;
