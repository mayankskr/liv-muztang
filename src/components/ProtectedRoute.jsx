import { useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  // Hardcoded password for simplicity (In production, use a real backend auth system)
  const ADMIN_PASSWORD = 'admin123';

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect Password!');
    }
  };

  if (isAuthenticated) {
    return children; // Render the Admin Panel if logged in
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
      <div className="w-96 rounded bg-white p-8 shadow-md">
        <h2 className="mb-4 text-center text-2xl font-bold">Admin Access</h2>
        <form onSubmit={handleLogin}>
          <input
            type="password"
            placeholder="Enter Admin Password"
            className="mb-4 w-full rounded border border-gray-300 p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full rounded bg-blue-600 p-2 text-white transition hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
