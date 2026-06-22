"use client";


import {useState} from "react";


const items = [

"Passport / ID",

"Mobile Charger",

"Power Bank",

"Travel Clothes",

"Camera",

"Medicine Kit",

"Water Bottle"

];



export default function PackingList(){


const [checked,setChecked]=useState<string[]>([]);



const toggleItem=(item:string)=>{


if(checked.includes(item)){


setChecked(
checked.filter(
(i)=>i!==item
)
);


}
else{


setChecked([
...checked,
item
]);


}


};



return (

<div className="border rounded-xl p-5 mt-6">


<h2 className="text-xl font-bold mb-4">

🎒 Travel Packing List

</h2>



{

items.map((item)=>(


<div key={item} className="flex gap-3 mb-3">


<input

type="checkbox"

checked={
checked.includes(item)
}

onChange={()=>toggleItem(item)}

/>


<p className={
checked.includes(item)
?
"line-through"
:
""
}>

{item}

</p>


</div>


))

}



</div>

);


}