const ratingModel=require("../model/Rating");

const rating=async(req,res)=>{
    const {name,rating,reviews}=req.body;
    const newRating=new ratingModel({
        name,
        rating,
        reviews
    })
   await newRating.save().then((data)=>{
        console.log(data);
        res.json(data);
    }).catch((err)=>{
        res.json(err);
    })
}

const displayrating=async(req,res)=>{
    ratingModel.find().then((data)=>{
        res.json(data);
    }).catch((err)=>{
        res.json(err);
    })
}



module.exports= {
    rating,
    displayrating
}
