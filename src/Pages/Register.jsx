import React from "react"
import { motion } from "framer-motion"

import {FaUser,FaEnvelope,FaLock,FaGoogle,FaApple,FaDumbbell,} from "react-icons/fa"

import { NavLink } from "react-router-dom"


const Register = () => {

    
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20 overflow-hidden relative">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 blur-3xl rounded-full"></div>

      {/* REGISTER CARD */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-6xl grid lg:grid-cols-2 bg-[#0f0f0f] border border-gray-800 rounded-[40px] overflow-hidden shadow-2xl"
      >

        {/* LEFT SIDE */}
        <div className="relative hidden lg:flex items-center justify-center overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop"
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
              Start Your
              <span className="text-red-500"> Fitness Journey</span>
            </h2>

            <p className="text-gray-300 text-lg leading-8 mt-8">
              Create your account and unlock workouts, AI diet plans,
              live trainer sessions, reels, and community challenges.
            </p>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="p-8 md:p-14">

          <div className="max-w-md mx-auto">

            <h2 className="text-5xl font-bold">
              Create Account
            </h2>

            <p className="text-gray-400 mt-5 text-lg">
              Join the FitVerse fitness community today.
            </p>

            {/* FORM */}
            <form className="mt-12 space-y-6">

              {/* NAME */}
              <div>

                <label className="text-gray-300">
                  Full Name
                </label>

                <div className="mt-3 bg-[#111] border border-gray-800 focus-within:border-red-500 rounded-2xl flex items-center px-5 py-4 transition duration-300">

                  <FaUser className="text-gray-500 text-lg" />

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="bg-transparent w-full outline-none px-4"
                  />

                </div>

              </div>

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
                    placeholder="Create password"
                    className="bg-transparent w-full outline-none px-4"
                  />

                </div>

              </div>

              {/* CONFIRM PASSWORD */}
              <div>

                <label className="text-gray-300">
                  Confirm Password
                </label>

                <div className="mt-3 bg-[#111] border border-gray-800 focus-within:border-red-500 rounded-2xl flex items-center px-5 py-4 transition duration-300">

                  <FaLock className="text-gray-500 text-lg" />

                  <input
                    type="password"
                    placeholder="Confirm password"
                    className="bg-transparent w-full outline-none px-4"
                  />

                </div>

              </div>

              {/* TERMS */}
              <div className="flex items-center gap-3 text-gray-400 text-sm">

                <input
                  type="checkbox"
                  className="accent-red-500"
                />

                <p>
                  I agree to the Terms & Conditions
                </p>

              </div>

              {/* REGISTER BUTTON */}
              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 py-4 rounded-2xl text-lg font-semibold transition duration-300 shadow-lg shadow-red-500/30"
              >
                Create Account
              </button>

            </form>

            {/* DIVIDER */}
            <div className="flex items-center gap-5 my-10">

              <div className="flex-1 h-[1px] bg-gray-800"></div>

              <p className="text-gray-500">
                OR
              </p>

              <div className="flex-1  bg-gray-800"></div>

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

            {/* LOGIN */}
            <p className="text-gray-400 text-center mt-10">

              Already have an account?

              <NavLink to="/login">
            <span className="text-blue-600 cursor-pointer hover:underline">
              Login
            </span>
          </NavLink>

            </p>

          </div>

        </div>

      </motion.div>

    </div>
  )
}

export default Register