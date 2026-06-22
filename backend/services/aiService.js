const Groq = require("groq-sdk");


const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});


const generateItinerary = async(destination, days, budget)=>{


const completion = await groq.chat.completions.create({

model:"llama-3.1-8b-instant",

messages:[
{
role:"user",
content:`
You are an AI travel planner.

Create a travel itinerary.

Destination: ${destination}

Days: ${days}

Budget: ${budget}

Give day wise places,
food suggestions,
activities and travel tips.
`
}
],


});


return completion.choices[0].message.content;


};


module.exports = generateItinerary;