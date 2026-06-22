"use client";

import {useState} from "react";


export default function ItineraryCard({trip}: {trip:any}){


const formatItinerary = ()=>{


if(!trip.itinerary) return {};

let data = trip.itinerary;



// string format handle

if(typeof data === "string"){


return {

"AI Generated Plan":[data]

};


}



const formatted:any={};



Object.keys(data).forEach((day)=>{


const value=data[day];



if(Array.isArray(value)){


formatted[day]=value;


}



else if(typeof value==="string"){


formatted[day]=[value];


}



else if(typeof value==="object"){


formatted[day]=Object.values(value);


}


});


return formatted;


};


const [itinerary,setItinerary]=useState(formatItinerary());

const cleanText = (text:string)=>{


return text

.replace(/\*\*/g,"")

.replace(/\*/g,"")

.replace(/\+/g,"")

.trim();


};



const removeActivity=(day:string,index:number)=>{


setItinerary({

...itinerary,

[day]:

itinerary[day].filter(
(_:any,i:number)=>i!==index
)

});


};



const addActivity=(day:string)=>{


const value = prompt(
"Enter activity"
);


if(value){


setItinerary({

...itinerary,

[day]:[

...itinerary[day],

value

]

});


}


};



return (

<div className="bg-white border rounded-2xl p-6 shadow-md mb-6">


<div className="flex justify-between">


<h2 className="text-2xl font-bold">

📍 {trip.destination}

</h2>


</div>



<p className="text-gray-500 mt-2">

💰 Budget: {trip.budget}

</p>



<p className="text-gray-500">

🗓 Days: {trip.days}

</p>




<div className="mt-5 bg-gray-50 p-5 rounded-xl">


<h3 className="font-bold text-xl">

🤖 AI Itinerary

</h3>



{

Object.keys(itinerary).map((day)=>(


<div

key={day}

className="mt-4 bg-gray-50 p-4 rounded-xl"

>


<h4 className="font-bold mb-3">

{day}

</h4>



{

Array.isArray(itinerary[day])

&&

itinerary[day].map(

(activity:string,index:number)=>(


<div

key={index}

className="flex justify-between items-center border-b py-2"

>


<span>

<div className="whitespace-pre-line leading-7 text-gray-700">

{cleanText(activity)}

</div>

</span>



</div>


)

)


}



<button

onClick={()=>addActivity(day)}

className="mt-3 bg-black text-white px-4 py-2 rounded"

>

➕ Add Activity

</button>

</div>


))


}


</div>



</div>


);


}