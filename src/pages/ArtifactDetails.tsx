import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Heart, MapPin, Calendar, User, Clock, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { mockArtifacts } from '../lib/mockData';
import { Artifact } from '../lib/types';
import { useAuth } from '../lib/AuthContext';
import { toast } from 'sonner@2.0.3';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ArtifactDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [artifact, setArtifact] = useState<Artifact | null>(null);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    // Redirect if not logged in
    if (!user) {
      toast.error('Please login to view artifact details');
      navigate('/login');
      return;
    }

    // Find artifact
    const found = mockArtifacts.find(a => a.id === id);
    if (found) {
      setArtifact(found);
      document.title = `${found.name} - ArtifactVault`;

      // Check if liked
      const stored = localStorage.getItem('likedArtifacts');
      if (stored) {
        const likedArtifacts = JSON.parse(stored);
        setIsLiked(likedArtifacts.includes(id));
      }
    } else {
      navigate('/404');
    }
  }, [id, user, navigate]);

  const handleLike = () => {
    if (!artifact) return;

    const stored = localStorage.getItem('likedArtifacts');
    let likedArtifacts: string[] = stored ? JSON.parse(stored) : [];

    if (isLiked) {
      likedArtifacts = likedArtifacts.filter(artId => artId !== artifact.id);
      setIsLiked(false);
      setArtifact({ ...artifact, likeCount: artifact.likeCount - 1 });
      toast.success('Removed from liked artifacts');
    } else {
      likedArtifacts.push(artifact.id);
      setIsLiked(true);
      setArtifact({ ...artifact, likeCount: artifact.likeCount + 1 });
      toast.success('Added to liked artifacts');
    }

    localStorage.setItem('likedArtifacts', JSON.stringify(likedArtifacts));
  };

  if (!artifact) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">⏳</div>
          <p className="text-slate-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="border-amber-200 hover:bg-amber-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="relative">
              <ImageWithFallback
                src={artifact.image}
                alt={artifact.name}
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-amber-600 text-white border-0 px-4 py-2">
                  {artifact.type}
                </Badge>
              </div>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl text-slate-900 mb-4">
              {artifact.name}
            </h1>

            <p className="text-xl text-slate-600 mb-6">
              {artifact.shortDescription}
            </p>

            {/* Like Button */}
            <div className="flex items-center gap-4 mb-8">
              <Button
                onClick={handleLike}
                className={`${
                  isLiked
                    ? 'bg-red-500 hover:bg-red-600'
                    : 'bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900'
                }`}
              >
                <Heart className={`w-5 h-5 mr-2 ${isLiked ? 'fill-white' : ''}`} />
                {isLiked ? 'Liked' : 'Like'}
              </Button>
              <span className="text-2xl text-slate-700">
                {artifact.likeCount} likes
              </span>
            </div>

            {/* Info Cards */}
            <div className="space-y-4 mb-8">
              <Card className="border-amber-200">
                <CardContent className="p-6">
                  <h3 className="text-xl text-slate-900 mb-4">Historical Context</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {artifact.historicalContext}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-amber-200">
                <CardContent className="p-6">
                  <h3 className="text-xl text-slate-900 mb-4">Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-amber-600 mt-1" />
                      <div>
                        <p className="text-slate-500">Created At</p>
                        <p className="text-slate-900">{artifact.createdAt}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-amber-600 mt-1" />
                      <div>
                        <p className="text-slate-500">Discovered At</p>
                        <p className="text-slate-900">{artifact.discoveredAt}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <User className="w-5 h-5 text-amber-600 mt-1" />
                      <div>
                        <p className="text-slate-500">Discovered By</p>
                        <p className="text-slate-900">{artifact.discoveredBy}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-amber-600 mt-1" />
                      <div>
                        <p className="text-slate-500">Present Location</p>
                        <p className="text-slate-900">{artifact.presentLocation}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200 bg-amber-50">
                <CardContent className="p-6">
                  <h3 className="text-xl text-slate-900 mb-4">Added By</h3>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center text-white">
                      {artifact.addedBy.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-slate-900">{artifact.addedBy.name}</p>
                      <p className="text-slate-600">{artifact.addedBy.email}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
