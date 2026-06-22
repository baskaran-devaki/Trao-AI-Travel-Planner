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



module.exports = router;