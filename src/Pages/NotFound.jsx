import { Link } from 'react-router';

const NotFound = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center max-w-2xl mx-auto">
        {/* Decorative Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1583932146584-82f1e50b715d?w=300&h=300&fit=crop" 
              alt="Lost Artifact" 
              className="w-64 h-64 object-cover rounded-2xl shadow-2xl border-8 border-amber-100 transform rotate-3"
            />
            <div className="absolute -bottom-2 -right-2 w-64 h-64 bg-amber-600/20 rounded-2xl -z-10 transform -rotate-3"></div>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-7xl font-extrabold text-gray-900 mb-4">
          404 - Page Lost to Time
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          It seems the artifact you're looking for is not in our current collection. 
          It might have been misplaced in the archives or its existence is yet to be discovered.
        </p>

        {/* CTA Button */}
        <Link 
          to="/" 
          className="inline-block px-8 py-4 bg-amber-600 text-white rounded-lg font-semibold text-lg hover:bg-amber-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Return to the Archives
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
