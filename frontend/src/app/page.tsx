import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-100 to-indigo-100 overflow-hidden">

      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl -z-10"></div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>

            <span className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ✨ AI Powered Travel Planning
            </span>

            <h1 className="text-6xl font-extrabold text-gray-900 leading-tight mt-6">

              ✈️ Baski AI Travel Planner

            </h1>

            <p className="text-xl text-gray-600 mt-8 leading-9 max-w-xl">

              Plan your perfect trips with AI.
              Generate personalized itineraries,
              discover places and manage your travel easily.

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                href="/login"
                className="px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold shadow-xl hover:bg-blue-700 hover:scale-105 transition-all duration-300"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="px-8 py-4 rounded-xl bg-white border border-gray-300 font-semibold hover:bg-gray-100 shadow-lg hover:scale-105 transition-all duration-300"
              >
                Register
              </Link>

            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center">

            <img
              src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=900"
              alt="Travel"
              className="rounded-3xl shadow-2xl object-cover h-[520px] w-full"
            />

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition-all duration-300">

            <div className="text-5xl mb-5">🤖</div>

            <h2 className="text-2xl font-bold">

              AI Planning

            </h2>

            <p className="mt-4 text-gray-600 leading-7">

              Generate smart travel plans using AI.

            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition-all duration-300">

            <div className="text-5xl mb-5">🗺️</div>

            <h2 className="text-2xl font-bold">

              Custom Trips

            </h2>

            <p className="mt-4 text-gray-600 leading-7">

              Create trips based on days and budget.

            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition-all duration-300">

            <div className="text-5xl mb-5">🎒</div>

            <h2 className="text-2xl font-bold">

              Packing List

            </h2>

            <p className="mt-4 text-gray-600 leading-7">

              Organize your travel essentials.

            </p>

          </div>

        </div>

      </section>

    </main>
  );
}
