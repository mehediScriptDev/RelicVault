import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Shield, Users, Award, TrendingUp, Globe, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ArtifactCard } from '../components/ArtifactCard';
import { mockArtifacts } from '../lib/mockData';
import { Artifact } from '../lib/types';
import { useAuth } from '../lib/AuthContext';
import { toast } from 'sonner@2.0.3';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  const { user } = useAuth();
  const [artifacts, setArtifacts] = useState<Artifact[]>([]);
  const [likedArtifacts, setLikedArtifacts] = useState<string[]>([]);

  useEffect(() => {
    // Set document title
    document.title = 'Home - ArtifactVault';

    // Get top 6 artifacts by like count
    const topArtifacts = [...mockArtifacts]
      .sort((a, b) => b.likeCount - a.likeCount)
      .slice(0, 6);
    setArtifacts(topArtifacts);

    // Load liked artifacts from localStorage
    const stored = localStorage.getItem('likedArtifacts');
    if (stored) {
      setLikedArtifacts(JSON.parse(stored));
    }
  }, []);

  const handleLike = (id: string) => {
    if (!user) {
      toast.error('Please login to like artifacts');
      return;
    }

    const isCurrentlyLiked = likedArtifacts.includes(id);
    let newLikedArtifacts: string[];

    if (isCurrentlyLiked) {
      newLikedArtifacts = likedArtifacts.filter(artId => artId !== id);
      toast.success('Removed from liked artifacts');
    } else {
      newLikedArtifacts = [...likedArtifacts, id];
      toast.success('Added to liked artifacts');
    }

    setLikedArtifacts(newLikedArtifacts);
    localStorage.setItem('likedArtifacts', JSON.stringify(newLikedArtifacts));

    // Update artifact like count
    setArtifacts(artifacts.map(artifact => {
      if (artifact.id === id) {
        return {
          ...artifact,
          likeCount: isCurrentlyLiked ? artifact.likeCount - 1 : artifact.likeCount + 1
        };
      }
      return artifact;
    }));
  };

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1707068226685-27a15039f19b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwYXJ0aWZhY3RzJTIwbXVzZXVtfGVufDF8fHx8MTc2MjQ4MzQ3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Discover Ancient Treasures',
      subtitle: 'Explore the world\'s most fascinating historical artifacts'
    },
    {
      image: 'https://images.unsplash.com/photo-1588420914913-51f1d4f8f5cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3NldHRhJTIwc3RvbmUlMjBoaXN0b3J5fGVufDF8fHx8MTc2MjUwMzk3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Preserve History Together',
      subtitle: 'Contribute to our growing database of historical artifacts'
    },
    {
      image: 'https://images.unsplash.com/photo-1676115388797-5f448ad78e44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwc2Nyb2xsJTIwbWFudXNjcmlwdHxlbnwxfHx8fDE3NjI1MDM5Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Connect With History',
      subtitle: 'Join a community passionate about archaeological heritage'
    }
  ];

  const stats = [
    { icon: Shield, label: 'Artifacts', value: '15K+' },
    { icon: Users, label: 'Contributors', value: '5K+' },
    { icon: Globe, label: 'Countries', value: '120+' },
    { icon: Award, label: 'Museums', value: '500+' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Hero Carousel */}
      <section className="relative">
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[600px] overflow-hidden">
                  <ImageWithFallback
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                  <div className="absolute inset-0 flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl"
                      >
                        <h1 className="text-6xl text-white mb-4">
                          {slide.title}
                        </h1>
                        <p className="text-2xl text-amber-100 mb-8">
                          {slide.subtitle}
                        </p>
                        <div className="flex gap-4">
                          <Link to="/artifacts">
                            <Button size="lg" className="bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900">
                              Explore Artifacts
                              <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                          </Link>
                          {user && (
                            <Link to="/add-artifact">
                              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                                Add Artifact
                              </Button>
                            </Link>
                          )}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-amber-800 to-amber-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-700 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-amber-200" />
                  </div>
                  <div className="text-4xl text-white mb-2">{stat.value}</div>
                  <div className="text-amber-200">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Artifacts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl text-slate-900 mb-4">
              Featured Artifacts
            </h2>
            <p className="text-xl text-slate-600">
              Most liked artifacts from our collection
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {artifacts.map((artifact) => (
              <ArtifactCard
                key={artifact.id}
                artifact={artifact}
                onLike={handleLike}
                isLiked={likedArtifacts.includes(artifact.id)}
              />
            ))}
          </div>

          <div className="text-center">
            <Link to="/artifacts">
              <Button size="lg" className="bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900">
                See All Artifacts
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl text-slate-900 mb-4">
              Why ArtifactVault?
            </h2>
            <p className="text-xl text-slate-600">
              The premier platform for historical artifact documentation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Verified Information',
                description: 'All artifacts are documented with verified historical information and sources'
              },
              {
                icon: Users,
                title: 'Community Driven',
                description: 'Join archaeologists, historians, and enthusiasts from around the world'
              },
              {
                icon: TrendingUp,
                title: 'Growing Collection',
                description: 'New artifacts added daily, expanding our comprehensive database'
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-8 rounded-2xl border-2 border-amber-200 hover:border-amber-400 hover:shadow-xl transition-all"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4">
              Journey Through Time
            </h2>
            <p className="text-xl text-slate-300">
              From ancient civilizations to medieval empires
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { era: '3000 BC', label: 'Ancient Egypt', count: '450+' },
              { era: '1000 BC', label: 'Classical Greece', count: '320+' },
              { era: '100 AD', label: 'Roman Empire', count: '280+' },
              { era: '1000 AD', label: 'Medieval Period', count: '190+' }
            ].map((period, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 bg-slate-800/50 backdrop-blur rounded-xl border border-slate-700 hover:border-amber-500 transition-all text-center"
              >
                <Clock className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                <div className="text-2xl text-amber-400 mb-2">{period.era}</div>
                <div className="text-slate-300 mb-1">{period.label}</div>
                <div className="text-slate-400">{period.count} artifacts</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
