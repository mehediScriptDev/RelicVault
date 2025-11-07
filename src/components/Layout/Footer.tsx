import { Link } from 'react-router-dom';
import { Landmark, Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg">
                <Landmark className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
                ArtifactVault
              </span>
            </div>
            <p className="text-slate-400 mb-4">
              Preserving history's treasures through digital documentation. Explore, discover, and contribute to the world's archaeological heritage.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-slate-800 hover:bg-amber-600 rounded-lg transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-amber-600 rounded-lg transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-amber-600 rounded-lg transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-amber-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/artifacts" className="text-slate-400 hover:text-amber-400 transition-colors">
                  All Artifacts
                </Link>
              </li>
              <li>
                <Link to="/add-artifact" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Add Artifact
                </Link>
              </li>
              <li>
                <Link to="/my-artifacts" className="text-slate-400 hover:text-amber-400 transition-colors">
                  My Artifacts
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-amber-400 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-amber-400 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>123 History Lane, Heritage City, HC 12345</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@artifactvault.com</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700 text-center text-slate-400">
          <p>© 2025 ArtifactVault. All rights reserved. Built with passion for history.</p>
        </div>
      </div>
    </footer>
  );
}
