import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import WaveBackground from '../components/WaveBackground';

export default function Home() {
  return (
    <div className="relative">
      <div className="h-[70vh] relative overflow-hidden">
        <WaveBackground />
        
        <div className="absolute inset-0 flex items-center justify-center text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl px-4"
          >
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
              Discover Santorini's Finest Artisans
            </h1>
            <p className="text-xl text-sand-100 mb-8">
              Explore the rich tradition of craftsmanship nestled in the heart of the Aegean
            </p>
            <Link
              to="/artisans"
              className="inline-block bg-sand-400 text-aegean-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-sand-500 transition-colors"
            >
              Meet Our Artisans
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h3 className="text-2xl font-serif text-aegean-800 mb-4">Local Craftsmen</h3>
            <p className="text-aegean-600">
              Discover talented artisans preserving traditional crafts and creating contemporary masterpieces
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <h3 className="text-2xl font-serif text-aegean-800 mb-4">Unique Events</h3>
            <p className="text-aegean-600">
              Join workshops, exhibitions, and cultural events celebrating local artistry
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl font-serif text-aegean-800 mb-4">Island Stories</h3>
            <p className="text-aegean-600">
              Read about the people, traditions, and stories that make Santorini's craft scene unique
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}