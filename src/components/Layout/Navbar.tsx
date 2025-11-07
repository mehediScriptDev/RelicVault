import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Landmark, Menu, X, User, Heart, Package } from 'lucide-react';
import { useAuth } from '../../lib/AuthContext';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export function Navbar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/artifacts', label: 'All Artifacts' },
    ...(user ? [{ to: '/add-artifact', label: 'Add Artifacts' }] : [])
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-amber-50 via-white to-amber-50 border-b border-amber-200 backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg group-hover:scale-110 transition-transform">
              <Landmark className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent">
              ArtifactVault
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative group"
              >
                <span className={`text-slate-700 hover:text-amber-800 transition-colors ${
                  isActive(link.to) ? 'text-amber-800' : ''
                }`}>
                  {link.label}
                </span>
                {isActive(link.to) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-600 to-amber-800"
                  />
                )}
              </Link>
            ))}

            {/* Auth Section */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2 group">
                    <Avatar className="w-9 h-9 ring-2 ring-amber-200 ring-offset-2 group-hover:ring-amber-400 transition-all">
                      <AvatarImage src={user.photoURL} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-2 py-2 border-b">
                    <p className="text-slate-900">{user.name}</p>
                    <p className="text-slate-500">{user.email}</p>
                  </div>
                  <DropdownMenuItem asChild>
                    <Link to="/my-artifacts" className="flex items-center gap-2">
                      <Package className="w-4 h-4" />
                      My Artifacts
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/liked-artifacts" className="flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      Liked Artifacts
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logout} className="text-red-600">
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/login">
                <Button className="bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900">
                  Login
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-amber-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-amber-200 bg-white"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg ${
                    isActive(link.to)
                      ? 'bg-amber-100 text-amber-800'
                      : 'text-slate-700 hover:bg-amber-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {user ? (
                <>
                  <div className="px-4 py-2 border-t border-amber-200">
                    <div className="flex items-center gap-3 mb-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={user.photoURL} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-slate-900">{user.name}</p>
                        <p className="text-slate-500">{user.email}</p>
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/my-artifacts"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-slate-700 hover:bg-amber-50 rounded-lg"
                  >
                    <Package className="w-4 h-4" />
                    My Artifacts
                  </Link>
                  <Link
                    to="/liked-artifacts"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-slate-700 hover:bg-amber-50 rounded-lg"
                  >
                    <Heart className="w-4 h-4" />
                    Liked Artifacts
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-amber-600 to-amber-800">
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
