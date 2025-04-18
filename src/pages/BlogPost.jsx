import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendar, FaUser, FaTags } from 'react-icons/fa';
import { blogPosts } from '../data/blogPosts';

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-serif text-aegean-800">Post not found</h2>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <header className="text-center">
          <h1 className="text-4xl font-serif text-aegean-800 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center justify-center text-aegean-600 space-x-6">
            <span className="flex items-center">
              <FaCalendar className="mr-2" />
              {post.date}
            </span>
            <span className="flex items-center">
              <FaUser className="mr-2" />
              {post.author}
            </span>
          </div>
        </header>

        <div className="aspect-w-16 aspect-h-9">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

        <div className="prose max-w-none text-aegean-700">
          {post.content.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        <footer className="border-t border-aegean-100 pt-6">
          <div className="flex items-center">
            <FaTags className="text-aegean-600 mr-2" />
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-sand-100 text-sand-800 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </footer>
      </motion.div>
    </article>
  );
}