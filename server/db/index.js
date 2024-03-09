const mongoose=require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/Watchstore").then(()=>{
    console.log("Sucessfully connected  to database");
}).catch((err)=>{
    console.log(`Error in connecting ${err}`)
})