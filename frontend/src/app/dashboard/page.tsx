"use client";


import {useEffect,useState} from "react";

import api from "@/utils/api";

import CreateTripForm from "@/components/CreateTripForm";

import ItineraryCard from "@/components/ItineraryCard";

import {useRouter} from "next/navigation";



export default function Dashboard(){


const router = useRouter();




const [latestTrip,setLatestTrip] = useState<any>(null);



const logout=()=>{


localStorage.removeItem("token");


router.push("/");


};



return (


<div className="max-w-5xl mx-auto p-6">



<div className="flex justify-between items-center mb-8">


<h1 className="text-3xl font-bold">

✈️ Trao AI Travel Planner

</h1>



<button

onClick={logout}

className="bg-red-500 text-white px-4 py-2 rounded"

>

Logout

</button>


</div>





{/* CREATE */}

<CreateTripForm

setLatestTrip={setLatestTrip}

/>





{/* AI RESULT */}


{

latestTrip &&


<div className="mt-10">


<h2 className="text-2xl font-bold mb-4">

🤖 AI Generated Trip

</h2>


<ItineraryCard

trip={latestTrip}

/>


</div>

}

</div>


);


}