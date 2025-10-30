import { useState } from 'react';
import { Link, useNavigate } from 'react-router';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    photoURL: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Register:', formData);
    navigate('/login');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="min-h-screen grid place-items-center bg-gradient-to-br from-slate-900 to-slate-800 px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center text-slate-800 mb-6">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required 
              className="mt-1 w-full rounded-lg border-gray-300 focus:border-amber-500 focus:ring-amber-500 px-4 py-2 border"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required 
              className="mt-1 w-full rounded-lg border-gray-300 focus:border-amber-500 focus:ring-amber-500 px-4 py-2 border"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Photo URL</label>
            <input 
              type="url" 
              name="photoURL"
              value={formData.photoURL}
              onChange={handleChange}
              placeholder="https://i.pravatar.cc/300" 
              className="mt-1 w-full rounded-lg border-gray-300 focus:border-amber-500 focus:ring-amber-500 px-4 py-2 border"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              required 
              minLength="6" 
              className="mt-1 w-full rounded-lg border-gray-300 focus:border-amber-500 focus:ring-amber-500 px-4 py-2 border"
            />
            <ul className="mt-2 text-xs text-gray-500 list-disc pl-5 space-y-1">
              <li>At least 6 characters</li>
              <li>One uppercase & one lowercase letter</li>
            </ul>
          </div>
          <button 
            type="submit" 
            className="w-full py-2 rounded-lg bg-amber-500 text-white hover:bg-amber-600"
          >
            Register
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-amber-600 font-medium hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
