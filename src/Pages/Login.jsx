import React from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"


import {
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaApple,
  FaDumbbell,
} from "react-icons/fa"

import { NavLink } from "react-router-dom"




const Login = () => {
  const navigate  = useNavigate()

  

  
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20 overflow-hidden relative">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 blur-3xl rounded-full"></div>

      {/* LOGIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-6xl grid lg:grid-cols-2 bg-[#0f0f0f] border border-gray-800 rounded-[40px] overflow-hidden shadow-2xl"
      >

        {/* LEFT SIDE */}
        <div className="relative hidden lg:flex items-center justify-center overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop"
            alt="fitness"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/70"></div>

          <div className="relative z-10 p-14">

            <div className="flex items-center gap-4">

              <div className="bg-red-500 p-4 rounded-2xl shadow-lg shadow-red-500/30">
                <FaDumbbell className="text-3xl" />
              </div>

              <h1 className="text-5xl font-extrabold">
                Fit<span className="text-red-500">Verse</span>
              </h1>

            </div>

            <h2 className="text-5xl font-bold leading-tight mt-12">
              Transform Your
              <span className="text-red-500"> Fitness Journey</span>
            </h2>

            <p className="text-gray-300 text-lg leading-8 mt-8">
              Join the ultimate fitness community with AI diet plans,
              live trainer sessions, workout tracking, and fitness reels.
            </p>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="p-8 md:p-14">

          <div className="max-w-md mx-auto">

            <h2 className="text-5xl font-bold">
              Welcome Back
            </h2>

            <p className="text-gray-400 mt-5 text-lg">
              Login to continue your fitness journey.
            </p>

            {/* FORM */}
            <form  className="mt-12 space-y-6">

              {/* EMAIL */}
              <div>

                <label className="text-gray-300">
                  Email Address
                </label>

                <div className="mt-3 bg-[#111] border border-gray-800 focus-within:border-red-500 rounded-2xl flex items-center px-5 py-4 transition duration-300">

                  <FaEnvelope className="text-gray-500 text-lg" />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-transparent w-full outline-none px-4"
                  />

                </div>

              </div>

              {/* PASSWORD */}
              <div>

                <label className="text-gray-300">
                  Password
                </label>

                <div className="mt-3 bg-[#111] border border-gray-800 focus-within:border-red-500 rounded-2xl flex items-center px-5 py-4 transition duration-300">

                  <FaLock className="text-gray-500 text-lg" />

                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="bg-transparent w-full outline-none px-4"
                  />

                </div>

              </div>

              {/* OPTIONS */}
              <div className="flex items-center justify-between text-sm">

                <label className="flex items-center gap-3 text-gray-400">

                  <input
                    type="checkbox"
                    className="accent-red-500"
                  />

                  Remember Me

                </label>

                <button
                  type="button"
                  className="text-red-500 hover:text-red-400 transition duration-300"
                >
                  Forgot Password?
                </button>

              </div>

              {/* LOGIN BUTTON */}
              <button

                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 py-4 rounded-2xl text-lg font-semibold transition duration-300 shadow-lg shadow-red-500/30"
              >
                Login
              </button>

            </form>

            {/* DIVIDER */}
            <div className="flex items-center gap-5 my-10">

              <div className="flex-1 h-[1px] bg-gray-800"></div>

              <p className="text-gray-500">
                OR
              </p>

              <div className="flex-1 h-[1px] bg-gray-800"></div>

            </div>

            {/* SOCIAL LOGIN */}
            <div className="grid grid-cols-2 gap-5">

              <button className="bg-[#111] border border-gray-800 hover:border-red-500 py-4 rounded-2xl flex items-center justify-center gap-3 transition duration-300">

                <FaGoogle className="text-xl" />

                Google

              </button>

              <button className="bg-[#111] border border-gray-800 hover:border-red-500 py-4 rounded-2xl flex items-center justify-center gap-3 transition duration-300">

                <FaApple className="text-xl" />

                Apple

              </button>

            </div>

            {/* REGISTER */}
             <p className="text-center text-sm text-gray-600 mt-6">
  Don’t have an account?{" "}
{/*   
  <NavLink
    to="/register"
    className="text-blue-600 hover:underline"
  >
    Sign up
  </NavLink> */}
  <button onClick={() => navigate("/register")}>
  Register
</button>

</p> 

          </div>

        </div>

      </motion.div>

    </div>
  )
}

export default Login