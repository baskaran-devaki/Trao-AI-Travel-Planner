"use client";

import { useMemo } from "react";

export default function ItineraryCard({ trip }: { trip: any }) {

  const parsed = useMemo(() => {

    const text = trip?.itinerary || "";

    const result = {
      destination: trip?.destination || "",
      budget: trip?.budget || "",
      days: trip?.days || "",
      dayCards: [] as any[],
      budgetSummary: [] as string[],
      travelTips: [] as string[],
    };

    if (!text) return result;

    // Extract Day Sections

    const dayRegex =
      /\*\*Day\s+\d+[\s\S]*?(?=\*\*Day\s+\d+|\*\*Budget Breakdown|\Z)/gi;

    const dayMatches = text.match(dayRegex);

    if (dayMatches) {

      dayMatches.forEach((section) => {

        const title =
          section.match(/\*\*(Day\s+\d+.*?)\*\*/)?.[1] ||
          "Day";

        let body = section
          .replace(/\*\*Day.*?\*\*/i, "")
          .replace(/\*\*/g, "")
          .trim();

        const activities = body
          .split("\n")
          .map((x) => x.trim())
          .filter(Boolean);

        result.dayCards.push({

          title,

          activities,

        });

      });

    }

    // Budget

    const budgetMatch =
      text.match(/\*\*Budget Breakdown[\s\S]*/i);

    if (budgetMatch) {

      const lines = budgetMatch[0]
        .replace(/\*\*/g, "")
        .split("\n")
        .map((x) => x.trim())
        .filter(Boolean);

      lines.forEach((line) => {

        if (
          line.includes("Accommodation") ||
          line.includes("Food") ||
          line.includes("Activities") ||
          line.includes("Transportation") ||
          line.includes("Total")
        ) {

          result.budgetSummary.push(line);

        }

      });

    }

    // Tips

    const tips =
      text.match(/Travel Tip:(.*)|Budget Tip:(.*)/gi);

    if (tips) {

      tips.forEach((tip) => {

        result.travelTips.push(

          tip
            .replace("Travel Tip:", "")
            .replace("Budget Tip:", "")
            .trim()

        );

      });

    }

    return result;

  }, [trip]);
    const dayColors = [
    "from-cyan-500 to-blue-600",
    "from-violet-500 to-fuchsia-600",
    "from-emerald-500 to-teal-600",
    "from-orange-500 to-amber-500",
    "from-pink-500 to-rose-600",
  ];

  return (

    <div className="relative overflow-hidden rounded-[32px] bg-slate-950 text-white border border-cyan-500/20 shadow-[0_0_50px_rgba(0,229,255,.15)]">

      {/* Background Glow */}

      <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="absolute top-40 -right-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-[120px]" />

      <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative z-10">

        {/* HERO */}

        <div className="border-b border-white/10 bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-fuchsia-500/10 backdrop-blur-xl">

          <div className="px-8 py-10">

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

              <div>

                <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">

                  ✨ AI GENERATED ITINERARY

                </span>

                <h1 className="mt-5 text-5xl font-extrabold tracking-tight">

                  📍 {parsed.destination}

                </h1>

                <p className="mt-4 text-slate-300 text-lg leading-8 max-w-2xl">

                  Your personalized AI travel itinerary has been generated successfully.

                  Explore every destination with beautiful day-wise planning,

                  budget estimates and useful travel tips.

                </p>

              </div>

              <div className="hidden lg:block">

                <div className="text-[140px]">

                  🌍

                </div>

              </div>

            </div>

            {/* STATS */}

            <div className="mt-10 grid gap-5 md:grid-cols-3">

              <div className="rounded-3xl border border-cyan-400/20 bg-slate-900/60 backdrop-blur-xl p-6 shadow-[0_0_25px_rgba(0,229,255,.15)]">

                <p className="text-cyan-300 text-sm uppercase tracking-widest">

                  Budget

                </p>

                <h2 className="mt-3 text-3xl font-bold">

                  💰 {parsed.budget}

                </h2>

              </div>

              <div className="rounded-3xl border border-violet-400/20 bg-slate-900/60 backdrop-blur-xl p-6 shadow-[0_0_25px_rgba(139,92,246,.15)]">

                <p className="text-violet-300 text-sm uppercase tracking-widest">

                  Duration

                </p>

                <h2 className="mt-3 text-3xl font-bold">

                  🗓 {parsed.days} Days

                </h2>

              </div>

              <div className="rounded-3xl border border-pink-400/20 bg-slate-900/60 backdrop-blur-xl p-6 shadow-[0_0_25px_rgba(236,72,153,.15)]">

                <p className="text-pink-300 text-sm uppercase tracking-widest">

                  Status

                </p>

                <h2 className="mt-3 text-3xl font-bold">

                  🤖 Ready

                </h2>

              </div>

            </div>

          </div>

        </div>

        {/* DAY CARDS */}

        <div className="space-y-10 p-8">
          {
  parsed.dayCards.map((day: any, index: number) => (

    <div
      key={index}
      className="overflow-hidden rounded-[28px] border border-cyan-500/20 bg-slate-900/70 backdrop-blur-xl shadow-[0_0_40px_rgba(0,229,255,.08)] transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_0_60px_rgba(0,229,255,.25)]"
    >

      {/* Day Header */}

      <div
        className={`bg-gradient-to-r ${dayColors[index % dayColors.length]} p-6`}
      >

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-3xl font-extrabold text-white">

              🌴 {day.title}

            </h2>

            <p className="mt-2 text-white/80">

              AI planned activities for this day

            </p>

          </div>

          <div className="rounded-full bg-white/20 px-5 py-2 font-bold text-white backdrop-blur">

            Day {index + 1}

          </div>

        </div>

      </div>

      {/* Activities */}

      <div className="p-8">

        <div className="space-y-6">

          {

            day.activities.map((activity: string, activityIndex: number) => {

              const clean = activity
                .replace(/\*\*/g, "")
                .replace(/^-/, "")
                .trim();

              let icon = "📍";

              if (clean.toLowerCase().includes("morning")) icon = "🌅";
              else if (clean.toLowerCase().includes("afternoon")) icon = "☀️";
              else if (clean.toLowerCase().includes("evening")) icon = "🌇";
              else if (clean.toLowerCase().includes("dinner")) icon = "🍽️";
              else if (clean.toLowerCase().includes("breakfast")) icon = "🥞";
              else if (clean.toLowerCase().includes("lunch")) icon = "🍛";
              else if (clean.toLowerCase().includes("beach")) icon = "🏖️";
              else if (clean.toLowerCase().includes("hotel")) icon = "🏨";
              else if (clean.toLowerCase().includes("church")) icon = "⛪";
              else if (clean.toLowerCase().includes("travel")) icon = "🚗";
              else if (clean.toLowerCase().includes("boat")) icon = "🚤";
              else if (clean.toLowerCase().includes("shopping")) icon = "🛍️";
              else if (clean.toLowerCase().includes("tip")) icon = "💡";

              return (

                <div
                  key={activityIndex}
                  className="flex gap-5"
                >

                  {/* Timeline */}

                  <div className="flex flex-col items-center">

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500 text-2xl shadow-[0_0_30px_rgba(0,229,255,.5)]">

                      {icon}

                    </div>

                    {

                      activityIndex !== day.activities.length - 1 && (

                        <div className="mt-2 h-16 w-[3px] rounded-full bg-cyan-400/40"></div>

                      )

                    }

                  </div>

                  {/* Activity Card */}

                  <div className="flex-1 rounded-2xl border border-slate-700 bg-slate-800/60 p-6 transition-all duration-300 hover:border-cyan-400 hover:bg-slate-800">

                    <p className="text-lg leading-8 text-slate-200">

                      {clean}

                    </p>

                  </div>

                </div>

              );

            })

          }

        </div>

      </div>

    </div>

  ))
}
                  </div>

      </div>

      {/* Budget Summary */}

      {

        parsed.budgetSummary.length > 0 && (

          <div className="rounded-[30px] border border-emerald-500/20 bg-gradient-to-r from-emerald-900/50 via-green-900/40 to-teal-900/50 p-8 backdrop-blur-xl shadow-[0_0_50px_rgba(16,185,129,.15)]">

            <h2 className="mb-8 text-3xl font-extrabold text-emerald-300">

              💰 Budget Summary

            </h2>

            <div className="grid gap-5 md:grid-cols-2">

              {

                parsed.budgetSummary.map((item:string,index:number)=>(

                  <div

                    key={index}

                    className="rounded-2xl border border-emerald-400/20 bg-slate-900/60 p-6 transition hover:border-emerald-400 hover:shadow-[0_0_35px_rgba(16,185,129,.25)]"

                  >

                    <p className="text-lg text-slate-200">

                      {item}

                    </p>

                  </div>

                ))

              }

            </div>

          </div>

        )

      }

      {/* Travel Tips */}

      {

        parsed.travelTips.length>0 && (

          <div className="rounded-[30px] border border-yellow-500/20 bg-gradient-to-r from-yellow-900/30 via-amber-900/20 to-orange-900/30 p-8 backdrop-blur-xl shadow-[0_0_45px_rgba(245,158,11,.15)]">

            <h2 className="mb-8 text-3xl font-extrabold text-yellow-300">

              💡 Travel Tips

            </h2>

            <div className="space-y-5">

              {

                parsed.travelTips.map((tip:string,index:number)=>(

                  <div

                    key={index}

                    className="flex gap-5 rounded-2xl border border-yellow-500/20 bg-slate-900/60 p-6"

                  >

                    <div className="text-3xl">

                      🚀

                    </div>

                    <p className="text-lg leading-8 text-slate-200">

                      {tip}

                    </p>

                  </div>

                ))

              }

            </div>

          </div>

        )

      }

      {/* Footer */}

      <div className="mt-12 rounded-[30px] border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-pink-500/10 p-8 text-center backdrop-blur-xl">

        <h2 className="text-3xl font-bold text-white">

          🌍 Enjoy Your Journey

        </h2>

        <p className="mt-4 text-slate-300 text-lg">

          This itinerary was intelligently generated by AI to help you enjoy
          a smarter and more memorable travel experience.

        </p>

      </div>

    </div>

  </div>

);

}
