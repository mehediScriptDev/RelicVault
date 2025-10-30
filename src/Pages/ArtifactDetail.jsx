import { useState } from 'react';
import { useParams, Link } from 'react-router';

const ArtifactDetail = () => {
  const { id } = useParams();
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(123);

  // Sample data - in a real app, this would come from an API
  const artifact = {
    id: id,
    artifactId: '123456',
    name: 'The Rosetta Stone',
    image: 'https://images.unsplash.com/photo-1594638524343-be9a93937d39?w=800&h=1000&fit=crop',
    context: 'Ancient Egypt, Ptolemaic period',
    createdDiscoveredAt: '196 BC',
    discoveredBy: 'French soldiers during Napoleon\'s campaign in Egypt',
    presentLocation: 'British Museum, London',
    description: 'The Rosetta Stone is a granodiorite stele inscribed with a decree issued at Memphis, Egypt in 196 BC on behalf of King Ptolemy V. The decree appears in three scripts: Ancient Egyptian hieroglyphs, Demotic script, and Ancient Greek. Because it presents essentially the same text in all three scripts, the stone provided the key to the modern understanding of Egyptian hieroglyphs.',
    addedBy: {
      name: 'Dr. Amelia Hernandez',
      email: 'amelia@example.com'
    }
  };

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900">Dashboard</Link>
            <span>/</span>
            <Link to="/all-artifacts" className="hover:text-gray-900">Artifacts</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{artifact.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Image Column */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <img 
                src={artifact.image} 
                alt={artifact.name} 
                className="w-full rounded-2xl shadow-2xl object-cover aspect-[3/4]"
              />
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-3">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-5xl font-bold text-gray-900 mb-3">{artifact.name}</h1>
              <p className="text-gray-600 text-lg">Artifact ID: {artifact.artifactId}</p>
            </div>

            {/* Description Box */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-amber-600 mb-4">Description</h2>
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-amber-600 mb-3">Granodiorite stele</h3>
                <p className="text-gray-700 leading-relaxed">{artifact.description}</p>
              </div>
            </div>

            {/* Artifact Details */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Artifact Details</h2>
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <dt className="text-sm font-medium text-gray-600 mb-1">Context</dt>
                  <dd className="text-gray-900">{artifact.context}</dd>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <dt className="text-sm font-medium text-gray-600 mb-1">Created/Discovered At</dt>
                  <dd className="text-gray-900">{artifact.createdDiscoveredAt}</dd>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <dt className="text-sm font-medium text-gray-600 mb-1">Discovered By</dt>
                  <dd className="text-gray-900">{artifact.discoveredBy}</dd>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <dt className="text-sm font-medium text-gray-600 mb-1">Present Location</dt>
                  <dd className="text-gray-900">{artifact.presentLocation}</dd>
                </div>
                <div className="pb-4">
                  <dt className="text-sm font-medium text-gray-600 mb-1">Added By</dt>
                  <dd className="text-gray-900">{artifact.addedBy.name}</dd>
                </div>
              </div>
            </div>

            {/* Like Button */}
            <div className="flex items-center gap-4 bg-amber-50 rounded-xl p-6 border border-amber-100">
              <button 
                onClick={handleLike}
                className={`flex items-center gap-3 px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105 ${
                  liked 
                    ? 'bg-amber-600 text-white shadow-lg' 
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-amber-600'
                }`}
              >
                <svg className="w-6 h-6" fill={liked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
                <span className="text-lg">{likeCount}</span>
              </button>
              <span className="text-gray-600">Likes</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArtifactDetail;
