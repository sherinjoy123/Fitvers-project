import React, { useState ,useEffect} from "react"
import {
  FaArrowRight,
} from "react-icons/fa"
import { getTrainerAPI } from "../services/trainerApi"

import { motion } from "framer-motion"

import muscle from "../assets/muscleGain.jpg"
import fatlose from "../assets/fatlose.jpg"
import Hiit from "../assets/hiitTraing.jpg"
import Homeworkout from "../assets/homeWorkout.jpg"

import About from "./About"

import { useNavigate } from "react-router-dom"

const Home = () => {

  const navigate = useNavigate()




  const [selectedTrainer, setSelectedTrainer] = useState(null)

  const [trainers, setTrainers] = useState([])

 
  const fetchTrainers = async () => {

    try {

      const result = await getTrainerAPI()

      setTrainers(result.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTrainers()
  }, [])


  

  return (
    <div className="bg-black text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-20 overflow-hidden pt-24">

        {/* BACKGROUND GLOW */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-10 right-10 w-80 h-80 bg-red-600/10 blur-3xl rounded-full"></div>

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center max-w-7xl mx-auto w-full relative z-10">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >

            <p className="text-red-500 uppercase tracking-[5px] font-semibold mb-5">

              Welcome To FitVerse

            </p>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">

              Push Beyond
              <span className="text-red-500"> Limits </span>

              And Become Your
              <span className="text-red-500"> Best </span>

              Version

            </h1>

            <p className="text-gray-400 text-lg mt-8 leading-8 max-w-2xl mx-auto lg:mx-0">

              Join the next-generation fitness social platform with AI diet
              plans, trainer video calls, reels, workout tracking, and a
              powerful gym community.

            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-10">

              <button onClick={()=>navigate('/workout')} className="group bg-red-500 hover:bg-red-600 px-8 py-4 rounded-2xl text-lg font-semibold transition duration-300 flex items-center gap-3 shadow-xl shadow-red-500/30">

                Start Training

                <FaArrowRight className="group-hover:translate-x-1 transition" />

              </button>

              <button onClick={()=>navigate('/trainers')} className="border border-gray-700 hover:border-red-500 hover:bg-red-500/10 px-8 py-4 rounded-2xl text-lg transition duration-300">

                Explore Trainers

              </button>

            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-16">

              <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 text-center hover:border-red-500 transition duration-300">

                <h2 className="text-4xl font-bold text-red-500">
                  10K+
                </h2>

                <p className="text-gray-400 mt-2">
                  Users
                </p>

              </div>

              <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 text-center hover:border-red-500 transition duration-300">

                <h2 className="text-4xl font-bold text-red-500">
                  500+
                </h2>

                <p className="text-gray-400 mt-2">
                  Trainers
                </p>

              </div>

              <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 text-center hover:border-red-500 transition duration-300">

                <h2 className="text-4xl font-bold text-red-500">
                  50K+
                </h2>

                <p className="text-gray-400 mt-2">
                  Sessions
                </p>

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

            <div className="grid grid-cols-2 gap-5 max-w-2xl">

              {/* IMAGE 1 */}
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"
                alt="fitness"
                className="rounded-3xl h-[260px] sm:h-[300px] w-full object-cover border border-gray-800 hover:scale-105 transition duration-500 shadow-2xl"
              />

              {/* IMAGE 2 */}
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop"
                alt="gym"
                className="rounded-3xl h-[360px] sm:h-[420px] w-full object-cover border border-gray-800 mt-10 hover:scale-105 transition duration-500 shadow-2xl"
              />

              {/* IMAGE 3 */}
              <img
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop"
                alt="workout"
                className="rounded-3xl h-[360px] sm:h-[420px] w-full object-cover border border-gray-800 -mt-10 hover:scale-105 transition duration-500 shadow-2xl"
              />

              {/* IMAGE 4 */}
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop"
                alt="trainer"
                className="rounded-3xl h-[260px] sm:h-[300px] w-full object-cover border border-gray-800 hover:scale-105 transition duration-500 shadow-2xl"
              />

            </div>

          </motion.div>

        </div>

      </section>

      <section className="py-20 px-6 lg:px-20 bg-black text-white">

<div className="text-center mb-16">
  <h1 className="text-5xl font-black">
    Elite <span className="text-red-500">Trainers</span>
  </h1>
  <p className="text-gray-400 mt-5 text-lg">
    Train with professional fitness coaches.
  </p>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

  {trainers?.map((items) => (
    <div
      key={items._id}
      className="bg-[#111] border border-gray-800 rounded-3xl overflow-hidden hover:border-red-500 transition"
    >

      <img
        src={items.profilePic}
        alt={items.name}
        className="h-[250px] sm:h-[300px] lg:h-[350px] w-full object-cover"
      />

      <div className="p-6">

        <h2 className="text-2xl font-bold">
          {items.name}
        </h2>

        <p className="text-red-500 mt-2">
          {items.specialization}
        </p>

        <p className="text-gray-400 mt-4">
          {items.description}
        </p>

        <div className="flex justify-between mt-6">
          <span>{items.experience} Years</span>
          <span className="text-red-500 font-bold">
            ₹ {items.price}
          </span>
        </div>

        <button
          onClick={() => setSelectedTrainer(items)}
          className="w-full mt-6 bg-red-500 hover:bg-red-600 py-4 rounded-2xl"
        >
          Book Session
        </button>

      </div>

    </div>
  ))}
</div>
</section>
{/* MODAL */}
{selectedTrainer && (

<div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-6">

<div className="bg-[#111] border border-gray-800 rounded-[25px] overflow-y-auto max-h-[90vh] max-w-5xl w-full grid lg:grid-cols-2 shadow-2xl">

    {/* LEFT IMAGE */}
    <div className="relative">

      <img
        src={selectedTrainer.profilePic}
        alt={selectedTrainer.name}
        className="h-[300px] lg:h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

    </div>

    {/* RIGHT CONTENT */}
   <div className="p-5 sm:p-8 lg:p-10 flex flex-col justify-center">

   <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
        {selectedTrainer.name}
      </h2>

      <p className="text-red-500 text-xl mt-3 font-semibold">
        {selectedTrainer.specialization}
      </p>

      <p className="text-gray-400 leading-8 mt-8">
        {selectedTrainer.description}
      </p>

      {/* DETAILS */}
      <div className="space-y-5 mt-10">

        {/* EXPERIENCE */}
        <div className="bg-black border border-gray-800 rounded-2xl p-5 flex items-center justify-between">

          <p className="text-gray-400">
            Experience
          </p>

          <p className="text-xl font-bold text-white">
            {selectedTrainer.experience} Years
          </p>

        </div>

        {/* PRICE */}
        <div className="bg-black border border-gray-800 rounded-2xl p-5 flex items-center justify-between">

          <p className="text-gray-400">
            Monthly Fee
          </p>

          <p className="text-2xl font-black text-red-500">
            ₹ {selectedTrainer.price}
          </p>

        </div>

      </div>

      {/* PAYMENT BUTTON */}
      <button
        onClick={() =>
          navigate("/payment", {
            state: {
              trainer: selectedTrainer,
            },
          })
        }
        className="w-full mt-10 bg-red-500 hover:bg-red-600 py-5 rounded-2xl text-lg font-semibold transition duration-300 shadow-lg shadow-red-500/30"
      >

        Proceed Payment

      </button>

      {/* CLOSE BUTTON */}
      <button
        onClick={() => setSelectedTrainer(null)}
        className="w-full mt-5 border border-gray-700 hover:border-red-500 py-4 rounded-2xl transition duration-300 text-white"
      >

        Close

      </button>

    </div>

  </div>

</div>

)}

      {/* WORKOUT PROGRAMS */}
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
            ].map((program, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-3xl border border-gray-800 group"
              >

                <img
                  src={program.image}
                  alt={program.title}
                  className="h-[400px] w-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                <div className="absolute bottom-0 p-6">

                  <h3 className="text-3xl font-bold">
                    {program.title}
                  </h3>

                  <button onClick={()=>navigate('/workout')} className="mt-4 bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl transition duration-300">
                    Start Program
                  </button>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* FITNESS REELS SECTION */}
      <section className="py-22 px-6 lg:px-20">

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

            <button
              onClick={() => navigate("/gallery")}
              className="border border-gray-700 hover:border-red-500 px-6 py-3 rounded-2xl transition duration-300"
            >

              View More

            </button>

          </div> 



          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

  {[
    "https://www.youtube.com/embed/ml6cT4AZdqI", // HIIT
    "https://www.youtube.com/embed/SwYN7mTi6HM", // Leg
    "https://www.youtube.com/embed/1919eTCoESo", // Abs
    "https://www.youtube.com/embed/U0bhE67HuDY", // Muscle Gain
  ].map((video, index) => (

    <motion.div
      key={index}
      whileHover={{ scale: 1.04 }}
      className="relative overflow-hidden rounded-3xl border border-gray-800 group cursor-pointer h-[350px] sm:h-[450px] lg:h-[500px]"
    >

      <iframe
        src={video}
        title={`Workout Reel ${index}`}
        className="w-full h-full object-cover"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"></div>

      <div className="absolute bottom-0 p-5 w-full pointer-events-none">

        <div className="flex items-center justify-between">

          <div>

            <h3 className="font-bold text-xl text-white">
              Workout Reel
            </h3>

            <p className="text-gray-300 text-sm mt-1">
              25K Views
            </p>

          </div>

        </div>

      </div>

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
          className="max-w-6xl mx-auto bg-gradient-to-r from-red-500/20 to-black border border-red-500/30 rounded-[25px] lg:rounded-[40px] p-6 sm:p-10 lg:p-14 text-center"
        >

<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">

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
        <About />
      </section>

    </div>
  )
}

export default Home