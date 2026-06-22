"use client";


import {useState} from "react";
import api from "@/utils/api";
import {useRouter} from "next/navigation";


export default function Register(){


const router = useRouter();


const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");



const handleRegister = async()=>{


try{


const res = await api.post(
"/auth/register",
{
name,
email,
password
}
);


alert("Register Success");


router.push("/login");


}
catch(error:any){

console.log(error);

alert(
error.response?.data ||
error.message
);

}


};



return (

<div className="min-h-screen flex items-center justify-center">


<div className="w-96 p-6 shadow-lg rounded">


<h1 className="text-2xl font-bold mb-5">
Create Account
</h1>



<input

className="border p-2 w-full mb-3"

placeholder="Name"

onChange={(e)=>setName(e.target.value)}

/>



<input

className="border p-2 w-full mb-3"

placeholder="Email"

onChange={(e)=>setEmail(e.target.value)}

/>



<input

className="border p-2 w-full mb-3"

placeholder="Password"

type="password"

onChange={(e)=>setPassword(e.target.value)}

/>



<button

className="bg-black text-white px-4 py-2 w-full"

onClick={handleRegister}

>

Register

</button>



</div>


</div>

);


}