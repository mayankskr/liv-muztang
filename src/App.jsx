import { useState, useEffect } from 'react';
import axios from 'axios'; // 1. Import Axios
import Header from './components/Header';
import Main from './components/Main';

function App() {
  // 2. Create state to hold the data
  const [siteContent, setSiteContent] = useState(null);
  const [loading, setLoading] = useState(true);

  // 3. Fetch data on component mount
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/content');
      
      // FIX: Access response.data.data to get the actual content object
      // response.data = { success: true, data: {...} }
      // response.data.data = { headerPhoneButton: "...", ... }
      if (response.data && response.data.success) {
        setSiteContent(response.data.data); 
      }
      
      setLoading(false);
    } catch (error) {
      console.error("Error fetching content:", error);
      setLoading(false);
    }
  };

  fetchData();
}, []);

  // 4. Show a loading state so the UI doesn't break while fetching
  if (loading) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  return (
    <div className="max-w-screen">
      {/* 5. Pass specific data down as props */}
      {siteContent && (
        <>
          <Header phoneContent={siteContent.headerPhoneButton} />
          <Main content={siteContent} />
        </>
      )}
    </div>
  );
}

export default App;