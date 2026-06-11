import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaSearch,
  FaPlay,
  FaFire,
  FaStar,
  FaUsers,
} from "react-icons/fa"

const Explore = () => {
  const navigate = useNavigate();

  const categories = [
    "Muscle Gain",
    "Fat Loss",
    "HIIT",
    "Yoga",
    "CrossFit",
    "Cardio",
    "Home Workout",
  ]

  const workouts = [
    {
      title: "Chest Workout",
      image:
        "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
      duration: "45 Min",
      calories: "320 Cal",
    },

    {
      title: "Fat Burn",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
      duration: "30 Min",
      calories: "250 Cal",
    },

    {
      title: "HIIT Session",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
      duration: "20 Min",
      calories: "410 Cal",
    },

    {
      title: "Strength Builder",
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop",
      duration: "60 Min",
      calories: "520 Cal",
    },
  ]

  const trainers = [
    {
      name: "Alex Carter",
      role: "Strength Coach",
      image:
        "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1200&auto=format&fit=crop",
    },

    {
      name: "Sophia Williams",
      role: "Yoga Trainer",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
    },

    {
      name: "Michael Brooks",
      role: "Bodybuilding Coach",
      image:
        "https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=1200&auto=format&fit=crop",
    },
  ]

  const reels = [
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
  ]

  return (
    <div className="bg-black text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative py-32 px-6 lg:px-20 overflow-hidden">

        <div className="absolute top-10 left-10 w-96 h-96 bg-red-500/20 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

              Discover Your

              <span className="text-red-500"> Fitness Journey</span>

            </h1>

            <p className="text-gray-400 text-lg mt-8 max-w-3xl mx-auto leading-8">
              Explore trainers, workout programs, transformation reels,
              and fitness communities from around the world.
            </p>

          </motion.div>

          {/* SEARCH BAR */}
          <div className="max-w-3xl mx-auto mt-14">

            <div className="bg-[#111] border border-gray-800 rounded-2xl flex items-center px-6 py-5">

              <FaSearch className="text-gray-500 text-xl" />

              <input
                type="text"
                placeholder="Search trainers, workouts, reels..."
                className="bg-transparent w-full outline-none px-4 text-lg"
              />

            </div>

          </div>

        </div>

      </section>

      {/* CATEGORY FILTERS */}
      <section className="px-6 lg:px-20">

        <div className="max-w-7xl mx-auto flex flex-wrap gap-5">

          {categories.map((category, index) => (

            <button
              key={index}
              className="bg-[#111] border border-gray-800 hover:border-red-500 hover:bg-red-500/10 px-7 py-3 rounded-full transition duration-300"
            >
              {category}
            </button>

          ))}

        </div>

      </section>

      {/* TRENDING WORKOUTS */}
      <section className="py-28 px-6 lg:px-20">

        <div className="max-w-7xl mx-auto">

          <div className="flex items-center justify-between flex-wrap gap-5 mb-16">

            <div>

              <h2 className="text-5xl font-bold">

                Trending

                <span className="text-red-500"> Workouts</span>

              </h2>

              <p className="text-gray-400 mt-4 text-lg">
                Popular workout programs designed for every fitness level.
              </p>

            </div>

            <button className="border border-gray-700 hover:border-red-500 px-6 py-3 rounded-2xl transition duration-300">
              View All
            </button>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {workouts.map((workout, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-3xl border border-gray-800 group"
              >

                <img
                  src={workout.image}
                  alt="workout"
                  className="h-[420px] w-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                <div className="absolute bottom-0 p-6">

                  <div className="flex items-center gap-2 text-red-500 mb-3">
                    <FaFire />
                    Trending
                  </div>

                  <h3 className="text-3xl font-bold">
                    {workout.title}
                  </h3>

                  <div className="flex gap-5 mt-4 text-gray-300">

                    <p>{workout.duration}</p>

                    <p>{workout.calories}</p>

                  </div>

                  <button className="mt-6 bg-red-500 hover:bg-red-600 px-5 py-3 rounded-xl transition duration-300">
                    Start Workout
                  </button>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* FITNESS REELS */}
      <section className="py-28 px-6 lg:px-20 bg-[#0a0a0a]">

        <div className="max-w-7xl mx-auto">

          <div className="mb-16">

            <h2 className="text-5xl font-bold">

              Fitness

              <span className="text-red-500"> Reels</span>

            </h2>

            <p className="text-gray-400 mt-4 text-lg">
              Explore trending transformation and workout videos.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {reels.map((reel, index) => (

              <motion.div
                key={index}
                whileHover={{ scale: 1.04 }}
                className="relative overflow-hidden rounded-3xl border border-gray-800 group cursor-pointer"
              >

                <img
                  src={reel}
                  alt="reel"
                  className="h-[500px] w-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>

                <div className="absolute bottom-0 w-full p-5 flex items-center justify-between">

                  <div>

                    <h3 className="font-bold text-xl">
                      Workout Reel
                    </h3>

                    <p className="text-gray-300 text-sm mt-1">
                      25K Views
                    </p>

                  </div>

                  <button className="bg-red-500 w-14 h-14 rounded-full flex items-center justify-center text-xl shadow-lg shadow-red-500/40">
                    <FaPlay />
                  </button>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* TRAINERS */}
      <section className="py-28 px-6 lg:px-20">

        <div className="max-w-7xl mx-auto">

          <div className="mb-16">

            <h2 className="text-5xl font-bold">

              Elite

              <span className="text-red-500"> Trainers</span>

            </h2>

            <p className="text-gray-400 mt-4 text-lg">
              Train with top fitness professionals and transformation experts.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {trainers.map((trainer, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-[#111] border border-gray-800 rounded-3xl overflow-hidden hover:border-red-500 transition duration-300"
              >

                <img
                  src={trainer.image}
                  alt="trainer"
                  className="h-[380px] w-full object-cover"
                />

                <div className="p-6">

                  <div className="flex items-center justify-between">

                    <div>

                      <h3 className="text-2xl font-bold">
                        {trainer.name}
                      </h3>

                      <p className="text-red-500 mt-2">
                        {trainer.role}
                      </p>

                    </div>

                    <div className="flex items-center gap-2 text-yellow-400">
                      <FaStar />
                      4.9
                    </div>

                  </div>

                  <p className="text-gray-400 leading-7 mt-5">
                    Certified fitness coach helping clients achieve incredible transformations.
                  </p>

                  <button
                    onClick={() => navigate("/trainers")}
                    className="w-full mt-6 bg-red-500 hover:bg-red-600 py-4 rounded-2xl font-semibold transition duration-300"
                  >
                    Book Session
                  </button>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* COMMUNITY SECTION */}
      <section className="py-28 px-6 lg:px-20 bg-[#0a0a0a]">

        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-500/20 to-black border border-red-500/30 rounded-[40px] p-14 text-center"
          >

            <div className="flex justify-center mb-8">

              <div className="bg-red-500 w-20 h-20 rounded-full flex items-center justify-center text-4xl shadow-lg shadow-red-500/30">
                <FaUsers />
              </div>

            </div>

            <h2 className="text-5xl font-bold leading-tight">

              Join The Largest

              <span className="text-red-500"> Fitness Community</span>

            </h2>

            <p className="text-gray-400 text-lg mt-8 max-w-3xl mx-auto leading-8">
              Connect with fitness enthusiasts, share transformations,
              join fitness challenges, and stay motivated together.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-12">

              <button className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-2xl text-lg font-semibold transition duration-300 shadow-lg shadow-red-500/30">
                Join Community
              </button>

              <button className="border border-gray-700 hover:border-red-500 px-8 py-4 rounded-2xl transition duration-300">
                Explore Groups
              </button>

            </div>

          </motion.div>

        </div>

      </section>

    </div>
  )
}

export default Explore