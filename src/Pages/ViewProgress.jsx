import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TrainerProgress=()=> {
  const { userId } = useParams();
  const navigate = useNavigate();

  const [workouts, setWorkouts] = useState([]);

  const fetchProgress = async () => {
    try {
      const res = await API.get(
        `/api/tracks/user/${userId}`
      );

      setWorkouts(res.data.workouts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProgress();
  }, []);

  const completed = workouts.filter(
    (w) => w.status === "Completed"
  ).length;

  const pending = workouts.filter(
    (w) => w.status === "Pending"
  ).length;

  const progress =
    workouts.length > 0
      ? Math.round((completed / workouts.length) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">
        User Progress
      </h1>

      <div className="bg-zinc-900 p-5 rounded-xl mb-6">
        <p>Total Workouts: {workouts.length}</p>
        <p>Completed: {completed}</p>
        <p>Pending: {pending}</p>

        <div className="mt-4">
          <p>Progress: {progress}%</p>

          <div className="w-full bg-gray-700 h-4 rounded-full">
            <div
              className="bg-green-500 h-4 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {workouts.map((w) => (
          <div
            key={w._id}
            className="bg-zinc-900 p-4 rounded-xl"
          >
            <h3 className="text-lg font-semibold">
              {w.workoutName}
            </h3>

            <p className="text-gray-400">
              {w.description}
            </p>

            <p
              className={
                w.status === "Completed"
                  ? "text-green-500 mt-2"
                  : "text-yellow-500 mt-2"
              }
            >
              {w.status}
            </p>
          </div>
        ))}
      </div>
     <div className="p-2">
     <button
  onClick={() => navigate(-1)}
  className="flex  items-center gap-2 bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-xl mb-6"
>
  <ArrowLeft size={18} />
  Back
</button>
     </div>
    </div>
  );
}

export default TrainerProgress;