import { Link } from "react-router-dom"
import {
  LayoutDashboard,
  FilePlus,
  Users,
  LogOut,
} from "lucide-react"
import { useNavigate } from "react-router-dom"

const AdminSidebar = () => {

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("admin");
    navigate("/admin/login");
  };
  return (
    <div className="w-64 bg-black text-white p-5">

      <h1 className="text-2xl font-bold mb-10">
        Admin Panel
      </h1>

      <div className="flex flex-col gap-5">

        <Link
          to="/admin/"
          className="flex items-center gap-3 hover:text-yellow-400"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          to="/admin/create-post"
          className="flex items-center gap-3 hover:text-yellow-400"
        >
          <FilePlus size={20} />
          Create Post
        </Link>

        <Link
          to="/admin/manage-post"
          className="flex items-center gap-3 hover:text-yellow-400"
        >
          <Users size={20} />
          Manage posts
        </Link>

        <Link
          to="/admin/manage-users"
          className="flex items-center gap-3 hover:text-yellow-400"
        >
          <Users size={20} />
          Manage Users
        </Link>

        <Link
          to="/admin/create-trainer"
          className="flex items-center gap-3 hover:text-yellow-400"
        >
          <Users size={20} />
          Create Trainer
        </Link>

        <Link
          to="/admin/manage-trainer"
          className="flex items-center gap-3 hover:text-yellow-400"
        >
          <Users size={20} />
          Manage Trainer
        </Link>

        <Link
          to="/admin/create-workout"
          className="flex items-center gap-3 hover:text-yellow-400"
        >
          <Users size={20} />
        Create Wokout videos
        </Link>

        <Link
          to="/admin/manage-workout"
          className="flex items-center gap-3 hover:text-yellow-400"
        >
          <Users size={20} />
       Manage Workout
        </Link>


        <button onClick={handleLogout} className="flex items-center gap-3 mt-10 hover:text-red-500">
          <LogOut size={20} />
          Logout
        </button>

      </div>
    </div>
  )
}

export default AdminSidebar