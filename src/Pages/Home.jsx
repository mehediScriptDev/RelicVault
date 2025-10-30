import { useState } from 'react';
import { Link } from 'react-router';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample data - in a real app, this would come from an API
  const featuredArtifacts = [
    {
      id: 1,
      name: 'The Rosetta Stone',
      image: 'https://images.unsplash.com/photo-1594638524343-be9a93937d39?w=500&h=600&fit=crop',
      description: 'Key to deciphering hieroglyphs',
      likes: 1267
    },
    {
      id: 2,
      name: "Tutankhamun's Mask",
      image: 'https://images.unsplash.com/photo-1583932146584-82f1e50b715d?w=500&h=600&fit=crop',
      description: 'Iconic funerary mask',
      likes: 1152
    },
    {
      id: 3,
      name: 'The Terracotta Army',
      image: 'https://images.unsplash.com/photo-1548690596-81f4c99c9bc3?w=500&h=600&fit=crop',
      description: 'Life-size clay soldiers',
      likes: 1098
    },
    {
      id: 4,
      name: 'The Cyrus Cylinder',
      image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=500&h=600&fit=crop',
      description: 'Ancient Persian decree',
      likes: 976
    },
    {
      id: 5,
      name: 'The Dead Sea Scrolls',
      image: 'https://images.unsplash.com/photo-1614107151491-6876eecbff89?w=500&h=600&fit=crop',
      description: 'Ancient Jewish texts',
      likes: 921
    },
    {
      id: 6,
      name: 'The Elgin Marbles',
      image: 'https://images.unsplash.com/photo-1555634847-b7bd04ac1a6d?w=500&h=600&fit=crop',
      description: 'Sculptures from the Parthenon',
      likes: 854
    }
  ];

  const slides = [
    {
      title: 'Discover the Stories of the Past',
      subtitle: 'Explore a curated collection of the world\'s most significant historical artifacts.',
      image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=1920&h=600&fit=crop'
    },
    {
      title: 'Preserve History Together',
      subtitle: 'Contribute to our growing collection and help preserve human heritage.',
      image: 'https://images.unsplash.com/photo-1613486176953-2f49e4f0bf7f?w=1920&h=600&fit=crop'
    },
    {
      title: 'Connect with the Ancient World',
      subtitle: 'Experience history through detailed artifacts and their fascinating stories.',
      image: 'https://images.unsplash.com/photo-1566127444672-7c4042e6d6b8?w=1920&h=600&fit=crop'
    }
  ];

  return (
    <>
      {/* HERO SLIDER */}
      <section className="relative h-[500px] overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute inset-0">
          <img 
            src={slides[currentSlide].image} 
            alt="Hero" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex justify-center gap-2 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition ${
                    index === currentSlide ? 'bg-amber-500 w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED ARTIFACTS */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Featured Artifacts</h2>
          <p className="text-gray-600 text-lg">Explore the most treasured pieces of human history</p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredArtifacts.map((artifact) => (
            <Link 
              key={artifact.id}
              to={`/artifact/${artifact.id}`}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                  <img 
                    src={artifact.image} 
                    alt={artifact.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition">
                    {artifact.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{artifact.description}</p>
                  <div className="flex items-center text-amber-600">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                    </svg>
                    <span className="font-semibold">{artifact.likes.toLocaleString()} Likes</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/all-artifacts"
            className="inline-block px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition"
          >
            See All Artifacts
          </Link>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About Us</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            At Artifacts Tracker, we are dedicated to preserving and documenting historical artifacts from around 
            the globe. Our mission is to make these invaluable pieces of history accessible to everyone, fostering 
            a deeper understanding and appreciation of our shared heritage. We believe that by connecting people 
            with artifacts, we can inspire curiosity, promote education, and ensure that these treasures are 
            protected for future generations.
          </p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Contribute to History</h2>
          <p className="text-xl mb-8">
            Help us expand our collection and share your knowledge with the world. Your contributions are vital to preserving our shared past.
          </p>
          <Link 
            to="/add-artifact" 
            className="inline-block px-8 py-4 bg-white text-amber-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg"
          >
            Add Your Artifact
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
