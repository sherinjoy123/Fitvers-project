import React from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

import Chest from "../assets/chest.jpg"
import Back from "../assets/Back2.jpg"
import Bice from "../assets/Biceps.jpg"
import Trice from "../assets/Triceps.jpg"
import Shoulder from "../assets/Shoulder.jpg"
import Leg from "../assets/leg.jpg"
import Abs from "../assets/abs.jpg"
import Hero from "../assets/hero.jpg"

import muscle from "../assets/muscleGain.jpg"
import fatlose from "../assets/fatlose.jpg"
import Hiit from "../assets/hiitTraing.jpg"
import Homeworkout from "../assets/homeWorkout.jpg"

import {
  FaFire,
  FaHeartbeat,
  FaClock,
  FaCalculator,
} from "react-icons/fa"

const workouts = [
  {
    title: "Chest Workout",
    image: Chest,
    duration: "45 Min",
    calories: "450 kcal",
  },

  {
    title: "Triceps Workout",
    image: Trice,
    duration: "40 Min",
    calories: "380 kcal",
  },

  {
    title: "Back Workout",
    image: Back,
    duration: "55 Min",
    calories: "520 kcal",
  },

  {
    title: "Biceps Workout",
    image: Bice,
    duration: "35 Min",
    calories: "340 kcal",
  },

  {
    title: "Leg Workout",
    image: Leg,
    duration: "60 Min",
    calories: "620 kcal",
  },

  {
    title: "Shoulder Workout",
    image: Shoulder,
    duration: "45 Min",
    calories: "410 kcal",
  },

  {
    title: "Abs Workout",
    image: Abs,
    duration: "30 Min",
    calories: "300 kcal",
  },
]

const programs = [
  {
    title: "Muscle Gain",
    image: muscle,
  },

  {
    title: "Fat Loss",
    image: fatlose,
  },

  {
    title: "HIIT Training",
    image: Hiit,
  },

  {
    title: "Home Workout",
    image: Homeworkout,
  },

  {
    title: "Weight Gain",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Cardio Blast",
    image:
      "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Yoga Flow",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Strength Training",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
  },
]

