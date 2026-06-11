import React, { useEffect, useState } from "react";
import API from "../services/api";

const MyWorkouts=()=> {
  const [workouts, setWorkouts] = useState([]);

  const user = JSON.parse(localStorage.getItem("user") || "null");

  const fetchWorkouts = async () => {
    if (!user?._id) return;
    try {
      const res = await API.get(
        `/api/tracks/user/${user._id}`
      );

      if (res.data.success) {
        setWorkouts(res.data.workouts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const completeWorkout = async (id) => {
    try {
      await API.put(`/api/tracks/complete/${id}`);

      fetchWorkouts();
    } catch (error) {
      console.log(error);
    }
  };

  const completedCount = workouts.filter(
    (w) => w.status === "Completed"
  ).length;

  const progress =
    workouts.length > 0
      ? Math.round((completedCount / workouts.length) * 100)
      : 0;

  return (
    <div className="p-6 min-h-screen bg-black text-white">
      <h1 className="text-3xl font-bold mb-6">
        My Workouts
      </h1>

      {/* Progress */}
      <div className="mb-6">
        <p className="mb-2">
          Progress: {progress}%
        </p>

        <div className="w-full bg-gray-700 rounded-full h-4">
          <div
            className="bg-green-500 h-4 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Workouts */}
      <div className="grid gap-4">
        {workouts.map((workout) => (
          <div
            key={workout._id}
            className="bg-zinc-900 p-4 rounded-xl"
          >
            <h2 className="text-xl font-semibold">
              {workout.workoutName}
            </h2>

            <p className="text-gray-400 mt-2">
              {workout.description}
            </p>

            <p className="mt-2">
              Status:
              <span
                className={
                  workout.status === "Completed"
                    ? "text-green-500 ml-2"
                    : "text-yellow-500 ml-2"
                }
              >
                {workout.status}
              </span>
            </p>

            {workout.status !== "Completed" && (
              <button
                onClick={() =>
                  completeWorkout(workout._id)
                }
                className="mt-3 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg"
              >
                Mark Complete
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyWorkouts;