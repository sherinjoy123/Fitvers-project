import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Explore from "./Pages/Explore";
import Trainer from "./Pages/Trainer";
import Workout from "./Pages/Workout";
import Gallery from "./Pages/Gallery";
import Payment from "./Pages/Payment";
import Layout from "./Components/Layout";
import Loader from "./Components/Loader";
import WorkoutPrograms from "./Pages/WorkoutPrograms";
import VideoCall from "./Pages/VideoCall";
import Chat from "./Pages/Chat";
import Profile from "./Pages/Profile";
import ProfileEdit from "./Pages/ProfileEdit";
import AdminRoutes from "./admin/routes/AdminRoutes";
import FetchBooking from "./Pages/FetchBooking";
import TrainerLogin from "./Pages/TrainerLogin";
import TrainerDashboard from "./Pages/TrainerDashboard";
import TrainerChat from "./Pages/TrainerChat";
import MyWorkouts from "./Pages/MyWorkouts";
import AssignWorkout from "./Pages/AssignWorkout";
import ViewProgress from "./Pages/ViewProgress";
import { UserRoute, TrainerRoute } from "./Components/ProtectedRoute";

const PageContent = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      {children}
    </>
  );
};

const PageLoader = ({ children }) => {
  const location = useLocation();
  return <PageContent key={location.pathname}>{children}</PageContent>;
};

const App = () => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  return (
    <PageLoader>
      <Routes>
        <Route element={<Layout user={user} setUser={setUser} />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/explore" element={<Explore />} />
          <Route
            path="/trainers"
            element={
              <UserRoute>
                <Trainer />
              </UserRoute>
            }
          />
          <Route path="/workout" element={<Workout />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route
            path="/payment"
            element={
              <UserRoute>
                <Payment />
              </UserRoute>
            }
          />
          <Route path="/workoutprograms" element={<WorkoutPrograms />} />
          <Route path="/videocall" element={<VideoCall />} />
          <Route
            path="/fetchBooking"
            element={
              <UserRoute>
                <FetchBooking />
              </UserRoute>
            }
          />
          <Route
            path="/my-workouts"
            element={
              <UserRoute>
                <MyWorkouts />
              </UserRoute>
            }
          />
          <Route
            path="/profile"
            element={<Profile user={user} setUser={setUser} />}
          />
          <Route
            path="/profileEdit"
            element={
              <UserRoute>
                <ProfileEdit user={user} setUser={setUser} />
              </UserRoute>
            }
          />
        </Route>

        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/trainer-login" element={<TrainerLogin />} />
        <Route
          path="/trainer-dashboard"
          element={
            <TrainerRoute>
              <TrainerDashboard />
            </TrainerRoute>
          }
        />
        <Route
          path="/chat/:userId"
          element={
            <TrainerRoute>
              <TrainerChat />
            </TrainerRoute>
          }
        />
        <Route
          path="/chat"
          element={
            <UserRoute>
              <Chat />
            </UserRoute>
          }
        />
        <Route path="/admin-login" element={<Navigate to="/admin/login" replace />} />
        <Route
          path="/assign-workout/:userId"
          element={
            <TrainerRoute>
              <AssignWorkout />
            </TrainerRoute>
          }
        />
        <Route
          path="/progress/:userId"
          element={
            <TrainerRoute>
              <ViewProgress />
            </TrainerRoute>
          }
        />
      </Routes>
    </PageLoader>
  );
};

export default App;
