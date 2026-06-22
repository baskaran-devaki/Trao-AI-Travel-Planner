type Trip = {

destination:string;

days:number;

budget:string;

itinerary:any;

};



export default function ItineraryCard(

{
trip
}:{
trip:Trip

}

){



const itineraryText =

typeof trip.itinerary === "object"

?

JSON.stringify(
trip.itinerary,
null,
2
)

:

trip.itinerary;



return (

<div className="border rounded-xl p-5 shadow-md mb-5 bg-white">


<h2 className="text-xl font-bold">

📍 {trip.destination}

</h2>



<p>
🗓 Days: {trip.days}
</p>


<p>
💰 Budget: {trip.budget}
</p>



<div className="mt-5">


<h3 className="font-bold">

🤖 AI Generated Plan

</h3>



<p className="whitespace-pre-line mt-2">

{itineraryText}

</p>



</div>



</div>

);


}