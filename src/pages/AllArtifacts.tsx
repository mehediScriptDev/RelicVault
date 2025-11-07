import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Search } from 'lucide-react';
import { Input } from '../components/ui/input';
import { ArtifactCard } from '../components/ArtifactCard';
import { mockArtifacts } from '../lib/mockData';
import { Artifact } from '../lib/types';
import { useAuth } from '../lib/AuthContext';
import { toast } from 'sonner@2.0.3';

export function AllArtifacts() {
  const { user } = useAuth();
  const [artifacts, setArtifacts] = useState<Artifact[]>(mockArtifacts);
  const [searchQuery, setSearchQuery] = useState('');
  const [likedArtifacts, setLikedArtifacts] = useState<string[]>([]);

  useEffect(() => {
    document.title = 'All Artifacts - ArtifactVault';

    // Load liked artifacts from localStorage
    const stored = localStorage.getItem('likedArtifacts');
    if (stored) {
      setLikedArtifacts(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    // Filter artifacts based on search query
    if (searchQuery.trim() === '') {
      setArtifacts(mockArtifacts);
    } else {
      const filtered = mockArtifacts.filter(artifact =>
        artifact.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setArtifacts(filtered);
    }
  }, [searchQuery]);

  const handleLike = (id: string) => {
    if (!user) {
      toast.error('Please login to like artifacts');
      return;
    }

    const isCurrentlyLiked = likedArtifacts.includes(id);
    let newLikedArtifacts: string[];

    if (isCurrentlyLiked) {
      newLikedArtifacts = likedArtifacts.filter(artId => artId !== id);
      toast.success('Removed from liked artifacts');
    } else {
      newLikedArtifacts = [...likedArtifacts, id];
      toast.success('Added to liked artifacts');
    }

    setLikedArtifacts(newLikedArtifacts);
    localStorage.setItem('likedArtifacts', JSON.stringify(newLikedArtifacts));

    // Update artifact like count
    setArtifacts(artifacts.map(artifact => {
      if (artifact.id === id) {
        return {
          ...artifact,
          likeCount: isCurrentlyLiked ? artifact.likeCount - 1 : artifact.likeCount + 1
        };
      }
      return artifact;
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl text-slate-900 mb-4">
            All Artifacts
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Explore our complete collection of historical treasures
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Search artifacts by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 border-2 border-amber-200 focus:border-amber-400 rounded-xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <p className="text-slate-600">
            Showing <span className="text-amber-700">{artifacts.length}</span> artifact{artifacts.length !== 1 ? 's' : ''}
          </p>
        </motion.div>

        {/* Artifacts Grid */}
        {artifacts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artifacts.map((artifact, index) => (
              <motion.div
                key={artifact.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <ArtifactCard
                  artifact={artifact}
                  onLike={handleLike}
                  isLiked={likedArtifacts.includes(artifact.id)}
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl text-slate-900 mb-2">No artifacts found</h3>
            <p className="text-slate-600">
              Try adjusting your search query or browse all artifacts
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
