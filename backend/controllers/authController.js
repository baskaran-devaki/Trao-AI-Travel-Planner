const User=require("../models/User");

const bcrypt=require("bcrypt");

const jwt=require("jsonwebtoken");



exports.register=async(req,res)=>{


try{


const {name,email,password}=req.body;


const existUser=await User.findOne({email});


if(existUser){

return res.status(400)
.json({
message:"User already exists"
});

}


const hashedPassword=
await bcrypt.hash(password,10);



const user=await User.create({

name,
email,
password:hashedPassword

});


res.json({

message:"Register Success",
user

});


}

catch(error){

res.status(500)
.json({
error:error.message
});

}


};




exports.login=async(req,res)=>{


const {email,password}=req.body;


const user=
await User.findOne({email});


if(!user){

return res.status(400)
.json({
message:"Invalid email"
});

}



const match=
await bcrypt.compare(
password,
user.password
);



if(!match){

return res.status(400)
.json({
message:"Wrong password"
});

}



const token=
jwt.sign(
{
id:user._id
},
process.env.JWT_SECRET
);



res.json({

message:"Login success",
token

});


};