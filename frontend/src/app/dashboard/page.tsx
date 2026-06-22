"use client";


import { useEffect, useState } from "react";

import api from "@/utils/api";

import Navbar from "@/components/Navbar";
import CreateTripForm from "@/components/CreateTripForm";
import ItineraryCard from "@/components/ItineraryCard";


export default function Dashboard(){


const [trips,setTrips] = useState<any[]>([]);



const getTrips = async()=>{


try{

const res = await api.get("/trips");

setTrips(res.data.trips || []);


}
catch(error){

console.log(error);

}


};



useEffect(()=>{

getTrips();

},[]);



return (

<main className="min-h-screen">


<Navbar />


<div className="p-6">


<h1 className="text-3xl font-bold mb-6">

✈️ Trao AI Travel Planner

</h1>



<CreateTripForm />



<h2 className="text-2xl font-bold mt-8 mb-5">

My Trips

</h2>



{

trips.map((trip,index)=>(

<ItineraryCard

key={index}

trip={trip}

/>

))

}



</div>


</main>


);


}