import Link from "next/link";


export default function Home(){


return (

<main className="min-h-screen">


<section className="flex flex-col items-center justify-center text-center p-10">


<h1 className="text-5xl font-bold mt-10">

✈️ Trao AI Travel Planner

</h1>



<p className="text-lg mt-5 max-w-xl">

Plan your perfect trips with AI.
Generate personalized itineraries,
discover places and manage your travel easily.

</p>



<div className="flex gap-5 mt-8">


<Link

href="/login"

className="bg-black text-white px-6 py-3 rounded-lg"

>

Login

</Link>



<Link

href="/register"

className="border px-6 py-3 rounded-lg"

>

Register

</Link>


</div>



</section>



<section className="grid md:grid-cols-3 gap-6 p-10">


<div className="border rounded-xl p-5">

<h2 className="text-xl font-bold">

🤖 AI Planning

</h2>

<p className="mt-2">

Generate smart travel plans using AI.

</p>

</div>



<div className="border rounded-xl p-5">

<h2 className="text-xl font-bold">

🗺️ Custom Trips

</h2>

<p className="mt-2">

Create trips based on days and budget.

</p>

</div>



<div className="border rounded-xl p-5">

<h2 className="text-xl font-bold">

🎒 Packing List

</h2>

<p className="mt-2">

Organize your travel essentials.

</p>

</div>



</section>


</main>

);


}