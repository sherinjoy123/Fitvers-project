import React, { useEffect, useState } from "react";
import API from "../services/api";
import { motion } from "framer-motion";

const WorkoutPrograms = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = async () => {
    try {
      const res = await API.get("/api/workouts/getAll");
      setWorkouts(res.data.workouts);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="px-6 lg:px-20 pt-32 pb-16 text-center">
        <h1 className="text-5xl lg:text-7xl font-black">
          Workout <span className="text-red-500">Programs</span>
        </h1>

        <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
          Explore professional workout videos uploaded by trainers and improve
          your fitness journey.
        </p>
      </section>

      {/* WORKOUTS */}
      <section className="px-6 lg:px-20 pb-20">

        {workouts.length === 0 ? (
          <div className="text-center text-gray-400">
            No workouts available
          </div>
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {workouts.map((workout) => (
              <motion.div
                key={workout._id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-red-500"
              >

                {/* VIDEO */}
                <video
                  controls
                  className="w-full h-[250px] object-cover"
                >
                  <source
                    src={`http://localhost:4000/${workout.videoUrl}`}
                    type="video/mp4"
                  />
                </video>

                {/* CONTENT */}
                <div className="p-5">

                  <h2 className="text-2xl font-bold">
                    {workout.title}
                  </h2>

                  <p className="text-red-500 mt-2">
                    {workout.category}
                  </p>

                  <p className="text-gray-400 mt-4">
                    {workout.description}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>
        )}

      </section>
    </div>
  );
};

export default WorkoutPrograms;