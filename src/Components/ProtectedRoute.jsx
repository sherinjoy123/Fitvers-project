import { Navigate } from "react-router-dom";

export const UserRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/login" replace />;
  return children;
};

export const TrainerRoute = ({ children }) => {
  const token = localStorage.getItem("trainerToken");
  if (!token) return <Navigate to="/trainer-login" replace />;
  return children;
};

export const AdminRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");
  if (!token) return <Navigate to="/admin/login" replace />;
  return children;
};
