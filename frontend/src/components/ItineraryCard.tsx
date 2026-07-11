"use client";

import { useState } from "react";

export default function ItineraryCard({ trip }: { trip: any }) {

  const formatItinerary = () => {

    if (!trip.itinerary) return {};

    let data = trip.itinerary;

    if (typeof data === "string") {

      return {

        "AI Generated Plan": [data]

      };

    }

    const formatted: any = {};

    Object.keys(data).forEach((day) => {

      const value = data[day];

      if (Array.isArray(value)) {

        formatted[day] = value;

      }

      else if (typeof value === "string") {

        formatted[day] = [value];

      }

      else if (typeof value === "object") {

        formatted[day] = Object.values(value);

      }

    });

    return formatted;

  };

  const [itinerary, setItinerary] = useState(formatItinerary());

  const cleanText = (text: string) => {

    return text

      .replace(/\*\*/g, "")

      .replace(/\*/g, "")

      .replace(/\+/g, "")

      .trim();

  };

  const removeActivity = (day: string, index: number) => {

    setItinerary({

      ...itinerary,

      [day]:

        itinerary[day].filter(

          (_: any, i: number) => i !== index

        )

    });

  };

  const addActivity = (day: string) => {

    const value = prompt("Enter activity");

    if (value) {

      setItinerary({

        ...itinerary,

        [day]: [

          ...itinerary[day],

          value

        ]

      });

    }

  };

  return (

    <div className="rounded-3xl bg-white shadow-2xl border border-gray-200 overflow-hidden">

      {/* Header */}

      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white p-8">

        <h2 className="text-4xl font-bold">

          📍 {trip.destination}

        </h2>

        <div className="flex flex-wrap gap-6 mt-5">

          <div className="bg-white/20 px-5 py-3 rounded-xl">

            💰 Budget : <b>{trip.budget}</b>

          </div>

          <div className="bg-white/20 px-5 py-3 rounded-xl">

            🗓 Days : <b>{trip.days}</b>

          </div>

        </div>

      </div>

      {/* AI */}

      <div className="p-8">

        <h3 className="text-3xl font-bold mb-8">

          🤖 AI Itinerary

        </h3>

        <div className="space-y-8">

          {

            Object.keys(itinerary).map((day) => (

              <div

                key={day}

                className="rounded-2xl border border-gray-200 bg-slate-50 p-6 shadow-sm"

              >

                <div className="flex items-center justify-between mb-5">

                  <h4 className="text-2xl font-bold text-blue-700">

                    {day}

                  </h4>

                  <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">

                    Travel Plan

                  </span>

                </div>

                <div className="space-y-4">

                  {

                    Array.isArray(itinerary[day]) &&

                    itinerary[day].map(

                      (activity: string, index: number) => (

                        <div

                          key={index}

                          className="flex items-start gap-4 rounded-xl bg-white p-5 shadow border"

                        >

                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">

                            {index + 1}

                          </div>

                          <div className="flex-1">

                            <div className="whitespace-pre-line leading-8 text-gray-700">

                              {cleanText(activity)}

                            </div>

                          </div>

                          <button

                            onClick={() => removeActivity(day, index)}

                            className="rounded-lg bg-red-500 px-3 py-2 text-white hover:bg-red-600 transition"

                          >

                            ✕

                          </button>

                        </div>

                      )

                    )

                  }

                </div>

                <button

                  onClick={() => addActivity(day)}

                  className="mt-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-white font-semibold hover:scale-105 transition"

                >

                  ➕ Add Activity

                </button>

              </div>

            ))

          }

        </div>

      </div>

    </div>

  );

}
