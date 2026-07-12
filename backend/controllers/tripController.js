const Trip = require("../models/Trip");

const generateItinerary = require("../services/aiService");




// CREATE TRIP

exports.createTrip = async(req,res)=>{


try{


const userId = req.user.id;



const {
  destination,
  days,
  budget,
  interests,
  language
} = req.body;



// AI generate

const itinerary = await generateItinerary(
  destination,
  days,
  budget,
  "",
  language
);


const trip = await Trip.create({


userId:userId,


destination,


days,


budget,


interests,


itinerary


});





res.json({

message:"Trip created successfully",

trip


});



}



catch(error){


console.log("CREATE TRIP ERROR:",error);



res.status(500).json({

message:"Trip creation failed",

error:error.message


});


}



};







// GET USER TRIPS


exports.getTrips = async(req,res)=>{


try{


const userId = req.user.id;


const trip = await Trip.create({

userId,

destination,

days,

budget,

interests,

itinerary

});



const trips = await Trip.find({

userId:userId

})

.sort({

createdAt:-1

})

.limit(5);





res.json({

trips

});



}



catch(error){


console.log(error);



res.status(500).json({

error:error.message

});


}


};
