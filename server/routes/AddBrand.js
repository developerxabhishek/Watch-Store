//here we are requiring express for creating router we need expresss.....
const express = require("express");
const router = express.Router();

//multer is for uploading files....
const multer = require("multer");

//we are requiring imagecontroller because  we will use its functions in this file for uolodiing image....
const brandController = require("../controllers/AddBrand");

//here we are creating a strorage...

//here we are setting routes for uploading images and data.....
// router.post("/brand", upload.single("brands"), brandController.uploadBrand);

router.post("/brand", brandController.uploadBrand);
router.get("/brandDisplay", brandController.getBrand);
router.delete("/deletebrand/:id", brandController.deleteBrand);

module.exports = router;
