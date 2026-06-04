import React from "react"
import { motion } from "framer-motion"
import about from '../assets/about.jpg'

import {
  FaDumbbell,
  FaHeartbeat,
  FaUsers,
  FaAppleAlt,
  FaChartLine,
  FaPlayCircle,
  FaAward,
  FaQuoteLeft,
} from "react-icons/fa"

const About = () => {
  return (
    <div className="bg-black p-3 text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-20">

        {/* GLOW */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 blur-3xl rounded-full"></div>

        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <div className="inline-flex items-center gap-3 bg-[#111] border border-gray-800 px-5 py-3 rounded-full mb-8">

              <FaDumbbell className="text-red-500" />

              <p className="text-sm tracking-widest text-gray-300 uppercase">
                About FitVerse
              </p>

            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight">

              Elevate Your
              <span className="text-red-500"> Fitness Lifestyle</span>

            </h1>

            <p className="text-gray-400 text-lg leading-8 mt-8 max-w-xl">

              FitVerse is an all-in-one fitness social platform designed
              to transform your body, mindset, and daily habits.
              From AI-powered workout tracking to live coaching and
              fitness reels, we help you stay motivated every single day.

            </p>

            

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >

            <img
              src={about}
              alt="fitness"
              className="rounded-[40px] h-[700px] w-full object-cover"
            />

            <div className="absolute bottom-10 left-10 bg-black/70 backdrop-blur-xl border border-gray-800 rounded-3xl px-8 py-6">

              <h2 className="text-4xl font-bold">
                500K+
              </h2>

              <p className="text-gray-400">
                Active Fitness Members
              </p>

            </div>

          </motion.div>

        </div>

      </section>

      {/* STATS */}
      <section className="px-6 lg:px-20 py-24">

        <div className="grid md:grid-cols-4 gap-8">

          {[
            { number: "500K+", text: "Community Members" },
            { number: "120+", text: "Professional Trainers" },
            { number: "2M+", text: "Workout Sessions" },
            { number: "98%", text: "Success Rate" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#0f0f0f] border border-gray-800 rounded-3xl p-10 text-center hover:border-red-500 transition duration-300"
            >

              <h2 className="text-5xl font-black text-red-500">
                {item.number}
              </h2>

              <p className="text-gray-400 mt-4 text-lg">
                {item.text}
              </p>

            </motion.div>
          ))}

        </div>

      </section>

      {/* FEATURES */}
      <section className="px-6 lg:px-20 py-24 bg-[#0b0b0b]">

        <div className="text-center max-w-3xl mx-auto">

          <h2 className="text-5xl font-black">
            Why Choose
            <span className="text-red-500"> FitVerse?</span>
          </h2>

          <p className="text-gray-400 mt-6 text-lg leading-8">

            We combine fitness, social interaction, and technology
            to create a modern platform that keeps you consistent,
            motivated, and connected.

          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {[
            {
              icon: <FaHeartbeat />,
              title: "Workout Tracking",
              desc: "Track every workout, calories burned, progress photos, and body goals with smart analytics.",
            },
            {
              icon: <FaAppleAlt />,
              title: "AI Diet Plans",
              desc: "Receive personalized meal suggestions and nutrition tracking powered by AI.",
            },
            {
              icon: <FaUsers />,
              title: "Fitness Community",
              desc: "Connect with athletes, trainers, and gym lovers from all around the world.",
            },
            {
              icon: <FaPlayCircle />,
              title: "Fitness Reels",
              desc: "Watch short motivational fitness reels, gym tutorials, and transformation stories.",
            },
            {
              icon: <FaChartLine />,
              title: "Progress Analytics",
              desc: "Monitor your consistency, weight changes, strength growth, and performance insights.",
            },
            {
              icon: <FaAward />,
              title: "Expert Trainers",
              desc: "Access professional trainers and personalized workout programs anytime.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="bg-black border border-gray-800 rounded-[30px] p-10 hover:border-red-500 transition duration-300"
            >

              <div className="bg-red-500/20 text-red-500 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl">

                {feature.icon}

              </div>

              <h3 className="text-2xl font-bold mt-8">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-8 mt-5">
                {feature.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </section>

      {/* MISSION */}
      <section className="px-6 lg:px-20 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop"
              alt="gym"
              className="rounded-[40px] w-full h-[650px] object-cover"
            />

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <h2 className="text-5xl font-black leading-tight">

              Our Mission Is To Build
              <span className="text-red-500"> A Healthier Generation</span>

            </h2>

            <p className="text-gray-400 leading-8 mt-8 text-lg">

              At FitVerse, we believe fitness is more than just lifting
              weights. It is about confidence, discipline, mental strength,
              and creating a lifestyle that inspires others.

            </p>

            <p className="text-gray-400 leading-8 mt-6 text-lg">

              Our platform helps users stay consistent through social
              engagement, smart recommendations, and personalized
              fitness experiences.

            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="bg-[#111] border border-gray-800 rounded-3xl p-6">

                <h3 className="text-4xl font-black text-red-500">
                  24/7
                </h3>

                <p className="text-gray-400 mt-2">
                  AI Fitness Support
                </p>

              </div>

              <div className="bg-[#111] border border-gray-800 rounded-3xl p-6">

                <h3 className="text-4xl font-black text-red-500">
                  100+
                </h3>

                <p className="text-gray-400 mt-2">
                  Workout Programs
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* TESTIMONIAL */}
      <section className="px-6 lg:px-20 py-24 bg-[#0b0b0b]">

        <div className="text-center max-w-3xl mx-auto">

          <h2 className="text-5xl font-black">

            What Our
            <span className="text-red-500"> Members Say</span>

          </h2>

          <p className="text-gray-400 mt-6 text-lg">

            Thousands of people are transforming their lives with FitVerse.

          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {[
            {
              name: "Arjun Menon",
              review:
                "FitVerse completely changed my workout consistency. The AI plans and community support are amazing.",
            },
            {
              name: "Sarah Joseph",
              review:
                "The reels section keeps me motivated every day. I lost 12kg in 5 months using FitVerse.",
            },
            {
              name: "Rahul Krishnan",
              review:
                "Best fitness platform I’ve ever used. Professional design, trainers, and tracking tools are top class.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-black border border-gray-800 rounded-[30px] p-10"
            >

              <FaQuoteLeft className="text-4xl text-red-500" />

              <p className="text-gray-400 leading-8 mt-8 text-lg">
                {item.review}
              </p>

              <h3 className="text-2xl font-bold mt-10">
                {item.name}
              </h3>

            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="px-6 lg:px-20 py-24">

        <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-[40px] p-12 lg:p-20 text-center">

          <h2 className="text-5xl lg:text-6xl font-black leading-tight">

            Start Your Fitness
            Journey Today

          </h2>

          <p className="text-white/80 text-lg mt-8 max-w-3xl mx-auto leading-8">

            Join FitVerse and unlock personalized workouts,
            AI diet plans, fitness reels, trainer sessions,
            and a supportive global fitness community.

          </p>

          <button className="bg-black hover:bg-[#111] px-10 py-5 rounded-2xl font-bold mt-10 transition duration-300">
            Get Started Now
          </button>

        </div>

      </section>

    </div>
  )
}

export default About