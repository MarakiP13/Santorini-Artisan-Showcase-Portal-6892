import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaPaintBrush, FaGem, FaSocks, FaChessRook, 
  FaWineGlass, FaPalette, FaTimes, FaFilter 
} from 'react-icons/fa';
import { craftCategories } from '../data/categories';

const icons = {
  FaPaintBrush,
  FaGem,
  FaSocks,
  FaChessRook,
  FaWineGlass,
  FaPalette
};

export default function FilterSystem({ 
  selectedCategory,
  setSelectedCategory,
  selectedMediums,
  setSelectedMediums,
  activeFilters,
  setActiveFilters
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      setSelectedMediums([]);
    } else {
      setSelectedCategory(category);
      setSelectedMediums([]);
    }
  };

  const handleMediumToggle = (medium) => {
    setSelectedMediums(prev => {
      if (prev.includes(medium)) {
        return prev.filter(m => m !== medium);
      }
      return [...prev, medium];
    });
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedMediums([]);
    setActiveFilters([]);
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-serif text-aegean-800">Filters</h2>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="lg:hidden bg-aegean-50 text-aegean-600 p-2 rounded-lg
                   hover:bg-aegean-100 transition-colors"
        >
          <FaFilter />
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isExpanded ? 'auto' : 'auto' }}
        className={`lg:block ${isExpanded ? 'block' : 'hidden'}`}
      >
        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-2 mb-6">
          {Object.entries(craftCategories).map(([key, category]) => {
            const Icon = icons[category.icon];
            return (
              <motion.button
                key={key}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCategoryClick(key)}
                className={`flex items-center p-3 rounded-lg transition-colors ${
                  selectedCategory === key
                    ? 'bg-aegean-600 text-white'
                    : 'bg-aegean-50 text-aegean-600 hover:bg-aegean-100'
                }`}
              >
                <Icon className="mr-2" />
                <span>{category.name}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Mediums */}
        <AnimatePresence>
          {selectedCategory && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <h3 className="text-lg font-serif text-aegean-700 mb-3">
                {craftCategories[selectedCategory].name} Mediums
              </h3>
              <div className="flex flex-wrap gap-2">
                {craftCategories[selectedCategory].mediums.map(medium => (
                  <button
                    key={medium}
                    onClick={() => handleMediumToggle(medium)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      selectedMediums.includes(medium)
                        ? 'bg-sand-500 text-white'
                        : 'bg-sand-100 text-sand-800 hover:bg-sand-200'
                    }`}
                  >
                    {medium}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Active Filters */}
        {(selectedCategory || selectedMediums.length > 0 || activeFilters.length > 0) && (
          <div className="mt-6 pt-6 border-t border-aegean-100">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-serif text-aegean-700">Active Filters</h3>
              <button
                onClick={clearFilters}
                className="text-sm text-aegean-600 hover:text-aegean-800"
              >
                Clear all
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedCategory && (
                <span className="px-3 py-1 bg-aegean-100 text-aegean-800 rounded-full text-sm flex items-center">
                  {craftCategories[selectedCategory].name}
                  <button
                    onClick={() => handleCategoryClick(selectedCategory)}
                    className="ml-2 text-aegean-600 hover:text-aegean-800"
                  >
                    <FaTimes size={12} />
                  </button>
                </span>
              )}
              {selectedMediums.map(medium => (
                <span
                  key={medium}
                  className="px-3 py-1 bg-sand-100 text-sand-800 rounded-full text-sm flex items-center"
                >
                  {medium}
                  <button
                    onClick={() => handleMediumToggle(medium)}
                    className="ml-2 text-sand-600 hover:text-sand-800"
                  >
                    <FaTimes size={12} />
                  </button>
                </span>
              ))}
              {activeFilters.map(filter => (
                <span
                  key={filter}
                  className="px-3 py-1 bg-sand-100 text-sand-800 rounded-full text-sm flex items-center"
                >
                  {filter}
                  <button
                    onClick={() => setActiveFilters(prev => prev.filter(f => f !== filter))}
                    className="ml-2 text-sand-600 hover:text-sand-800"
                  >
                    <FaTimes size={12} />
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}