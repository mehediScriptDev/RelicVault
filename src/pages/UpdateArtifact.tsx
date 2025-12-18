import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Save, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { mockArtifacts } from '../lib/mockData';
import { useAuth } from '../lib/AuthContext';
import { toast } from 'sonner';

export function UpdateArtifact() {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    type: '',
    historicalContext: '',
    createdAt: '',
    discoveredAt: '',
    discoveredBy: '',
    presentLocation: ''
  });

  useEffect(() => {
    document.title = 'Update Artifact - ArtifactVault';

    // Redirect if not logged in
    if (!user) {
      toast.error('Please login to update artifacts');
      navigate('/login');
      return;
    }

    // Find artifact
    const artifact = mockArtifacts.find(a => a.id === id);
    if (artifact) {
      // Check if user owns this artifact
      if (artifact.addedBy.email !== user.email) {
        toast.error('You can only update your own artifacts');
        navigate('/my-artifacts');
        return;
      }

      // Load artifact data
      setFormData({
        name: artifact.name,
        image: artifact.image,
        type: artifact.type,
        historicalContext: artifact.historicalContext,
        createdAt: artifact.createdAt,
        discoveredAt: artifact.discoveredAt,
        discoveredBy: artifact.discoveredBy,
        presentLocation: artifact.presentLocation
      });
    } else {
      navigate('/404');
    }
  }, [id, user, navigate]);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.image || !formData.type || !formData.historicalContext) {
      toast.error('Please fill in all required fields');
      return;
    }

    setLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast.success('Artifact updated successfully!');
    navigate('/my-artifacts');
    setLoading(false);
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Back Button */}
          <div className="mb-8">
            <Button
              variant="outline"
              onClick={() => navigate('/my-artifacts')}
              className="border-amber-200 hover:bg-amber-50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to My Artifacts
            </Button>
          </div>

          <Card className="border-amber-200 shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl text-slate-900">Update Artifact</CardTitle>
              <CardDescription className="text-slate-600">
                Edit your artifact information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Artifact Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Artifact Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="e.g., Rosetta Stone"
                    className="border-amber-200 focus:border-amber-400"
                    required
                  />
                </div>

                {/* Artifact Image */}
                <div className="space-y-2">
                  <Label htmlFor="image">Artifact Image URL *</Label>
                  <Input
                    id="image"
                    type="url"
                    value={formData.image}
                    onChange={(e) => handleChange('image', e.target.value)}
                    placeholder="https://example.com/image.jpg"
                    className="border-amber-200 focus:border-amber-400"
                    required
                  />
                </div>

                {/* Artifact Type */}
                <div className="space-y-2">
                  <Label htmlFor="type">Artifact Type *</Label>
                  <Select value={formData.type} onValueChange={(value) => handleChange('type', value)}>
                    <SelectTrigger className="border-amber-200 focus:border-amber-400">
                      <SelectValue placeholder="Select artifact type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Tools">Tools</SelectItem>
                      <SelectItem value="Weapons">Weapons</SelectItem>
                      <SelectItem value="Documents">Documents</SelectItem>
                      <SelectItem value="Writings">Writings</SelectItem>
                      <SelectItem value="Pottery">Pottery</SelectItem>
                      <SelectItem value="Jewelry">Jewelry</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Historical Context */}
                <div className="space-y-2">
                  <Label htmlFor="historicalContext">Historical Context *</Label>
                  <Textarea
                    id="historicalContext"
                    value={formData.historicalContext}
                    onChange={(e) => handleChange('historicalContext', e.target.value)}
                    placeholder="Describe the historical significance and context of this artifact..."
                    className="border-amber-200 focus:border-amber-400 min-h-32"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Created At */}
                  <div className="space-y-2">
                    <Label htmlFor="createdAt">Created At *</Label>
                    <Input
                      id="createdAt"
                      value={formData.createdAt}
                      onChange={(e) => handleChange('createdAt', e.target.value)}
                      placeholder="e.g., 100 BC"
                      className="border-amber-200 focus:border-amber-400"
                      required
                    />
                  </div>

                  {/* Discovered At */}
                  <div className="space-y-2">
                    <Label htmlFor="discoveredAt">Discovered At *</Label>
                    <Input
                      id="discoveredAt"
                      value={formData.discoveredAt}
                      onChange={(e) => handleChange('discoveredAt', e.target.value)}
                      placeholder="e.g., 1799"
                      className="border-amber-200 focus:border-amber-400"
                      required
                    />
                  </div>

                  {/* Discovered By */}
                  <div className="space-y-2">
                    <Label htmlFor="discoveredBy">Discovered By *</Label>
                    <Input
                      id="discoveredBy"
                      value={formData.discoveredBy}
                      onChange={(e) => handleChange('discoveredBy', e.target.value)}
                      placeholder="e.g., Pierre-François Bouchard"
                      className="border-amber-200 focus:border-amber-400"
                      required
                    />
                  </div>

                  {/* Present Location */}
                  <div className="space-y-2">
                    <Label htmlFor="presentLocation">Present Location *</Label>
                    <Input
                      id="presentLocation"
                      value={formData.presentLocation}
                      onChange={(e) => handleChange('presentLocation', e.target.value)}
                      placeholder="e.g., British Museum, London"
                      className="border-amber-200 focus:border-amber-400"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900"
                  disabled={loading}
                >
                  <Save className="w-5 h-5 mr-2" />
                  {loading ? 'Updating Artifact...' : 'Update Artifact'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
