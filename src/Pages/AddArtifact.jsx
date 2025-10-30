import { useState } from 'react';
import { useNavigate } from 'react-router';

const AddArtifact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    imageURL: '',
    type: 'Tools',
    createdAt: '',
    discoveredAt: '',
    discoveredBy: '',
    presentLocation: '',
    historicalContext: ''
  });

  // Mock user data - in a real app, this would come from auth context
  const currentUser = {
    name: 'Jane Doe',
    email: 'jane@example.com'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Add Artifact:', formData);
    navigate('/my-artifacts');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-slate-800 mb-8">Add New Artifact</h2>
      <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Artifact Name</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required 
            className="mt-1 w-full rounded-lg border-gray-300 focus:border-amber-500 focus:ring-amber-500 px-4 py-2 border"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Image URL</label>
          <input 
            type="url" 
            name="imageURL"
            value={formData.imageURL}
            onChange={handleChange}
            required 
            placeholder="https://i.ibb.co/xxxx/artifact.jpg" 
            className="mt-1 w-full rounded-lg border-gray-300 focus:border-amber-500 focus:ring-amber-500 px-4 py-2 border"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Type</label>
          <select 
            name="type"
            value={formData.type}
            onChange={handleChange}
            required 
            className="mt-1 w-full rounded-lg border-gray-300 focus:border-amber-500 focus:ring-amber-500 px-4 py-2 border"
          >
            <option>Tools</option>
            <option>Weapons</option>
            <option>Documents</option>
            <option>Writings</option>
            <option>Art</option>
            <option>Jewelry</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Created At</label>
          <input 
            type="text" 
            name="createdAt"
            value={formData.createdAt}
            onChange={handleChange}
            required 
            placeholder="e.g. 100 BC" 
            className="mt-1 w-full rounded-lg border-gray-300 focus:border-amber-500 focus:ring-amber-500 px-4 py-2 border"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Discovered At</label>
          <input 
            type="text" 
            name="discoveredAt"
            value={formData.discoveredAt}
            onChange={handleChange}
            required 
            placeholder="e.g. 1799" 
            className="mt-1 w-full rounded-lg border-gray-300 focus:border-amber-500 focus:ring-amber-500 px-4 py-2 border"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Discovered By</label>
          <input 
            type="text" 
            name="discoveredBy"
            value={formData.discoveredBy}
            onChange={handleChange}
            required 
            className="mt-1 w-full rounded-lg border-gray-300 focus:border-amber-500 focus:ring-amber-500 px-4 py-2 border"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Present Location</label>
          <input 
            type="text" 
            name="presentLocation"
            value={formData.presentLocation}
            onChange={handleChange}
            required 
            className="mt-1 w-full rounded-lg border-gray-300 focus:border-amber-500 focus:ring-amber-500 px-4 py-2 border"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Historical Context</label>
          <textarea 
            name="historicalContext"
            value={formData.historicalContext}
            onChange={handleChange}
            required 
            rows="4" 
            className="mt-1 w-full rounded-lg border-gray-300 focus:border-amber-500 focus:ring-amber-500 px-4 py-2 border"
          ></textarea>
        </div>
        <div className="sm:col-span-2 grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Your Name</label>
            <input 
              readOnly 
              value={currentUser.name} 
              className="mt-1 w-full rounded-lg bg-gray-100 border-gray-300 px-4 py-2 border"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Your Email</label>
            <input 
              readOnly 
              value={currentUser.email} 
              className="mt-1 w-full rounded-lg bg-gray-100 border-gray-300 px-4 py-2 border"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <button 
            type="submit" 
            className="px-6 py-3 rounded-lg bg-amber-500 text-white hover:bg-amber-600"
          >
            Add Artifact
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddArtifact;
