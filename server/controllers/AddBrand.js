const brandModel = require("../model/AddBrand");

const uploadBrand = async (req, res) => {
  const { brandName, brandImage } = req.body;

  const brandSave = new brandModel({
    brandName,
    brandImage,
  });
  brandSave
    .save()
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      console.log(`Error In saving Brand  ${error}`);
    });
};

const getBrand = (req, res) => {
  brandModel
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log("error in sending data ");
    });
};

const deleteBrand = (req, res) => {
  const id = req.params.id;
  console.log(id);
  brandModel
    .findByIdAndDelete(id)
    .then((data) => {
      console.log(data);
      res.json("Data deleted successfully");
    })
    .catch((err) => {
      res.send("error in deleting data " + err);
    });
};

module.exports = {
  uploadBrand,
  getBrand,
  deleteBrand,
};
