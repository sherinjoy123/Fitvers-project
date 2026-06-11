import { useEffect, useState } from "react";
import adminAPI from "../../services/adminApi";

const Dashboard = () => {
  const [stats, setStats] = useState({});

  const fetchStats = async () => {
    try {
      const response = await adminAPI.get("/api/admin/dashboard-stats");
      setStats(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <div className="text-center grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Total Posts</h2>
          <p className="text-3xl mt-4 font-bold text-blue-600">{stats.totalPost}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Total Users</h2>
          <p className="text-3xl mt-4 font-bold text-green-600">{stats.totalUser}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Total Trainer</h2>
          <p className="text-3xl mt-4 font-bold text-green-600">{stats.totalTrainer}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
