"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/utils/api";

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {

    try {

      setLoading(true);

      const response = await api.post("/auth/login", {

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

    catch (error: any) {

      console.log(error.response?.data);

      alert(

        error.response?.data?.message || "Login Failed"

      );

    }

    finally {

      setLoading(false);

    }

  };



  return (

    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-200 flex items-center justify-center px-5">

      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600')] bg-cover bg-center opacity-20"></div>

      <div className="relative w-full max-w-md">

        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white">

          <div className="text-center mb-8">

            <div className="text-6xl mb-3">

              ✈️

            </div>

            <h1 className="text-4xl font-extrabold text-gray-800">

              Login

            </h1>

            <p className="text-gray-500 mt-2">

              Welcome back to Baski AI Travel Planner

            </p>

          </div>

          <div className="space-y-5">

            <input

              type="email"

              placeholder="Email"

              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-4 outline-none focus:ring-4 focus:ring-blue-300 transition"

              value={email}

              onChange={(e) => setEmail(e.target.value)}

            />

            <input

              type="password"

              placeholder="Password"

              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-4 outline-none focus:ring-4 focus:ring-blue-300 transition"

              value={password}

              onChange={(e) => setPassword(e.target.value)}

            />

            <button

              onClick={handleLogin}

              disabled={loading}

              className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:scale-[1.02] hover:shadow-xl transition duration-300"

            >

              {loading ? "Logging..." : "Login"}

            </button>

          </div>

          <div className="mt-8 text-center">

            <p className="text-gray-600">

              Don't have account?

            </p>

            <button

              className="mt-2 font-semibold text-blue-600 hover:text-blue-800 transition"

              onClick={() => router.push("/register")}

            >

              Register

            </button>

          </div>

        </div>

      </div>

    </div>

  );

}
