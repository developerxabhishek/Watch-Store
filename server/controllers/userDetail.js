const userDetailModel = require("../model/userDetail");

const saveUserDetail = async(req, res) => {
  const {
    apartment,
    city,
    country,
    email,
    fname,
    lname,
    phone,
    postcode,
    profession,
    state,
    street,
  } = req.body;

const userDetail=new userDetailModel({
    apartment,
    city,
    country,
    email,
    fname,
    lname,
    phone,
    postcode,
    profession,
    state,
    street
})

try{
    await userDetail.save().then((data)=>{
        res.json("Details saved successfully", data)
    })
}catch{
    res.json("Error in saving details")
}
};
module.exports = {
  saveUserDetail,
};
