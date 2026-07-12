"use client";

import { useState } from "react";
import api from "@/utils/api";

export default function CreateTripForm({

  setLatestTrip

}: any) {
  
  const [form, setForm] = useState({
  destination: "",
  days: "",
  budget: "",
  language: "English",
});
  const handleChange = (e: any) => {

    setForm({

      ...form,

      [e.target.name]: e.target.value

    });

  };

  const createTrip = async () => {

    try {

      const res = await api.post("/trips/create", form);
      console.log("CREATED TRIP:", res.data);

      setLatestTrip(res.data.trip || res.data);

    }

    catch (error) {

      console.log(error);

      alert("Trip creation failed");

    }

  };

  return (

    <div className="max-w-3xl mx-auto rounded-3xl bg-white shadow-2xl border border-gray-200 p-8">

      <div className="text-center mb-8">

        <div className="text-6xl mb-4">

          🧳

        </div>

        <h2 className="text-3xl font-extrabold text-gray-800">

          Plan Your Trip ✈️

        </h2>

        <p className="text-gray-500 mt-3">

          Enter your travel details and let AI create a personalized itinerary.

        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-5">

        <div>

          <label className="block mb-2 font-semibold text-gray-700">

            Destination

          </label>

          <input

            name="destination"

            placeholder="Destination"

            value={form.destination}

            onChange={handleChange}

            className="w-full rounded-xl border border-gray-300 px-4 py-4 outline-none focus:ring-4 focus:ring-blue-300 transition"

          />

        </div>

        <div>

          <label className="block mb-2 font-semibold text-gray-700">

            Number of Days

          </label>

          <input

            name="days"

            type="number"

            placeholder="Number of Days"

            value={form.days}

            onChange={handleChange}

            className="w-full rounded-xl border border-gray-300 px-4 py-4 outline-none focus:ring-4 focus:ring-blue-300 transition"

          />

        </div>

      </div>

      <div className="mt-5">

        <label className="block mb-2 font-semibold text-gray-700">

          Budget

        </label>

        <select

          name="budget"

          value={form.budget}

          onChange={handleChange}

          className="w-full rounded-xl border border-gray-300 px-4 py-4 outline-none focus:ring-4 focus:ring-blue-300 transition"

        >

          <option value="">

            Select Budget

          </option>

          <option>

            Low

          </option>

          <option>

            Medium

          </option>

          <option>

            High

          </option>

        </select>

      </div>

      <div className="mt-5">

  <label className="block mb-2 font-semibold text-gray-700">
    🌐 Language
  </label>

  <select
    name="language"
    value={form.language}
    onChange={handleChange}
    className="w-full rounded-xl border border-gray-300 px-4 py-4 outline-none focus:ring-4 focus:ring-blue-300 transition"
  >
    <option value="English">🇬🇧 English</option>
    <option value="Tamil">🇮🇳 தமிழ்</option>
    <option value="Hindi">🇮🇳 हिन्दी</option>
    <option value="Telugu">🇮🇳 తెలుగు</option>
  </select>

</div>

      <button

        onClick={createTrip}

        className="w-full mt-8 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-4 text-white text-lg font-semibold shadow-lg hover:scale-[1.02] hover:shadow-xl transition duration-300"

      >

        ✨ Create

      </button>

    </div>

  );

}
