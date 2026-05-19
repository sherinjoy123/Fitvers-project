import React from "react"

import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaDumbbell,
} from "react-icons/fa"

import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 text-white">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* LOGO & ABOUT */}
          <div>

            <div className="flex items-center gap-3">

              <div className="bg-red-500 p-3 rounded-xl shadow-lg shadow-red-500/30">
                <FaDumbbell className="text-white text-xl" />
              </div>

              <h1 className="text-3xl font-extrabold">
                <span className="text-white">Fit</span>
                <span className="text-red-500">Verse</span>
              </h1>

            </div>

            <p className="text-gray-400 leading-8 mt-6">
              FitVerse is the ultimate fitness social platform with workout
              tracking, AI diet plans, trainer video calls, reels, and fitness
              communities.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-4 mt-8">

              <div className="w-11 h-11 rounded-full border border-gray-700 hover:border-red-500 hover:bg-red-500 transition duration-300 flex items-center justify-center cursor-pointer">
                <FaInstagram />
              </div>

              <div className="w-11 h-11 rounded-full border border-gray-700 hover:border-red-500 hover:bg-red-500 transition duration-300 flex items-center justify-center cursor-pointer">
                <FaYoutube />
              </div>

              <div className="w-11 h-11 rounded-full border border-gray-700 hover:border-red-500 hover:bg-red-500 transition duration-300 flex items-center justify-center cursor-pointer">
                <FaFacebookF />
              </div>

              <div className="w-11 h-11 rounded-full border border-gray-700 hover:border-red-500 hover:bg-red-500 transition duration-300 flex items-center justify-center cursor-pointer">
                <FaTwitter />
              </div>

            </div>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h2 className="text-2xl font-bold mb-8">
              Quick Links
            </h2>

            <div className="flex flex-col gap-5 text-gray-400">

              <Link
                to="/"
                className="hover:text-red-500 transition duration-300"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="hover:text-red-500 transition duration-300"
              >
                About
              </Link>

              <Link
                to="/explore"
                className="hover:text-red-500 transition duration-300"
              >
                Explore
              </Link>

              <Link
                to="/reels"
                className="hover:text-red-500 transition duration-300"
              >
                Reels
              </Link>

              <Link
                to="/trainers"
                className="hover:text-red-500 transition duration-300"
              >
                Trainers
              </Link>

            </div>

          </div>

          {/* PROGRAMS */}
          <div>

            <h2 className="text-2xl font-bold mb-8">
              Programs
            </h2>

            <div className="flex flex-col gap-5 text-gray-400">

              <p className="hover:text-red-500 transition duration-300 cursor-pointer">
                Muscle Gain
              </p>

              <p className="hover:text-red-500 transition duration-300 cursor-pointer">
                Fat Loss
              </p>

              <p className="hover:text-red-500 transition duration-300 cursor-pointer">
                Strength Training
              </p>

              <p className="hover:text-red-500 transition duration-300 cursor-pointer">
                Yoga Sessions
              </p>

              <p className="hover:text-red-500 transition duration-300 cursor-pointer">
                Home Workouts
              </p>

            </div>

          </div>

          {/* NEWSLETTER */}
          <div>

            <h2 className="text-2xl font-bold mb-8">
              Newsletter
            </h2>

            <p className="text-gray-400 leading-7">
              Subscribe to get fitness tips, trainer updates, and workout plans.
            </p>

            <div className="mt-8">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-[#111] border border-gray-700 rounded-2xl px-5 py-4 outline-none focus:border-red-500 transition duration-300"
              />

              <button className="w-full mt-4 bg-red-500 hover:bg-red-600 py-4 rounded-2xl font-semibold transition duration-300 shadow-lg shadow-red-500/30">
                Subscribe
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-center">
            © 2026 FitVerse. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6 text-gray-500">

            <p className="hover:text-red-500 cursor-pointer transition duration-300">
              Privacy Policy
            </p>

            <p className="hover:text-red-500 cursor-pointer transition duration-300">
              Terms & Conditions
            </p>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer