const mongoose = require("mongoose");


const tripSchema = new mongoose.Schema({

userId:{
type: mongoose.Schema.Types.ObjectId,
ref:"User",
required:true
},

destination:{
type:String,
required:true
},

days:{
type:Number,
required:true
},

budget:{
type:String
},

itinerary:{
type:Object
}


},
{
timestamps:true
});


module.exports =
mongoose.model("Trip",tripSchema);