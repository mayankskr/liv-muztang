import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

// Components
import Header from './components/Header';
import Main from './components/Main';
import AdminPanel from './admin/AdminPanel';
import ProtectedRoute from './components/ProtectedRoute'; // Import the guard

function App() {
  const [siteContent, setSiteContent] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch data for the public home page
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/content');
        if (response.data && response.data.success) {
          setSiteContent(response.data.data);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching content:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="mt-20 text-center">Loading...</div>;

  return (
    <BrowserRouter>
      {/* Optional: Navigation Bar */}
      <nav className="flex justify-between bg-gray-800 p-4 text-white">
        <Link to="/" className="text-xl font-bold hover:text-gray-300">
          My Website
        </Link>
        <Link
          to="/admin"
          className="rounded bg-blue-600 px-3 py-1 text-sm hover:bg-blue-500"
        >
          Admin Login
        </Link>
      </nav>

      <Routes>
        {/* Route 1: Public Home Page */}
        <Route
          path="/"
          element={
            siteContent ? (
              <>
                <Header phoneContent={siteContent.headerPhoneButton} />
                <Main content={siteContent} />
              </>
            ) : (
              <div>No content available</div>
            )
          }
        />

        {/* Route 2: Protected Admin Panel */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminPanel />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
