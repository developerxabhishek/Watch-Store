const mongoose=require("mongoose");


mongoose.connect("mongodb+srv://abhishek:abhishek@cluster0.gikozxp.mongodb.net/Watchstore").then(()=>{
    console.log("Sucessfully connected  to database");
}).catch((err)=>{
    console.log(`Error in connecting ${err}`)
})
