export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

console.log(API_URL);
console.log(import.meta.env.VITE_API_URL);
export const SOCKET_URL =
  import.meta.env.VITE_SOCKET_URL || import.meta.env.VITE_API_URL || "http://localhost:4000";

export const mediaUrl = (path) => {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${API_URL}/${path.replace(/^\//, "")}`;
};
