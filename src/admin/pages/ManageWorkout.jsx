import React, { useEffect, useState } from "react";
import API from "../../services/api";

const ManageWorkout = () => {
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

  const deleteWorkout = async (id) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this workout?"
      );

      if (!confirmDelete) return;

      await API.delete(`/api/workouts/delete/${id}`);

      setWorkouts((prev) =>
        prev.filter((workout) => workout._id !== id)
      );

      alert("Workout deleted successfully");
    } catch (error) {
      console.log(error);
      alert("Delete failed");
    }
  };

  return (
    <div className="min-h-screen bg-black p-6">
      <h1 className="text-3xl text-white font-bold mb-6">
        Workout Videos
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workouts.map((workout) => (
          <div
            key={workout._id}
            className="bg-zinc-900 rounded-xl p-4"
          >
            <video controls className="w-full rounded-lg">
              <source
                src={`http://localhost:4000/${workout.videoUrl}`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            <h2 className="text-white text-xl font-semibold mt-3">
              {workout.title}
            </h2>

            <p className="text-gray-400">{workout.category}</p>

            <p className="text-gray-300 mt-2">
              {workout.description}
            </p>

            <button
              onClick={() => deleteWorkout(workout._id)}
              className="mt-3 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageWorkout;