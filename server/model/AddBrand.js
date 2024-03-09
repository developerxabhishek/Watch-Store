const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  brandName: {
    type: String,
  },
  brandImage: {
    type: String,
  },
});
module.exports = new mongoose.model("Brand", brandSchema);
