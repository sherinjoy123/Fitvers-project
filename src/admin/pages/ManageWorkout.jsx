import { useEffect, useState } from "react";
import adminAPI from "../../services/adminApi";
import { mediaUrl } from "../../services/config";

const ManageWorkout = () => {
  const [workouts, setWorkouts] = useState([]);

  const fetchWorkouts = async () => {
    try {
      const res = await adminAPI.get("/api/workouts/getAll");
      setWorkouts(res.data.workouts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const deleteWorkout = async (id) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this workout?"
      );

      if (!confirmDelete) return;

      await adminAPI.delete(`/api/workouts/delete/${id}`);
      alert("Workout deleted");
      fetchWorkouts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Manage Workouts</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workouts?.map((workout) => (
          <div key={workout._id} className="bg-white rounded-xl shadow overflow-hidden">
            <video
              src={mediaUrl(workout.videoUrl)}
              className="w-full h-48 object-cover"
              controls
            />
            <div className="p-4">
              <h2 className="font-bold">{workout.title}</h2>
              <p className="text-gray-500 text-sm">{workout.category}</p>
              <button
                onClick={() => deleteWorkout(workout._id)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageWorkout;
