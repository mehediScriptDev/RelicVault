import { Link } from 'react-router';
import ArtifactCard from '../components/ArtifactCard';

const MyArtifacts = () => {
  // Sample data - in a real app, this would come from an API
  const myArtifacts = [
    {
      id: 2,
      name: 'Antikythera Mechanism',
      image: 'https://i.ibb.co/6rDYpFk/antikythera.jpg',
      description: 'Ancient Greek hand-powered orrery.',
      likes: 892
    },
  ];

  const isEmpty = myArtifacts.length === 0;

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-slate-800 mb-8">My Artifacts</h2>

      {/* empty state */}
      {isEmpty ? (
        <div className="text-center py-16">
          <p className="text-gray-600">You haven't added any artifacts yet.</p>
          <Link 
            to="/add-artifact" 
            className="mt-4 inline-block px-5 py-2 rounded-lg bg-amber-500 text-white hover:bg-amber-600"
          >
            Add your first
          </Link>
        </div>
      ) : (
        /* grid */
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {myArtifacts.map((artifact) => (
            <ArtifactCard key={artifact.id} artifact={artifact} showActions={true} />
          ))}
        </div>
      )}
    </section>
  );
};

export default MyArtifacts;
