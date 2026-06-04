
import React from "react"
import { motion } from "framer-motion"
import { FaDumbbell } from "react-icons/fa"

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999] overflow-hidden">

      {/* RED GLOW */}
      <div className="absolute w-72 h-72 bg-red-500/20 blur-3xl rounded-full"></div>

      {/* ANIMATED DUMBBELL */}
      <motion.div
        animate={{
          rotate: [0, 10, -10, 10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="relative z-10"
      >
        <FaDumbbell className="text-red-500 text-7xl" />
      </motion.div>

      {/* TEXT */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-8 text-4xl md:text-6xl font-black tracking-widest"
      >
        FIT<span className="text-red-500">VERS</span>
      </motion.h1>

      {/* LOADING BAR */}
      <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mt-8">

        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-1/2 h-full bg-red-500 rounded-full"
        />

      </div>

      {/* LOADING TEXT */}
      <motion.p
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="text-gray-400 mt-6 tracking-[6px] uppercase text-sm"
      >
        Loading Workout Experience
      </motion.p>

    </div>
  )
}

export default Loader
