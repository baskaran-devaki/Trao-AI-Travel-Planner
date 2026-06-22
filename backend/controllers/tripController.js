const Trip = require("../models/Trip");

const generateItinerary = require("../services/aiService");


// CREATE TRIP
exports.createTrip = async(req,res)=>{


try{


const {
destination,
days,
budget
}=req.body;



// AI generate itinerary
const itinerary = await generateItinerary(
destination,
days,
budget
);



const trip = await Trip.create({

userId:req.user.id,

destination,

days,

budget,

itinerary

});



res.json({

message:"Trip created successfully",

trip

});


}


catch(error){

res.status(500).json({

error:error.message

});

}


};



// GET USER TRIPS
exports.getTrips = async(req,res)=>{

try{

const trips = await Trip.find({
userId:req.user.id
});


res.json({
trips
});


}
catch(error){

res.status(500).json({
error:error.message
});

}

};