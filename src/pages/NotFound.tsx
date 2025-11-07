import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, Search } from 'lucide-react';
import { Button } from '../components/ui/button';

export function NotFound() {
  useEffect(() => {
    document.title = '404 - Page Not Found | ArtifactVault';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="text-9xl mb-8"
        >
          🏺
        </motion.div>
        
        <h1 className="text-8xl mb-4 bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent">
          404
        </h1>
        
        <h2 className="text-3xl text-slate-900 mb-4">
          Artifact Not Found
        </h2>
        
        <p className="text-xl text-slate-600 mb-8">
          Oops! It seems this historical treasure has been lost to time. 
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900">
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Button>
          </Link>
          <Link to="/artifacts">
            <Button variant="outline" className="border-amber-300 hover:bg-amber-50">
              <Search className="w-5 h-5 mr-2" />
              Browse Artifacts
            </Button>
          </Link>
        </div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-12 text-6xl opacity-20"
        >
          ⬇️
        </motion.div>
      </motion.div>
    </div>
  );
}
