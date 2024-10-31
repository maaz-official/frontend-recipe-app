import React, { useState } from 'react';
import { useAddTagMutation } from '../slices/tagSlice';

function CreateTag() {
  const [name, setName] = useState(''); // State to hold tag name input
  const [message, setMessage] = useState(null); // Success message
  const [error, setError] = useState(null); // Error message

  // Hook for the addTag mutation
  const [addTag, { isLoading }] = useAddTagMutation();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    try {
      // Attempt to add the tag
      const response = await addTag({ name }).unwrap();
      setMessage(`Tag "${response.tag.name}" created successfully!`);
      setName(''); // Clear the input field
    } catch (err) {
      // Capture any error
      setError(err.data?.message || 'Failed to create tag');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Create a New Tag</h2>

      {/* Display success or error message */}
      {message && <div className="text-green-600 mb-4 text-center">{message}</div>}
      {error && <div className="text-red-600 mb-4 text-center">{error}</div>}

      {/* Tag creation form */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Tag Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter tag name"
          />
        </div>
        <button
          type="submit"
          className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ${
            isLoading ? 'cursor-not-allowed opacity-70' : ''
          }`}
          disabled={isLoading} // Disable button while loading
        >
          {isLoading ? 'Creating...' : 'Create Tag'}
        </button>
      </form>
    </div>
  );
}

export default CreateTag;
