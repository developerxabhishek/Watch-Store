const mongoose = require("mongoose");
const producSchema = new mongoose.Schema({
    productname: {
        type: String
    },
    brand:{
        type:String,
    },
    gender:{
        type:String,
    },
    price:{
        type:String,
    },
    discount:{
        type:String,
    },
    color:{
        type:String,
    },
    quantity:{
        type:String,
    },
    warranty:{
        type:String,
    },
    origin:{
        type:String,
    },
    shippingarea:{
        type:String,
    },
    shippingfees:{
        type:String,
    },
    description:{
        type:String,
    },
    images: {
        type: Array,// we are storing multiple image in form of an array...
    }
});
const product =mongoose.model('product',producSchema);
module.exports=product;

