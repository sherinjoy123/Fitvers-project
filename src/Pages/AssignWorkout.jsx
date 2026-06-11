import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";

const AssignWorkout = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const [workouts, setWorkouts] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState("");

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = async () => {
    try {
      const res = await API.get("/api/workouts/getAll");
      setWorkouts(res.data.workouts || []);
    } catch (error) {
      console.log(error);
    }
  };

  const assignWorkout = async () => {
    const trainer = JSON.parse(localStorage.getItem("trainer"));
    const trainerId = trainer._id;

    const workout = workouts.find((w) => w._id === selectedWorkout);

    if (!workout) {
      alert("Please select a workout");
      return;
    }

    await API.post("/api/tracks/assign", {
      trainerId,
      userId,
      workoutName: workout.title,
      description: workout.description,
      status: "Pending",
    });

    alert("Workout Assigned");
    navigate("/trainer-dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-6">

      <div className="w-full max-w-xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-8 text-white">

        {/* Header */}
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Assign Workout
        </h2>

        <p className="text-center text-gray-300 mt-2 mb-6">
          Select a workout plan for your client
        </p>

        {/* Dropdown */}
        <div className="mb-6">
          <label className="block text-gray-300 mb-2 font-medium">
            Choose Workout
          </label>

          <select
            value={selectedWorkout}
            onChange={(e) => setSelectedWorkout(e.target.value)}
            className="w-full p-3 rounded-xl bg-black/40 border border-gray-600 focus:ring-2 focus:ring-purple-500 outline-none"
          >
            <option value="">Select Workout</option>

            {workouts.map((w) => (
              <option key={w._id} value={w._id}>
                {w.title}
              </option>
            ))}
          </select>
        </div>

        {/* Selected Workout Card */}
        {selectedWorkout && (
          <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10">
            <p className="text-sm text-gray-300">Selected Workout</p>
            <h3 className="text-lg font-semibold text-white mt-1">
              {workouts.find((w) => w._id === selectedWorkout)?.title}
            </h3>
          </div>
        )}

        {/* Buttons */}
        <button
          onClick={assignWorkout}
          className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition"
        >
          Assign Workout
        </button>

        <button
          onClick={() => navigate("/trainer-dashboard")}
          className="w-full mt-3 py-3 rounded-xl border border-gray-500 text-gray-300 hover:bg-white/10 transition"
        >
          ← Back to Dashboard
        </button>

      </div>
    </div>
  );
};

export default AssignWorkout;