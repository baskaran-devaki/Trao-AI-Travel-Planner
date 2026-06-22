"use client";


import {useState} from "react";
import api from "@/utils/api";
import {useRouter} from "next/navigation";


export default function Login(){


const router = useRouter();


const [email,setEmail]=useState("");
const [password,setPassword]=useState("");



const handleLogin = async()=>{


try{


const res = await api.post(
"/auth/login",
{
email,
password
}
);



localStorage.setItem(
"token",
res.data.token
);



alert("Login Success");


router.push("/dashboard");


}
catch(error:any){


alert(
error.response?.data?.message ||
"Login failed"
);


}


};



return (

<div className="min-h-screen flex items-center justify-center">


<div className="w-96 p-6 shadow-lg rounded">


<h1 className="text-2xl font-bold mb-5">
Login
</h1>



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

onClick={handleLogin}

>

Login

</button>



</div>


</div>

);


}