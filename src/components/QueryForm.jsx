import { useState } from 'react';
import axios from 'axios';

export default function QueryForm() {
  const [formData, setFormData] = useState({
    username: '', // Matches the schema
    number: '',
    query: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Assuming your backend runs on port 3000 as per your index.js
      await axios.post('http://localhost:3000/api/query', formData);
      setStatus('Message sent successfully!');
      setFormData({ username: '', number: '', query: '' }); // Reset form
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <>
      <h1 className="mb-6 text-center text-5xl">Ask question</h1>
      <div className="QueryForm mx-auto max-w-2xl rounded-2xl border border-gray-100 bg-white/80 p-6 shadow-md backdrop-blur-sm">
        {status && (
          <p className="mb-4 text-center font-semibold text-blue-600">
            {status}
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <label htmlFor="username" className="flex flex-col text-sm">
              <span className="mb-2 text-slate-800">Name</span>
              <input
                id="username"
                name="username" // Changed from 'name' to 'username' to match schema
                value={formData.username}
                onChange={handleChange}
                type="text"
                placeholder="Full name"
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 placeholder-slate-300 transition focus:ring-2 focus:ring-indigo-300 focus:outline-none"
              />
            </label>

            <label htmlFor="number" className="flex flex-col text-sm">
              <span className="mb-2 text-slate-800">Number</span>
              <input
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                type="tel"
                placeholder="+1 555 555 5555"
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 placeholder-slate-300 transition focus:ring-2 focus:ring-indigo-300 focus:outline-none"
              />
            </label>
          </div>

          <label htmlFor="query" className="flex flex-col text-sm">
            <span className="mb-2 text-slate-800">Query</span>
            <textarea
              id="query"
              name="query"
              value={formData.query}
              onChange={handleChange}
              placeholder="Write your message..."
              className="min-h-30 w-full resize-y rounded-lg border border-gray-200 bg-white px-4 py-3 placeholder-slate-300 transition focus:ring-2 focus:ring-indigo-300 focus:outline-none"
            />
          </label>
          <button
            type="submit"
            className="mx-auto w-fit rounded-3xl border-2 p-2 font-bold text-slate-700 transition hover:bg-slate-100"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
