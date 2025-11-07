import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Heart, Eye } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Artifact } from '../lib/types';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ArtifactCardProps {
  artifact: Artifact;
  onLike?: (id: string) => void;
  isLiked?: boolean;
}

export function ArtifactCard({ artifact, onLike, isLiked }: ArtifactCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden border-amber-200 hover:border-amber-400 hover:shadow-xl transition-all group h-full flex flex-col">
        <div className="relative overflow-hidden aspect-video">
          <ImageWithFallback
            src={artifact.image}
            alt={artifact.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          {/* Like Badge */}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-lg">
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-slate-600'}`} />
            <span className="text-slate-900">{artifact.likeCount}</span>
          </div>

          {/* Type Badge */}
          <div className="absolute bottom-3 left-3">
            <Badge className="bg-amber-600 text-white border-0">
              {artifact.type}
            </Badge>
          </div>
        </div>

        <CardContent className="p-5 flex-1 flex flex-col">
          <h3 className="text-xl text-slate-900 mb-2 line-clamp-1">
            {artifact.name}
          </h3>
          <p className="text-slate-600 mb-4 line-clamp-2 flex-1">
            {artifact.shortDescription}
          </p>

          <div className="space-y-3">
            <div className="flex items-center justify-between text-slate-600">
              <span>Created: {artifact.createdAt}</span>
            </div>
            
            <div className="flex gap-2">
              <Link to={`/artifact/${artifact.id}`} className="flex-1">
                <Button className="w-full bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 group/btn">
                  <Eye className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                  View Details
                </Button>
              </Link>
              {onLike && (
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => onLike(artifact.id)}
                  className={`border-amber-300 hover:bg-amber-50 ${
                    isLiked ? 'bg-red-50 border-red-300' : ''
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-amber-600'}`} />
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
