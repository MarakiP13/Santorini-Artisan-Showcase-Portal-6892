import { useState } from 'react';
import { motion } from 'framer-motion';
import ArtistCard from '../components/ArtistCard';
import FilterSystem from '../components/FilterSystem';
import { mockArtists } from '../data/mockArtists';
import { craftCategories } from '../data/categories';

export default function Artisans() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedMediums, setSelectedMediums] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);

  const filteredArtists = mockArtists.filter(artist => {
    // Search filter
    const matchesSearch = artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artist.craft.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artist.description.toLowerCase().includes(searchTerm.toLowerCase());

    // Category filter
    const matchesCategory = !selectedCategory || artist.category === selectedCategory;

    // Mediums filter
    const matchesMediums = selectedMediums.length === 0 || 
                          selectedMediums.some(medium => artist.mediums.includes(medium));

    // Additional filters
    const matchesActiveFilters = activeFilters.length === 0 ||
                                activeFilters.every(filter => artist.tags.includes(filter));

    return matchesSearch && matchesCategory && matchesMediums && matchesActiveFilters;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-serif text-aegean-800 mb-8 text-center"
      >
        Discover Our Artisans
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <FilterSystem
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedMediums={selectedMediums}
            setSelectedMediums={setSelectedMediums}
            activeFilters={activeFilters}
            setActiveFilters={setActiveFilters}
          />
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Search Bar */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search artisans by name, craft, or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-aegean-200 
                       focus:outline-none focus:ring-2 focus:ring-aegean-500"
            />
          </div>

          {/* Results */}
          {filteredArtists.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-aegean-600 text-lg">
                No artisans found matching your criteria
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredArtists.map(artist => (
                <ArtistCard key={artist.id} artist={artist} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}