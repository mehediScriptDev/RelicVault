import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Edit, Trash2, Plus } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../components/ui/alert-dialog';
import { mockArtifacts } from '../lib/mockData';
import { Artifact } from '../lib/types';
import { useAuth } from '../lib/AuthContext';
import { toast } from 'sonner';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function MyArtifacts() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [myArtifacts, setMyArtifacts] = useState<Artifact[]>([]);

  useEffect(() => {
    document.title = 'My Artifacts - ArtifactVault';

    // Redirect if not logged in
    if (!user) {
      toast.error('Please login to view your artifacts');
      navigate('/login');
      return;
    }

    // Get user's artifacts (filter by email)
    const userArtifacts = mockArtifacts.filter(
      artifact => artifact.addedBy.email === user.email
    );
    setMyArtifacts(userArtifacts);
  }, [user, navigate]);

  const handleDelete = (id: string, name: string) => {
    // Remove artifact from list
    setMyArtifacts(myArtifacts.filter(artifact => artifact.id !== id));
    toast.success(`"${name}" has been deleted successfully`);
    // In a real app, this would make an API call
    navigate('/artifacts');
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
            <div>
              <h1 className="text-5xl text-slate-900 mb-2">
                My Artifacts
              </h1>
              <p className="text-xl text-slate-600">
                Manage your contributed artifacts
              </p>
            </div>
            <Link to="/add-artifact">
              <Button className="bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900">
                <Plus className="w-5 h-5 mr-2" />
                Add New Artifact
              </Button>
            </Link>
          </div>
        </motion.div>

        {myArtifacts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {myArtifacts.map((artifact, index) => (
              <motion.div
                key={artifact.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="overflow-hidden border-amber-200 hover:border-amber-400 hover:shadow-xl transition-all group">
                  <div className="relative overflow-hidden aspect-video">
                    <ImageWithFallback
                      src={artifact.image}
                      alt={artifact.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-amber-600 text-white border-0">
                        {artifact.type}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-5">
                    <h3 className="text-xl text-slate-900 mb-2 line-clamp-1">
                      {artifact.name}
                    </h3>
                    <p className="text-slate-600 mb-2 line-clamp-2">
                      {artifact.shortDescription}
                    </p>
                    <p className="text-slate-500 mb-4">
                      {artifact.likeCount} likes
                    </p>

                    <div className="flex gap-2">
                      <Link to={`/update-artifact/${artifact.id}`} className="flex-1">
                        <Button variant="outline" className="w-full border-amber-300 hover:bg-amber-50">
                          <Edit className="w-4 h-4 mr-2" />
                          Update
                        </Button>
                      </Link>

                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="outline" className="flex-1 border-red-300 hover:bg-red-50 text-red-600">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will permanently delete the artifact "{artifact.name}" from the database.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDelete(artifact.id, artifact.name)}
                              className="bg-red-600 hover:bg-red-700"
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-2xl text-slate-900 mb-2">No artifacts yet</h3>
            <p className="text-slate-600 mb-6">
              You haven't added any artifacts to the collection
            </p>
            <Link to="/add-artifact">
              <Button className="bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900">
                <Plus className="w-5 h-5 mr-2" />
                Add Your First Artifact
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}
