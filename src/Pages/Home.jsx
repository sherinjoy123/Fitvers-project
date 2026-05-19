
import React from "react"
import {FaDumbbell,FaUsers,FaVideo,FaArrowRight,} from "react-icons/fa"

import {MdFitnessCenter,MdOutlineMonitorHeart,} from "react-icons/md"

import { motion } from "framer-motion"
import muscle from "../assets/muscleGain.jpg"
import fatlose from "../assets/fatlose.jpg"
import Hiit from "../assets/hiitTraing.jpg"
import Homeworkout from "../assets/homeWorkout.jpg"
import About from "./About"

const Home = () => {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center px-6 lg:px-20 overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-red-600/10 blur-3xl rounded-full"></div>

        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto w-full z-10">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <p className="text-red-500 pt-4 uppercase tracking-[5px] font-semibold mb-5">
              Welcome To FitVerse
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Push Beyond
              <span className="text-red-500"> Limits </span>
              And Become Your
              <span className="text-red-500"> Best </span>
              Version
            </h1>

            <p className="text-gray-400 text-lg mt-8 leading-8 max-w-xl">
              Join the next-generation fitness social platform with AI diet
              plans, trainer video calls, reels, workout tracking, and a
              powerful gym community.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <button className="group bg-red-500 hover:bg-red-600 px-8 py-4 rounded-2xl text-lg font-semibold transition duration-300 flex items-center gap-3 shadow-xl shadow-red-500/30">
                Start Training
                <FaArrowRight className="group-hover:translate-x-1 transition" />
              </button>

              <button className="border border-gray-700 hover:border-red-500 hover:bg-red-500/10 px-8 py-4 rounded-2xl text-lg transition duration-300">
                Explore Trainers
              </button>

            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 mt-16">

              <div className="bg-[#111] border border-gray-800 rounded-2xl p-5 text-center hover:border-red-500 transition duration-300">
                <h2 className="text-4xl font-bold text-red-500">10K+</h2>
                <p className="text-gray-400 mt-2">Users</p>
              </div>

              <div className="bg-[#111] border border-gray-800 rounded-2xl p-5 text-center hover:border-red-500 transition duration-300">
                <h2 className="text-4xl font-bold text-red-500">500+</h2>
                <p className="text-gray-400 mt-2">Trainers</p>
              </div>

              <div className="bg-[#111] border border-gray-800 rounded-2xl p-5 text-center hover:border-red-500 transition duration-300">
                <h2 className="text-4xl font-bold text-red-500">50K+</h2>
                <p className="text-gray-400 mt-2">Sessions</p>
              </div>

            </div>

          </motion.div>

          {/* RIGHT IMAGES */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >

            <div className="grid grid-cols-2 pt-3 gap-5">

              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"
                alt="fitness"
                className="rounded-3xl  h-[250px] object-cover border border-gray-800 hover:scale-105 transition duration-500 shadow-2xl"
              />

              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop"
                alt="gym"
                className="rounded-3xl h-[400px] object-cover border border-gray-800 mt-16 hover:scale-105 transition duration-500 shadow-2xl"
              />

              <img
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop"
                alt="workout"
                className="rounded-3xl h-[400px] object-cover border border-gray-800 -mt-16 hover:scale-105 transition duration-500 shadow-2xl"
              />

              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop"
                alt="trainer"
                className="rounded-3xl h-[250px] object-cover border border-gray-800 hover:scale-105 transition duration-500 shadow-2xl"
              />

            </div>

          </motion.div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="py-28 px-6 lg:px-20 bg-[#0a0a0a]">

        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >

            <h2 className="text-5xl font-bold">
              Why Choose
              <span className="text-red-500"> FitVerse</span>
            </h2>

            <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
              Everything you need for your transformation journey.
            </p>

          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">

            <motion.div
  whileHover={{ y: -10 }}
  className="relative overflow-hidden rounded-3xl border border-gray-800 group"
>

  {/* Background Image */}
  <img
    src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop"
    alt="workout"
    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* Content */}
  <div className="relative z-10 p-8">

    <div className="bg-red-500 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-red-500/30">
      <MdFitnessCenter />
    </div>

    <h3 className="text-2xl font-bold mt-8">
      Workout Tracking
    </h3>

    <p className="text-gray-300 mt-4 leading-7">
      Track workouts, monitor progress, and hit goals faster.
    </p>

  </div>

</motion.div>

<motion.div
  whileHover={{ y: -10 }}
  className="relative overflow-hidden rounded-3xl border border-gray-800 group"
>

  {/* Background Image */}
  <img
    src="https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=1200&auto=format&fit=crop"
    alt="live training"
    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* Content */}
  <div className="relative z-10 p-8">

    <div className="bg-red-500 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-red-500/30">
      <FaVideo />
    </div>

    <h3 className="text-2xl font-bold mt-8">
      Live Training
    </h3>

    <p className="text-gray-300 mt-4 leading-7">
      Personal trainer video sessions and live coaching.
    </p>

  </div>

