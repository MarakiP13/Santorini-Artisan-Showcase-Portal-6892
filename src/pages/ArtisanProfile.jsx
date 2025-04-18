import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useArtist } from '../hooks/useArtist';
import { useRecommendations } from '../hooks/useRecommendations';
import ArtistHeader from '../components/ArtistProfile/ArtistHeader';
import ArtistBio from '../components/ArtistProfile/ArtistBio';
import ArtistGallery from '../components/ArtistProfile/ArtistGallery';
import ArtistRecommendations from '../components/ArtistRecommendations';

export default function ArtisanProfile() {
  const { id } = useParams();
  const { artist, isLoading, error } = useArtist(id);
  const recommendations = useRecommendations(artist);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-aegean-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center text-red-600">
          <h2 className="text-2xl font-serif mb-2">Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!artist) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center text-aegean-600">
          <h2 className="text-2xl font-serif mb-2">Artist Not Found</h2>
          <p>The artist you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pb-12"
    >
      <ArtistHeader artist={artist} />
      
      <div className="max-w-7xl mx-auto px-4 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ArtistGallery portfolio={artist.portfolio} />
            {recommendations.length > 0 && (
              <ArtistRecommendations
                currentArtist={artist}
                recommendations={recommendations}
              />
            )}
          </div>
          
          <div className="lg:col-span-1">
            <ArtistBio artist={artist} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}