"use client";


import {useState} from "react";
import api from "@/utils/api";


export default function CreateTripForm({

setLatestTrip

}:any){



const [form,setForm]=useState({

destination:"",

days:"",

budget:"",

interests:""

});


const handleChange=(e:any)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};



const createTrip=async()=>{


try{


const res = await api.post("/trips/create", form);


console.log("CREATED TRIP:", res.data);



setLatestTrip(res.data.trip || res.data);


}

catch(error){

console.log(error);

alert("Trip creation failed");

}


};



return (


<div className="max-w-xl mx-auto border rounded-xl p-6 shadow-md">


<h2 className="text-2xl font-bold mb-5">

Plan Your Trip ✈️

</h2>



<input

name="destination"

placeholder="Destination"

value={form.destination}

onChange={handleChange}

className="w-full border p-3 rounded mb-4"

/>



<input

name="days"

type="number"

placeholder="Number of Days"

value={form.days}

onChange={handleChange}

className="w-full border p-3 rounded mb-4"

/>



<select

name="budget"

value={form.budget}

onChange={handleChange}

className="w-full border p-3 rounded mb-4"

>


<option value="">

Select Budget

</option>


<option>

Low

</option>


<option>

Medium

</option>


<option>

High

</option>


</select>




<input

name="interests"

placeholder="Interests (Food, Culture, Adventure, Shopping)"

value={form.interests}

onChange={handleChange}

className="w-full border p-3 rounded mb-5"

/>



<button

onClick={createTrip}

className="bg-black text-white px-6 py-3 rounded w-full"

>

Create

</button>



</div>


);


}