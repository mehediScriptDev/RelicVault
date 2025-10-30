import { useState } from 'react';
import ArtifactCard from '../components/ArtifactCard';

const AllArtifacts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample data - in a real app, this would come from an API
  const allArtifacts = [
    {
      id: 1,
      name: 'Rosetta Stone',
      image: 'https://i.ibb.co/6y4n5Fj/rosetta.jpg',
      description: 'Key to deciphering Egyptian hieroglyphs, 196 BC.',
      likes: 1247
    },
    {
      id: 2,
      name: 'Antikythera Mechanism',
      image: 'https://i.ibb.co/6rDYpFk/antikythera.jpg',
      description: 'Ancient Greek hand-powered orrery.',
      likes: 892
    },
    // Add more artifacts as needed
  ];

  const filteredArtifacts = allArtifacts.filter(artifact =>
    artifact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <h2 className="text-3xl font-bold text-slate-800">All Artifacts</h2>
        <div className="mt-4 md:mt-0">
          <input 
            type="text" 
            placeholder="Search by name…" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-72 px-4 py-2 rounded-lg border-gray-300 focus:border-amber-500 focus:ring-amber-500 border"
          />
        </div>
      </div>

      {/* grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredArtifacts.map((artifact) => (
          <ArtifactCard key={artifact.id} artifact={artifact} />
        ))}
      </div>

      {filteredArtifacts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-600">No artifacts found matching "{searchTerm}"</p>
        </div>
      )}
    </section>
  );
};

export default AllArtifacts;
