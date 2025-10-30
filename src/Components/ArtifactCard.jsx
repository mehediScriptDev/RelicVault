import { Link } from 'react-router';

const ArtifactCard = ({ artifact, showActions = false }) => {
  return (
    <div className="rounded-xl shadow hover:shadow-lg transition overflow-hidden bg-white">
      <img 
        src={artifact.image} 
        alt={artifact.name} 
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h4 className="font-semibold text-lg">{artifact.name}</h4>
        <p className="text-sm text-gray-600 mt-1">{artifact.description}</p>
        <div className="flex items-center justify-between mt-4">
          {!showActions ? (
            <>
              <span className="text-rose-600 font-bold">❤ {artifact.likes}</span>
              <Link 
                to={`/artifact/${artifact.id}`} 
                className="px-4 py-2 rounded-lg bg-amber-500 text-white hover:bg-amber-600"
              >
                View Detail
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Link 
                to={`/update/${artifact.id}`} 
                className="px-3 py-1 rounded-lg bg-slate-800 text-white hover:bg-slate-900"
              >
                Update
              </Link>
              <button className="px-3 py-1 rounded-lg bg-rose-600 text-white hover:bg-rose-700">
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtifactCard;
