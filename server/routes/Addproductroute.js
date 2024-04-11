//here we are requiring express for creating router we need expresss.....
const express = require("express");
const router = express.Router();

//multer is for uploading files....
const multer = require("multer");

//we are requiring imagecontroller because  we will use its functions in this file for uolodiing image....
const imageController = require("../controllers/AddProduct");

//here we are creating a strorage...
const storage = multer.diskStorage({});
const upload = multer({ storage });

//here we are setting routes for uploading images and data.....
router.post("/image", upload.array("products"), imageController.UploadData);
router.get("/display", imageController.displayProduct);
router.delete("/deleteProduct/:id", imageController.deleteProduct);

module.exports = router;