</motion.div>


<motion.div
  whileHover={{ y: -10 }}
  className="relative overflow-hidden rounded-3xl border border-gray-800 group"
>

  {/* Background Image */}
  <img
    src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop"
    alt="fitness community"
    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* Content */}
  <div className="relative z-10 p-8">

    <div className="bg-red-500 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-red-500/30">
      <FaUsers />
    </div>

    <h3 className="text-2xl font-bold mt-8">
      Fitness Community
    </h3>

    <p className="text-gray-300 mt-4 leading-7">
      Share transformations, connect with gym enthusiasts.
    </p>

  </div>

</motion.div>


<motion.div
  whileHover={{ y: -10 }}
  className="relative overflow-hidden rounded-3xl border border-gray-800 group"
>

  {/* Background Image */}
  <img
    src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop"
    alt="diet plans"
    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* Content */}
  <div className="relative z-10 p-8">

    <div className="bg-red-500 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-red-500/30">
      <MdOutlineMonitorHeart />
    </div>

    <h3 className="text-2xl font-bold mt-8">
      AI Diet Plans
    </h3>

    <p className="text-gray-300 mt-4 leading-7">
      Smart meal recommendations tailored to your body goals.
    </p>

  </div>

</motion.div>

          </div>

        </div>

      </section>

      {/* TRAINERS SECTION */}
      <section className="py-28 px-6 lg:px-20">

        <div className="max-w-7xl mx-auto">

          <div className="flex items-center justify-between flex-wrap gap-5 mb-16">

            <div>
              <h2 className="text-5xl font-bold">
                Elite
                <span className="text-red-500"> Trainers</span>
              </h2>

              <p className="text-gray-400 mt-4 text-lg">
                Train with professionals from around the world.
              </p>
            </div>

            <button className="border border-gray-700 hover:border-red-500 px-6 py-3 rounded-2xl transition duration-300">
              View All
            </button>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
  {
    name: "Alex Carter",
    role: "Strength & Conditioning Coach",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Sophia Williams",
    role: "Yoga & Flexibility Trainer",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Michael Brooks",
    role: "Muscle Building Expert",
    image:
      "https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=1200&auto=format&fit=crop",
  },
].map((trainer, index) => (
  <motion.div
    key={index}
    whileHover={{ scale: 1.03 }}
    className="bg-[#111] border border-gray-800 rounded-3xl overflow-hidden hover:border-red-500 transition duration-300"
  >

    <img
      src={trainer.image}
      alt="trainer"
      className="h-[350px] w-full object-cover"
    />

    <div className="p-6">

      <h3 className="text-2xl font-bold">
        {trainer.name}
      </h3>

      <p className="text-red-500 mt-2">
        {trainer.role}
      </p>

      <p className="text-gray-400 mt-4 leading-7">
        Certified professional trainer helping users achieve their body transformation goals.
      </p>

      <button className="mt-6 w-full bg-red-500 hover:bg-red-600 py-3 rounded-xl font-semibold transition duration-300">
        Book Session
      </button>

    </div>

  </motion.div>
))}

          </div>

        </div>

      </section>


<section className="py-28 px-6 lg:px-20 bg-[#0a0a0a]">

