"use client";


import { useRouter } from "next/navigation";


export default function Navbar(){


const router = useRouter();



const logout = () => {


localStorage.removeItem("token");


// redirect to login
router.push("/login");


};



return (

<nav className="flex justify-between items-center p-5 border-b">


<h1 className="text-xl font-bold">

✈️ Trao AI Planner

</h1>



<button

onClick={logout}

className="bg-black text-white px-4 py-2 rounded"

>

Logout

</button>


</nav>

);


}