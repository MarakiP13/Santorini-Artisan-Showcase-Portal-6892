import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function ArtistRecommendations({ currentArtist, recommendations }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-serif text-aegean-800 mb-6">
        Similar Artisans You Might Like
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recommendations.map((artist, index) => (
          <motion.div
            key={artist.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex space-x-4"
          >
            <div className="flex-shrink-0 w-24 h-24">
              <img
                src={artist.profileImage}
                alt={artist.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex-grow">
              <Link 
                to={`/artisans/${artist.id}`}
                className="text-lg font-serif text-aegean-800 hover:text-aegean-600 transition-colors"
              >
                {artist.name}
              </Link>
              <p className="text-aegean-600 text-sm mb-1">{artist.craft}</p>
              <div className="flex items-center text-sand-600 text-sm">
                <FaMapMarkerAlt className="mr-1" />
                <span>{artist.location}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}