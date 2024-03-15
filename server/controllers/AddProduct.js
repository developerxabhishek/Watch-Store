//this  are the secret keys and  other important information

// this function is coming from upload.js file...

//this is a model of model of product
const ProductModel = require("../model/AddProduct");

const cloudinary = require("cloudinary").v2;

var path = require("path");
cloudinary.config({
  cloud_name: "drjkrbiu3",
  api_key: "911782471194798",
  api_secret: "gMD2_gAUvF_dLg7Mz69tKKvoKKo",
  secure: true,
});

//this is a function for uploading image to cloudnary...
// from here we will get path of image which is uplaoded in cloudnary...
const UploadData = async (req, res) => {
  const files = req.files;
  //taking an empty arry for path becuse multiple image path will be stored here...
  console.log(files[0]);
  const paths = [];

  for (const file of files) {
    const result = await cloudinary.uploader.upload(file.path);
    paths.push(result.secure_url);
  }
  // await paths.map((path) => ({ path }));
  // console.log(paths[0]);
  // console.log(req.body, 21);
  // console.log(req.files, 21);

  // this is function for saving product deatils..
  const {
    productname,
    brand,
    gender,
    price,
    discount,
    color,
    quantity,
    warranty,
    origin,
    shippingarea,
    shippingfees,
    description,
  } = req.body;
  let pro = new ProductModel({
    productname,
    brand,
    gender,
    price,
    discount,
    color,
    quantity,
    warranty,
    origin,
    shippingarea,
    shippingfees,
    description,
    images: paths,
  });
  await pro
    .save()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("Error saving product" + err);
    });
};

const displayProduct = (req, res) => {
  ProductModel.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log("error in sending data ");
    });
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  ProductModel.findByIdAndDelete(id).then((data) => {
    console.log(data);
    res.json("Data deleted successfully");
  });
};

module.exports = {
  UploadData,
  displayProduct,
  deleteProduct,
};
