import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa';

export default function ArtistHeader({ artist }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative mb-12"
    >
      <div className="h-64 md:h-96 overflow-hidden">
        <img 
          src={artist.coverImage} 
          alt={artist.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end md:items-center gap-6">
            <img 
              src={artist.profileImage} 
              alt={artist.name} 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white object-cover"
            />
            <div className="flex-grow pb-4">
              <h1 className="text-3xl md:text-4xl font-serif text-white mb-2">
                {artist.name}
              </h1>
              <p className="text-xl text-sand-100 mb-4">{artist.craft}</p>
              <div className="flex flex-wrap gap-4 text-sand-100">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>{artist.location}</span>
                </div>
                {artist.phone && (
                  <div className="flex items-center">
                    <FaPhone className="mr-2" />
                    <span>{artist.phone}</span>
                  </div>
                )}
                {artist.email && (
                  <div className="flex items-center">
                    <FaEnvelope className="mr-2" />
                    <span>{artist.email}</span>
                  </div>
                )}
                {artist.instagram && (
                  <a 
                    href={`https://instagram.com/${artist.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-sand-300 transition-colors"
                  >
                    <FaInstagram className="mr-2" />
                    <span>@{artist.instagram}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}