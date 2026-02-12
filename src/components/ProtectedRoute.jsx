import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  // Hardcoded password for simplicity (In production, use a real backend auth system)
  const ADMIN_PASSWORD = "admin123"; 

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect Password!");
    }
  };

  if (isAuthenticated) {
    return children; // Render the Admin Panel if logged in
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Access</h2>
        <form onSubmit={handleLogin}>
          <input
            type="password"
            placeholder="Enter Admin Password"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}