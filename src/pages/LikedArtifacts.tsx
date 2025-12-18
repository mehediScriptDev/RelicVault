import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Heart, Plus } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ArtifactCard } from '../components/ArtifactCard';
import { mockArtifacts } from '../lib/mockData';
import { Artifact } from '../lib/types';
import { useAuth } from '../lib/AuthContext';
import { toast } from 'sonner';

export function LikedArtifacts() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [likedArtifacts, setLikedArtifacts] = useState<Artifact[]>([]);
  const [likedIds, setLikedIds] = useState<string[]>([]);

  useEffect(() => {
    document.title = 'Liked Artifacts - ArtifactVault';

    // Redirect if not logged in
    if (!user) {
      toast.error('Please login to view your liked artifacts');
      navigate('/login');
      return;
    }

    // Get liked artifact IDs from localStorage
    const stored = localStorage.getItem('likedArtifacts');
    if (stored) {
      const ids = JSON.parse(stored);
      setLikedIds(ids);
      
      // Get the actual artifacts
      const artifacts = mockArtifacts.filter(artifact => ids.includes(artifact.id));
      setLikedArtifacts(artifacts);
    }
  }, [user, navigate]);

  const handleUnlike = (id: string) => {
    const newLikedIds = likedIds.filter(artId => artId !== id);
    setLikedIds(newLikedIds);
    setLikedArtifacts(likedArtifacts.filter(artifact => artifact.id !== id));
    localStorage.setItem('likedArtifacts', JSON.stringify(newLikedIds));
    toast.success('Removed from liked artifacts');
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl">
              <Heart className="w-8 h-8 text-white fill-white" />
            </div>
            <div>
              <h1 className="text-5xl text-slate-900">
                Liked Artifacts
              </h1>
              <p className="text-xl text-slate-600">
                Your favorite historical treasures
              </p>
            </div>
          </div>
        </motion.div>

        {likedArtifacts.length > 0 ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <p className="text-slate-600">
                You have liked <span className="text-amber-700">{likedArtifacts.length}</span> artifact{likedArtifacts.length !== 1 ? 's' : ''}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {likedArtifacts.map((artifact, index) => (
                <motion.div
                  key={artifact.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <ArtifactCard
                    artifact={artifact}
                    onLike={handleUnlike}
                    isLiked={true}
                  />
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">💔</div>
            <h3 className="text-2xl text-slate-900 mb-2">No liked artifacts yet</h3>
            <p className="text-slate-600 mb-6">
              Start exploring and like artifacts to see them here
            </p>
            <Link to="/artifacts">
              <Button className="bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900">
                <Plus className="w-5 h-5 mr-2" />
                Explore Artifacts
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}
