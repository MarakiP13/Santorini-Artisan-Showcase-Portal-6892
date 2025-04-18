import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCalendar, FaUser } from 'react-icons/fa';
import { blogPosts } from '../data/blogPosts';

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="text-center">
          <h1 className="text-4xl font-serif text-aegean-800 mb-4">
            Artisan Stories & Insights
          </h1>
          <p className="text-aegean-600 max-w-2xl mx-auto">
            Discover the stories, techniques, and traditions behind Santorini's craft community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-aegean-600 text-sm mb-3 space-x-4">
                  <span className="flex items-center">
                    <FaCalendar className="mr-2" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <FaUser className="mr-2" />
                    {post.author}
                  </span>
                </div>
                <h2 className="text-xl font-serif text-aegean-800 mb-3">
                  {post.title}
                </h2>
                <p className="text-aegean-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-block text-aegean-600 hover:text-aegean-800 font-medium"
                >
                  Read More →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  );
}