import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AdminPanel() {
  const [formData, setFormData] = useState({
    headerPhoneButton: '',
    heroHeading: '',
    heroPara: '',
    infoHeading: '',
    infoPara: '',
    infoPoint1: '',
    infoPoint2: '',
    infoPoint3: '',
    infoPhoneButton: '',
    ingredientsHeading: '',
    ingredientsPoint1: '',
    ingredientsPoint2: '',
    ingredientsPoint3: '',
    ingredientsPoint4: '',
    ingredientsPhoneButton: '',
  });
  const [queryData, setQueryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState({ type: '', message: '' });

  // 1. Fetch existing data to populate fields
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/content');
        if (response.data && response.data.success) {
          setFormData(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setStatus({
          type: 'error',
          message: 'Failed to load current content.',
        });
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchQuery = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/query');
        if (response.data && response.data.success) {
          setQueryData(response.data.data); // Map to queryData
        }
      } catch (error) {
        console.error('Error fetching Query:', error);
      }
    };
    fetchQuery();
  }, []);
  const handleDeleteQuery = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/query/${id}`);
      // Remove it from the UI immediately without refreshing
      setQueryData(queryData.filter((q) => q._id !== id));
      setStatus({ type: 'success', message: 'Query resolved and removed!' });
      setTimeout(() => setStatus({ type: '', message: '' }), 3000);
    } catch (error) {
      console.error('Error deleting query:', error);
      setStatus({ type: 'error', message: 'Failed to delete query.' });
    }
  };

  // 2. Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 3. Submit Updates
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Updating...' });

    try {
      // Your backend controller (updateContentController) expects:
      // req.body = { data: filterCriteria, updateData: newData }
      // Your service uses: Content.findOneAndUpdate(data, updateData)

      const payload = {
        data: { _id: formData._id }, // Filter by ID
        updateData: formData, // Data to update
      };

      // The route is defined as /:id, so we pass the ID in the URL,
      // but the controller reads from the body as per your code.
      await axios.put(
        `http://localhost:3000/api/content/${formData._id}`,
        payload
      );

      setStatus({ type: 'success', message: 'Content updated successfully!' });

      // Clear success message after 3 seconds
      setTimeout(() => setStatus({ type: '', message: '' }), 3000);
    } catch (error) {
      console.error('Update error:', error);
      setStatus({ type: 'error', message: 'Failed to update content.' });
    }
  };

  if (loading)
    return <div className="p-10 text-center">Loading Admin Panel...</div>;

  return (
    <div className="mx-auto min-h-screen max-w-4xl bg-gray-50 p-6">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">
        Site Content Admin
      </h1>

      {/* Status Notification */}
      {status.message && (
        <div
          className={`mb-4 rounded p-4 ${
            status.type === 'success'
              ? 'bg-green-100 text-green-700'
              : status.type === 'error'
                ? 'bg-red-100 text-red-700'
                : 'bg-blue-100 text-blue-700'
          }`}
        >
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="rounded bg-white p-6 shadow-md">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Header Section */}
          <div className="col-span-full mb-2 border-b pb-2 font-semibold text-gray-500">
            Header & Hero
          </div>
          <InputGroup
            label="Header Phone Btn"
            name="headerPhoneButton"
            value={formData.headerPhoneButton}
            onChange={handleChange}
          />
          <InputGroup
            label="Hero Heading"
            name="heroHeading"
            value={formData.heroHeading}
            onChange={handleChange}
          />
          <InputGroup
            label="Hero Paragraph"
            name="heroPara"
            value={formData.heroPara}
            onChange={handleChange}
            fullWidth
          />

          {/* Info Section */}
          <div className="col-span-full mt-4 mb-2 border-b pb-2 font-semibold text-gray-500">
            Info Section
          </div>
          <InputGroup
            label="Info Heading"
            name="infoHeading"
            value={formData.infoHeading}
            onChange={handleChange}
            fullWidth
          />
          <InputGroup
            label="Info Paragraph"
            name="infoPara"
            value={formData.infoPara}
            onChange={handleChange}
            fullWidth
          />
          <InputGroup
            label="Info Point 1"
            name="infoPoint1"
            value={formData.infoPoint1}
            onChange={handleChange}
          />
          <InputGroup
            label="Info Point 2"
            name="infoPoint2"
            value={formData.infoPoint2}
            onChange={handleChange}
          />
          <InputGroup
            label="Info Point 3"
            name="infoPoint3"
            value={formData.infoPoint3}
            onChange={handleChange}
          />
          <InputGroup
            label="Info Phone Btn"
            name="infoPhoneButton"
            value={formData.infoPhoneButton}
            onChange={handleChange}
          />

          {/* Ingredients Section */}
          <div className="col-span-full mt-4 mb-2 border-b pb-2 font-semibold text-gray-500">
            Ingredients Section
          </div>
          <InputGroup
            label="Ingredients Heading"
            name="ingredientsHeading"
            value={formData.ingredientsHeading}
            onChange={handleChange}
            fullWidth
          />
          <InputGroup
            label="Ingredient 1"
            name="ingredientsPoint1"
            value={formData.ingredientsPoint1}
            onChange={handleChange}
          />
          <InputGroup
            label="Ingredient 2"
            name="ingredientsPoint2"
            value={formData.ingredientsPoint2}
            onChange={handleChange}
          />
          <InputGroup
            label="Ingredient 3"
            name="ingredientsPoint3"
            value={formData.ingredientsPoint3}
            onChange={handleChange}
          />
          <InputGroup
            label="Ingredient 4"
            name="ingredientsPoint4"
            value={formData.ingredientsPoint4}
            onChange={handleChange}
          />
          <InputGroup
            label="Ingr. Phone Btn"
            name="ingredientsPhoneButton"
            value={formData.ingredientsPhoneButton}
            onChange={handleChange}
          />
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="w-full rounded bg-blue-600 px-4 py-3 font-bold text-white transition duration-200 hover:bg-blue-700"
          >
            Update Website Content
          </button>
        </div>
      </form>
      <hr />
      <hr />
      {/* NEW: Queries Display Section */}
      <h2 className="mb-6 text-2xl font-bold text-gray-800">User Queries</h2>
      {queryData.length === 0 ? (
        <p className="text-gray-500">No pending queries.</p>
      ) : (
        <div className="grid gap-4">
          {queryData.map((q) => (
            <div
              key={q._id}
              className="flex items-start justify-between rounded border-l-4 border-blue-500 bg-white p-4 shadow"
            >
              <div>
                <h3 className="text-lg font-bold">{q.username}</h3>
                <p className="mb-2 text-sm text-gray-500">{q.number}</p>
                <p className="text-gray-700">{q.query}</p>
              </div>
              <button
                onClick={() => handleDeleteQuery(q._id)}
                className="rounded bg-green-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-600"
              >
                Resolve & Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Helper Component for cleaner code
function InputGroup({ label, name, value, onChange, fullWidth }) {
  return (
    <div className={fullWidth ? 'col-span-full' : ''}>
      <label
        htmlFor={name}
        className="mb-1 block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value || ''}
        onChange={onChange}
        className="w-full rounded border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
  );
}
