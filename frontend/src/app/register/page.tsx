"use client";

import { useState } from "react";
import api from "@/utils/api";
import { useRouter } from "next/navigation";

export default function Register() {

  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {

    try {

      await api.post("/auth/register", {
        name,
        email,
        password
      });

      alert("Register Success");

      router.push("/login");

    }

    catch (error: any) {

      console.log(error);

      alert(
        error.response?.data ||
        error.message
      );

    }

  };

  return (

    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-200 px-5">

      {/* Background Image */}

      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600')"
        }}
      />

      <div className="relative w-full max-w-md">

        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white p-10">

          <div className="text-center mb-8">

            <div className="text-6xl mb-3">

              🌍

            </div>

            <h1 className="text-4xl font-extrabold text-gray-800">

              Create Account

            </h1>

            <p className="text-gray-500 mt-2">

              Join Baski AI Travel Planner

            </p>

          </div>

          <div className="space-y-5">

            <input

              className="w-full rounded-xl border border-gray-300 px-4 py-4 outline-none focus:ring-4 focus:ring-cyan-300 transition"

              placeholder="Name"

              value={name}

              onChange={(e) => setName(e.target.value)}

            />

            <input

              className="w-full rounded-xl border border-gray-300 px-4 py-4 outline-none focus:ring-4 focus:ring-cyan-300 transition"

              placeholder="Email"

              value={email}

              onChange={(e) => setEmail(e.target.value)}

            />

            <input

              className="w-full rounded-xl border border-gray-300 px-4 py-4 outline-none focus:ring-4 focus:ring-cyan-300 transition"

              placeholder="Password"

              type="password"

              value={password}

              onChange={(e) => setPassword(e.target.value)}

            />

            <button

              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:scale-[1.02] hover:shadow-xl transition duration-300"

              onClick={handleRegister}

            >

              Register

            </button>

          </div>

          <div className="mt-8 text-center">

            <p className="text-gray-600">

              Already have an account?

            </p>

            <button

              className="mt-2 font-semibold text-blue-600 hover:text-blue-800 transition"

              onClick={() => router.push("/login")}

            >

              Login

            </button>

          </div>

        </div>

      </div>

    </div>

  );

}