<div className="max-w-7xl mx-auto">

  <div className="text-center mb-20">

    <h2 className="text-5xl font-bold">
      Popular
      <span className="text-red-500"> Workout Programs</span>
    </h2>

    <p className="text-gray-400 mt-6 text-lg">
      Choose your training path and transform your fitness journey.
    </p>

  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

    {[
      {
        title: "Muscle Gain",
        image:
          muscle,
      },
      {
        title: "Fat Loss",
        image:
          fatlose,
      },
      {
        title: "HIIT Training",
        image:
          Hiit,
      },
      {
        title: "Home Workout",
        image:
          Homeworkout,
      },
    ].map((program, index) => (
      <motion.div
        key={index}
        whileHover={{ y: -10 }}
        className="relative overflow-hidden rounded-3xl border border-gray-800 group"
      >

        <img
          src={program.image}
          alt="program"
          className="h-[400px] w-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

        <div className="absolute bottom-0 p-6">
          <h3 className="text-3xl font-bold">
            {program.title}
          </h3>

          <button className="mt-4 bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl transition duration-300">
            Start Program
          </button>
        </div>

      </motion.div>
    ))}

  </div>

</div>

</section>

{/* FITNESS REELS SECTION */}
<section className="py-28 px-6 lg:px-20">

<div className="max-w-7xl mx-auto">

  <div className="flex items-center justify-between flex-wrap gap-5 mb-16">

    <div>
      <h2 className="text-5xl font-bold">
        Trending
        <span className="text-red-500"> Fitness Reels</span>
      </h2>

      <p className="text-gray-400 mt-4 text-lg">
        Explore workout clips and transformation videos.
      </p>
    </div>

    <button className="border border-gray-700 hover:border-red-500 px-6 py-3 rounded-2xl transition duration-300">
      View More
    </button>

  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

    {[
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
    ].map((image, index) => (

      <motion.div
        key={index}
        whileHover={{ scale: 1.04 }}
        className="relative overflow-hidden rounded-3xl border border-gray-800 group cursor-pointer"
      >

        <img
          src={image}
          alt="reel"
          className="h-[500px] w-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

        <div className="absolute bottom-0 p-5 w-full">

          <div className="flex items-center justify-between">

            <div>
              <h3 className="font-bold text-xl">
                Workout Reel
              </h3>

              <p className="text-gray-300 text-sm mt-1">
                25K Views
              </p>
            </div>

            <button className="bg-red-500 w-14 h-14 rounded-full flex items-center justify-center text-xl shadow-lg shadow-red-500/40">
              ▶
            </button>

          </div>

        </div>

      </motion.div>
    ))}

  </div>

</div>

</section>

{/* TESTIMONIALS SECTION */}
<section className="py-28 px-6 lg:px-20 bg-[#0a0a0a]">

<div className="max-w-7xl mx-auto">

  <div className="text-center mb-20">

    <h2 className="text-5xl font-bold">
      Success
      <span className="text-red-500"> Stories</span>
    </h2>

    <p className="text-gray-400 mt-6 text-lg">
      Hear from our fitness community.
    </p>

  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    {[
      {
        name: "Daniel",
        text: "FitVerse completely transformed my lifestyle and helped me lose 15kg.",
      },
      {
        name: "Sophia",
        text: "The live trainer sessions are amazing and super motivating.",
      },
      {
        name: "Ryan",
        text: "Best fitness social platform with workout tracking and AI diet plans.",
      },
    ].map((review, index) => (

      <motion.div
        key={index}
        whileHover={{ y: -10 }}
        className="bg-black border border-gray-800 rounded-3xl p-8 hover:border-red-500 transition duration-300"
      >

        <div className="flex gap-1 text-red-500 text-2xl">
          ★★★★★
        </div>

        <p className="text-gray-400 leading-8 mt-6 text-lg">
          “{review.text}”
        </p>

        <h3 className="mt-8 text-2xl font-bold">
          {review.name}
        </h3>

      </motion.div>
    ))}

  </div>

</div>

</section>

      {/* CTA SECTION */}
      <section className="py-28 px-6 lg:px-20">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-gradient-to-r from-red-500/20 to-black border border-red-500/30 rounded-[40px] p-14 text-center"
        >

          <h2 className="text-5xl font-bold leading-tight">
            Ready To Transform
            <span className="text-red-500"> Your Body?</span>
          </h2>

          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto leading-8">
            Join FitVerse today and unlock premium fitness experiences,
            live training, and AI-powered transformation.
          </p>

          <button className="mt-10 bg-red-500 hover:bg-red-600 px-10 py-5 rounded-2xl text-xl font-semibold transition duration-300 shadow-xl shadow-red-500/30">
            Join FitVerse Now
          </button>

        </motion.div>

      </section>

      <section>
        <About/>
      </section>

    </div>
  )
}

export default Home




