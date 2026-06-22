const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");


const {
    createTrip,
    getTrips
} = require("../controllers/tripController");



// Create new trip
router.post(
    "/create",
    authMiddleware,
    createTrip
);


// Get logged user trips
router.get(
    "/",
    authMiddleware,
    getTrips
);

router.put("/update-itinerary/:id", authMiddleware, async(req,res)=>{

try{

const {itinerary}=req.body;


const trip = await Trip.findByIdAndUpdate(

req.params.id,

{
itinerary
},

{
new:true
}

);


res.json(trip);


}
catch(error){

res.status(500).json({
message:error.message
});

}


});

module.exports = router;