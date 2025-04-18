import { motion } from 'framer-motion';

export default function ArtistBio({ artist }) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-8 mb-8"
    >
      <h2 className="text-2xl font-serif text-aegean-800 mb-6">About the Artist</h2>
      <div className="prose max-w-none text-aegean-600">
        <p className="whitespace-pre-line">{artist.bio}</p>
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-serif text-aegean-800 mb-4">Specialties</h3>
        <div className="flex flex-wrap gap-2">
          {artist.tags.map(tag => (
            <span
              key={tag}
              className="px-4 py-2 bg-sand-100 text-sand-800 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}