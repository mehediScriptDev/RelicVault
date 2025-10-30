import { useState } from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Changed to true for demo
  const [user, setUser] = useState({
    name: 'Jane Doe',
    avatar: 'https://i.pravatar.cc/150?img=47'
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded"></div>
            <span className="text-xl font-bold text-gray-900">Artifacts Tracker</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
            <Link to="/" className="hover:text-amber-600 transition">Home</Link>
            <Link to="/all-artifacts" className="hover:text-amber-600 transition">Artifacts</Link>
            {isLoggedIn && (
              <>
                <Link to="/my-artifacts" className="hover:text-amber-600 transition">Collections</Link>
                <Link to="/liked-artifacts" className="hover:text-amber-600 transition">Liked</Link>
              </>
            )}
            <Link to="/add-artifact" className="hover:text-amber-600 transition">About</Link>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* NOT logged-in state */}
            {!isLoggedIn && (
              <div className="hidden md:flex items-center gap-3">
                <Link to="/login" className="px-5 py-2 rounded-lg bg-amber-600 text-white font-medium hover:bg-amber-700 transition">
                  Login
                </Link>
              </div>
            )}

            {/* LOGGED-in state */}
            {isLoggedIn && (
              <div className="hidden md:flex items-center gap-4">
                <Link to="/add-artifact" className="px-4 py-2 rounded-lg bg-amber-600 text-white text-sm font-medium hover:bg-amber-700 transition">
                  Add Artifact
                </Link>
                <button className="relative p-2 text-gray-600 hover:text-gray-900">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                  </svg>
                </button>
                <img 
                  className="w-10 h-10 rounded-full object-cover border-2 border-gray-200 cursor-pointer hover:border-amber-500 transition" 
                  src={user.avatar} 
                  alt="user"
                  title={user.name}
                />
              </div>
            )}

            {/* Mobile hamburger */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-700 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 text-gray-700">
            <Link to="/" className="block px-2 py-2 hover:bg-gray-50 rounded">Home</Link>
            <Link to="/all-artifacts" className="block px-2 py-2 hover:bg-gray-50 rounded">Artifacts</Link>
            <Link to="/add-artifact" className="block px-2 py-2 hover:bg-gray-50 rounded">Add Artifact</Link>
            {isLoggedIn && (
              <>
                <Link to="/my-artifacts" className="block px-2 py-2 hover:bg-gray-50 rounded">My Artifacts</Link>
                <Link to="/liked-artifacts" className="block px-2 py-2 hover:bg-gray-50 rounded">Liked</Link>
              </>
            )}
            <hr className="border-gray-200"/>
            {!isLoggedIn ? (
              <Link to="/login" className="block px-2 py-2 hover:bg-gray-50 rounded">Login</Link>
            ) : (
              <button 
                onClick={handleLogout}
                className="block px-2 py-2 hover:bg-gray-50 rounded text-left w-full"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
