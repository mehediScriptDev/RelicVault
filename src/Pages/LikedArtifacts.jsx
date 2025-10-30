import { Link } from 'react-router';

const LikedArtifacts = () => {
  // Sample data - in a real app, this would come from an API
  const likedArtifacts = [];

  const isEmpty = likedArtifacts.length === 0;

  return (
    <div className="min-h-[calc(100vh-12rem)]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Liked Artifacts</h1>
              <p className="text-gray-600">A collection of artifacts you've saved.</p>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              <span className="text-gray-400">/</span>
              <Link to="/all-artifacts" className="text-gray-600 hover:text-gray-900">Artifacts</Link>
              <span className="text-gray-400">/</span>
              <span className="text-amber-600 font-medium">Liked</span>
            </div>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* empty state */}
        {isEmpty ? (
          <div className="flex items-center justify-center min-h-[500px]">
            <div className="text-center max-w-md">
              {/* Empty State Illustration */}
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl flex items-center justify-center transform rotate-3 shadow-xl">
                    <div className="transform -rotate-3">
                      <svg className="w-32 h-32 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                      </svg>
                      <svg className="w-16 h-16 text-amber-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Empty State Text */}
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                No Liked Artifacts Yet
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                You haven't liked any artifacts. Start exploring and add your favorites to see them here.
              </p>

              {/* CTA Button */}
              <Link 
                to="/all-artifacts" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
                Explore Artifacts
              </Link>
            </div>
          </div>
        ) : (
          /* grid */
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {likedArtifacts.map((artifact) => (
              <div key={artifact.id}>Artifact Card</div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default LikedArtifacts;
