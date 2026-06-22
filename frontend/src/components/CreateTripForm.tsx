"use client";


import {useState} from "react";
import api from "@/utils/api";


export default function CreateTripForm(){


const [destination,setDestination]=useState("");
const [days,setDays]=useState("");
const [budget,setBudget]=useState("");

const [result,setResult]=useState("");



const createTrip = async()=>{


try{


const res = await api.post(
"/trips/create",
{
destination,
days,
budget
}
);


setResult(
res.data.trip.itinerary
);


}
catch(error){


alert("Trip creation failed");


}


};



return (

<div className="p-6">


<h2 className="text-xl font-bold mb-4">
Create AI Trip Plan
</h2>


<input
className="border p-2 block mb-3 w-full"
placeholder="Destination"
onChange={(e)=>setDestination(e.target.value)}
/>


<input
className="border p-2 block mb-3 w-full"
placeholder="Days"
onChange={(e)=>setDays(e.target.value)}
/>


<input
className="border p-2 block mb-3 w-full"
placeholder="Budget"
onChange={(e)=>setBudget(e.target.value)}
/>



<button

className="bg-black text-white px-4 py-2"

onClick={createTrip}

>

Generate Plan

</button>



{result &&

<div className="mt-5 border p-4">

<h3 className="font-bold">
AI Itinerary
</h3>

<p className="whitespace-pre-line">
{result}
</p>

</div>

}


</div>

);


}