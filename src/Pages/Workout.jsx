import React from "react"
import { motion } from "framer-motion"

import Chest from "../assets/chest.jpg"
import Back from "../assets/Back2.jpg"
import Bice from "../assets/Biceps.jpg"
import Trice from "../assets/Triceps.jpg"
import Shoulder from "../assets/Shoulder.jpg"
import Leg from "../assets/leg.jpg"
import Abs from "../assets/abs.jpg"
import Hero from "../assets/hero.jpg"

import {
  FaDumbbell,
  FaFire,
  FaHeartbeat,
  FaRunning,
  FaClock,
  FaPlay,
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

const exercises = [
  {
    name: "Bench Press",
    muscle: "Chest",
    sets: "4 Sets",
  },

  {
    name: "Deadlift",
    muscle: "Back",
    sets: "5 Sets",
  },

  {
    name: "Squats",
    muscle: "Legs",
    sets: "4 Sets",
  },

  {
    name: "Shoulder Press",
    muscle: "Shoulders",
    sets: "3 Sets",
  },
]

const plans = [
  {
    title: "Beginner Transformation",
    duration: "30 Days",
    level: "Beginner",
  },

  {
    title: "Muscle Gain Program",
    duration: "90 Days",
    level: "Advanced",
  },

  {
    title: "Fat Loss Challenge",
    duration: "45 Days",
    level: "Intermediate",
  },
]

const Workout = () => {
  return (
    <div className="bg-black text-white overflow-hidden min-h-screen relative">

      {/* GLOW EFFECT */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-red-500/20 blur-3xl rounded-full"></div>

      <div className="fixed bottom-0 right-0 w-96 h-96 bg-red-500/10 blur-3xl rounded-full"></div>

      {/* HERO SECTION */}
      <section className="relative px-6 lg:px-20 pt-32 pb-24 z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <div className="inline-flex items-center gap-3 bg-[#111] border border-gray-800 px-5 py-3 rounded-full mb-8">

              <FaDumbbell className="text-red-500" />

              <p className="uppercase text-sm tracking-widest text-gray-300">
                Workout Dashboard
              </p>

            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight">

              Train Hard
              <span className="text-red-500"> Stay Strong</span>

            </h1>

            <p className="text-gray-400 text-lg leading-8 mt-8 max-w-xl">

              Discover powerful workouts, track your progress,
              calculate BMI, and stay consistent with premium
              fitness programs inside FitVerse.

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <button className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-2xl font-semibold transition duration-300 shadow-lg shadow-red-500/30">
                Start Workout
              </button>

              <button className="border border-gray-700 hover:border-red-500 px-8 py-4 rounded-2xl font-semibold transition duration-300">
                Explore Plans
              </button>

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <img
              src={Hero}
              alt="hero"
              className="rounded-[40px] h-[700px] w-full object-cover"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-16">

          {workouts.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-[#0f0f0f] border border-gray-800 rounded-[30px] overflow-hidden hover:border-red-500 transition duration-300"
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

                <button className="w-full mt-8 bg-red-500 hover:bg-red-600 py-4 rounded-2xl font-semibold transition duration-300">

                  Start Workout

                </button>

              </div>

            </motion.div>
          ))}

        </div>

      </section>

      {/* TODAY WORKOUT */}
      <section className="px-6 lg:px-20 py-24 bg-[#0b0b0b] relative z-10">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>

            <h2 className="text-5xl font-black leading-tight">

              Today’s
              <span className="text-red-500"> Workout Plan</span>

            </h2>

            <p className="text-gray-400 text-lg leading-8 mt-8">

              Complete your workout and maintain your
              consistency to achieve your dream physique.

            </p>

            <div className="space-y-6 mt-12">

              {[
                "Bench Press - 4 x 12",
                "Incline Dumbbell Press - 3 x 10",
                "Cable Fly - 3 x 15",
                "Push Ups - 3 x 20",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-black border border-gray-800 rounded-2xl px-6 py-5 flex items-center justify-between"
                >

                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 bg-red-500/20 text-red-500 rounded-xl flex items-center justify-center">

                      <FaPlay />

                    </div>

                    <p className="text-lg">
                      {item}
                    </p>

                  </div>

                  <button className="text-red-500 hover:text-red-400">
                    Start
                  </button>

                </div>
              ))}

            </div>

          </div>

          {/* RIGHT */}
          <div className="bg-black border border-gray-800 rounded-[40px] p-10">

            <h3 className="text-3xl font-black">
              Workout Progress
            </h3>

            <div className="space-y-8 mt-10">

              <div>

                <div className="flex justify-between mb-3">

                  <p className="text-gray-300">
                    Daily Goal
                  </p>

                  <p className="text-red-500">
                    75%
                  </p>

                </div>

                <div className="w-full h-4 bg-[#111] rounded-full overflow-hidden">

                  <div className="bg-red-500 h-full w-[75%] rounded-full"></div>

                </div>

              </div>

              <div>

                <div className="flex justify-between mb-3">

                  <p className="text-gray-300">
                    Calories Burned
                  </p>

                  <p className="text-red-500">
                    620 kcal
                  </p>

                </div>

                <div className="w-full h-4 bg-[#111] rounded-full overflow-hidden">

                  <div className="bg-red-500 h-full w-[60%] rounded-full"></div>

                </div>

              </div>

              <div>

                <div className="flex justify-between mb-3">

                  <p className="text-gray-300">
                    Workout Streak
                  </p>

                  <p className="text-red-500">
                    12 Days
                  </p>

                </div>

                <div className="w-full h-4 bg-[#111] rounded-full overflow-hidden">

                  <div className="bg-red-500 h-full w-[90%] rounded-full"></div>

                </div>

              </div>

            </div>

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