const Groq = require("groq-sdk");


const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});


const generateItinerary = async (
  destination,
  days,
  budget,
  interests,
  language = "English"
) => {

const completion = await groq.chat.completions.create({

model:"llama-3.1-8b-instant",

messages:[
{
role:"user",
content: `
You are a professional AI Travel Planner.

Create a detailed ${days}-day travel itinerary.

Destination: ${destination}

Budget: ${budget}

Interests: ${interests}

IMPORTANT:
Generate the entire response ONLY in ${language} language.

Include the following sections:

1. Day-wise itinerary
   - Morning
   - Afternoon
   - Evening

2. Places to visit

3. Food recommendations

4. Activities

5. Travel Tips

6. Budget Breakdown

Format the response like this:

**Day 1**
- Morning:
- Afternoon:
- Evening:

**Day 2**
...

**Budget Breakdown**
- Accommodation
- Food
- Activities
- Transportation
- Total Budget

Use simple, natural, and fluent ${language} language.

Return only the itinerary without any introduction or explanation.
`
}
],


});


return completion.choices[0].message.content;

};


module.exports = generateItinerary;