const Workout = () => {

  const navigate = useNavigate()
  return (
    <div className="bg-black text-white overflow-hidden min-h-screen relative">

      {/* GLOW EFFECT */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-red-500/20 blur-3xl rounded-full"></div>

      <div className="fixed bottom-0 right-0 w-96 h-96 bg-red-500/10 blur-3xl rounded-full"></div>

      {/* HERO SECTION */}
      <section className="relative px-6 lg:px-20 min-h-screen flex items-center z-10">

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center"
          >

            <div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">

                Train Hard
                <span className="text-red-500"> Stay Strong</span>

              </h1>

              <p className="text-gray-400 text-lg leading-8 mt-8 max-w-xl">

                Discover powerful workouts, track your progress,
                calculate BMI, and stay consistent with premium
                fitness programs inside FitVerse.

              </p>

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >

            <img
              src={Hero}
              alt="hero"
              className="rounded-[40px] h-[500px] sm:h-[650px] lg:h-[700px] w-full object-cover shadow-2xl"
            />

          </motion.div>

        </div>

      </section>

      {/* WORKOUT CATEGORIES */}
      <section className="px-6 lg:px-20 py-24 relative z-10">

        <div>

          <h2 className="text-5xl font-black">
            Workout Categories
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Choose your favorite muscle group and start training.
          </p>

        </div>

        {/* SLIDER */}
        <div className="flex gap-8 mt-16 overflow-x-auto scroll-smooth pb-4 no-scrollbar">

          {workouts.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="min-w-[320px] bg-[#0f0f0f] border border-gray-800 rounded-[30px] overflow-hidden hover:border-red-500 transition duration-300 flex-shrink-0"
            >

              <img
                src={item.image}
                alt={item.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <div className="flex items-center justify-between mt-6 text-gray-400">

                  <div className="flex items-center gap-2">

                    <FaClock />

                    {item.duration}

                  </div>

                  <div className="flex items-center gap-2">

                    <FaFire className="text-red-500" />

                    {item.calories}

                  </div>

                </div>

                <button onClick={()=>navigate('/workoutprograms')} className="w-full mt-8 bg-red-500 hover:bg-red-600 py-4 rounded-2xl font-semibold transition duration-300">

                  Start Workout

                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* WORKOUT PROGRAMS */}
      <section className="py-28 px-6 lg:px-20 bg-[#0a0a0a]">

        <div className="max-w-7xl mx-auto">

          {/* HEADING */}
          <div className="text-center mb-20">

            <h2 className="text-5xl font-bold">

              Popular
              <span className="text-red-500"> Workout Programs</span>

            </h2>

            <p className="text-gray-400 mt-6 text-lg">

              Choose your training path and transform your fitness journey.

            </p>

          </div>

          {/* SLIDER */}
          <div className="flex gap-8 overflow-x-auto scroll-smooth pb-4 no-scrollbar">

            {programs.map((program, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="relative min-w-[320px] overflow-hidden rounded-3xl border border-gray-800 group cursor-pointer flex-shrink-0"
              >

                <img
                  src={program.image}
                  alt={program.title}
                  className="h-[420px] w-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                <div className="absolute bottom-0 p-6 w-full">

                  <h3 className="text-3xl font-bold">
                    {program.title}
                  </h3>

                  <p className="text-gray-300 mt-3 leading-7">

                    Transform your body with personalized training plans and expert guidance.

                  </p>

                  <button onClick={()=>navigate('/workoutprograms')} className="mt-5 bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl transition duration-300 font-semibold shadow-lg shadow-red-500/30">

                    Start Program

                  </button>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* BMI CALCULATOR */}
      <section className="px-6 lg:px-20 py-24 relative z-10">

        <div className="bg-[#0f0f0f] border border-gray-800 rounded-[40px] p-10 lg:p-16">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>

              <div className="flex items-center gap-4">

                <div className="w-16 h-16 bg-red-500/20 text-red-500 rounded-2xl flex items-center justify-center text-2xl">

                  <FaCalculator />

                </div>

                <h2 className="text-5xl font-black">
                  BMI Calculator
                </h2>

              </div>

              <p className="text-gray-400 text-lg leading-8 mt-8">

                Check your Body Mass Index and understand
                your health condition instantly.

              </p>

              <div className="mt-10 space-y-4">

                <div className="flex items-center justify-between bg-black border border-gray-800 rounded-2xl p-5">

                  <p className="text-gray-400">
                    Underweight
                  </p>

                  <p className="text-blue-400">
                    Below 18.5
                  </p>

                </div>

                <div className="flex items-center justify-between bg-black border border-gray-800 rounded-2xl p-5">

                  <p className="text-gray-400">
                    Normal
                  </p>

                  <p className="text-green-400">
                    18.5 - 24.9
                  </p>

                </div>

                <div className="flex items-center justify-between bg-black border border-gray-800 rounded-2xl p-5">

                  <p className="text-gray-400">
                    Overweight
                  </p>

                  <p className="text-yellow-400">
                    25 - 29.9
                  </p>

                </div>

                <div className="flex items-center justify-between bg-black border border-gray-800 rounded-2xl p-5">

                  <p className="text-gray-400">
                    Obesity
                  </p>

                  <p className="text-red-400">
                    30+
                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="space-y-6">

              <input
                type="number"
                placeholder="Enter Height (cm)"
                className="w-full bg-black border border-gray-800 focus:border-red-500 outline-none rounded-2xl px-6 py-5 transition duration-300"
              />

              <input
                type="number"
                placeholder="Enter Weight (kg)"
                className="w-full bg-black border border-gray-800 focus:border-red-500 outline-none rounded-2xl px-6 py-5 transition duration-300"
              />

              <button className="w-full bg-red-500 hover:bg-red-600 py-5 rounded-2xl text-lg font-semibold transition duration-300 shadow-lg shadow-red-500/30">

                Calculate BMI

              </button>

              <div className="bg-black border border-gray-800 rounded-3xl p-8">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-gray-400">
                      Your BMI
                    </p>

                    <h3 className="text-5xl font-black text-red-500 mt-2">
                      22.4
                    </h3>

                  </div>

                  <div className="w-24 h-24 rounded-full border-4 border-red-500 flex items-center justify-center">

                    <FaHeartbeat className="text-4xl text-red-500" />

                  </div>

                </div>

                <p className="text-green-400 text-lg mt-6">
                  Healthy Weight Range
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

export default Workout