const mongoose=require('mongoose');
const RatingSchema=new mongoose.Schema({
    reviews:{
        type:String,
    },
    rating:{
        type:Number,
        default:5
    },
    name:{
        type:String
    }
})
module.exports=new mongoose.model('Rating',RatingSchema);