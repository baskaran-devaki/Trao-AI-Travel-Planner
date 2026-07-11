"use client";

import { useState } from "react";
import CreateTripForm from "@/components/CreateTripForm";
import ItineraryCard from "@/components/ItineraryCard";
import { useRouter } from "next/navigation";

export default function Dashboard() {

  const router = useRouter();

  const [latestTrip, setLatestTrip] = useState<any>(null);

  const logout = () => {

    localStorage.removeItem("token");

    router.push("/");

  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-cyan-100">

      {/* Header */}

      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <div>

            <h1 className="text-3xl font-extrabold text-gray-900">

              ✈️ Baski AI Travel Planner

            </h1>

            <p className="text-gray-500 mt-1">

              Create smart AI powered travel plans.

            </p>

          </div>

          <button

            onClick={logout}

            className="rounded-xl bg-red-500 px-6 py-3 text-white font-semibold shadow-lg hover:bg-red-600 hover:scale-105 transition-all duration-300"

          >

            Logout

          </button>

        </div>

      </header>

      {/* Main */}

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Welcome Banner */}

        <div className="mb-10 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-2xl">

          <div className="flex flex-col lg:flex-row items-center justify-between p-10">

            <div>

              <h2 className="text-4xl font-bold">

                🌍 Plan Your Next Adventure

              </h2>

              <p className="mt-4 max-w-2xl text-blue-100 leading-8">

                Generate personalized AI itineraries, discover amazing places,
                manage your travel plans, and enjoy stress-free trips.

              </p>

            </div>

            <div className="text-[120px] mt-6 lg:mt-0">

              ✈️

            </div>

          </div>

        </div>

        {/* Create Trip */}

        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8">

          <div className="mb-8">

            <h2 className="text-3xl font-bold text-gray-900">

              🧳 Create New Trip

            </h2>

            <p className="text-gray-500 mt-2">

              Fill in the details and let AI generate your perfect itinerary.

            </p>

          </div>

          <CreateTripForm

            setLatestTrip={setLatestTrip}

          />

        </div>

        {/* AI Result */}

        {

          latestTrip &&

          <div className="mt-10">

            <div className="flex items-center justify-between mb-6">

              <div>

                <h2 className="text-3xl font-bold">

                  🤖 AI Generated Trip

                </h2>

                <p className="text-gray-500 mt-2">

                  Your personalized travel itinerary is ready.

                </p>

              </div>

            </div>

            <div className="rounded-3xl bg-white border border-gray-200 shadow-2xl p-8">

              <ItineraryCard

                trip={latestTrip}

              />

            </div>

          </div>

        }

      </div>

    </div>

  );

}
