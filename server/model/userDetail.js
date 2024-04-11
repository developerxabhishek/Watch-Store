const mongoose=require('mongoose');
const userDetails=new mongoose.Schema({
apartment:{
    type:String
},
city:{
    type:String
},
country:{
    type:String
},
email:{
    type:String
},
fname:{
    type:String
},
lname:{
    type:String
},
phone:{
    type:String
},
postcode:{
    type:String
},
profession:{
    type:String
},
state:{
    type:String
},
street:{
    type:String
}
})
module.exports=new mongoose.model("userDetail",userDetails)