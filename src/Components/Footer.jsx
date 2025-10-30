import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <Link to="/about" className="hover:text-gray-900">About</Link>
            <Link to="/contact" className="hover:text-gray-900">Contact</Link>
            <Link to="/privacy" className="hover:text-gray-900">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-900">Terms of Service</Link>
          </div>
          <div className="text-sm text-gray-600">
            © 2024 Historical Artifacts Tracker. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
