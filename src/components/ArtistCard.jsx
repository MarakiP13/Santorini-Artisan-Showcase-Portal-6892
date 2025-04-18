import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function ArtistCard({ artist }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="aspect-w-4 aspect-h-3">
        <img
          src={artist.coverImage}
          alt={artist.name}
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-serif text-aegean-800 mb-2">{artist.name}</h3>
        <p className="text-aegean-600 mb-4">{artist.craft}</p>
        <div className="flex items-center text-sand-600 mb-4">
          <FaMapMarkerAlt className="mr-2" />
          <span>{artist.location}</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {artist.tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 bg-sand-100 text-sand-800 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          to={`/artisans/${artist.id}`}
          className="inline-block w-full text-center bg-aegean-600 text-white py-2 rounded-lg
                   hover:bg-aegean-700 transition-colors"
        >
          View Portfolio
        </Link>
      </div>
    </motion.div>
  );
}