const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");


connectDB();


const app = express();



app.use(cors({
origin:[
"https://your-vercel-app.vercel.app"
],
credentials:true
}));


app.use(express.json());



app.get("/",(req,res)=>{

res.send("Trao AI Travel Planner Backend Running");

});



app.use(
"/api/auth",
require("./routes/authRoutes")
);



app.use(
"/api/trips",
require("./routes/tripRoutes")
);



const PORT = process.env.PORT || 5000;



app.listen(PORT,()=>{

console.log(`Server running on ${PORT}`);

});