"use client";


import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/utils/api";


export default function LoginPage(){


const router = useRouter();


const [email,setEmail] = useState("");

const [password,setPassword] = useState("");

const [loading,setLoading] = useState(false);



const handleLogin = async()=>{


try{


setLoading(true);



const response = await api.post("/auth/login",{


email,

password


});



localStorage.setItem(

"token",

response.data.token

);



alert("Login Success ✅");



router.push("/dashboard");



}

catch(error:any){


console.log(error.response?.data);



alert(

error.response?.data?.message || "Login Failed"

);


}

finally{


setLoading(false);


}


}





return(


<div className="min-h-screen flex items-center justify-center bg-gray-100">


<div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">


<h1 className="text-3xl font-bold text-center mb-6">

Login

</h1>



<input


type="email"

placeholder="Email"

className="w-full border p-3 rounded mb-4"


value={email}


onChange={(e)=>setEmail(e.target.value)}


/>



<input


type="password"

placeholder="Password"


className="w-full border p-3 rounded mb-6"


value={password}


onChange={(e)=>setPassword(e.target.value)}


/>




<button


onClick={handleLogin}


disabled={loading}


className="w-full bg-black text-white p-3 rounded"


>


{loading ? "Logging..." : "Login"}


</button>



<p className="text-center mt-5">


Don't have account?


<button


className="text-blue-600 ml-2"


onClick={()=>router.push("/register")}


>

Register

</button>


</p>



</div>


</div>


);


}