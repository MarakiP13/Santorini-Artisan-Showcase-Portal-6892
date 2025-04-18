import { useState, useEffect } from 'react';
import { mockArtists } from '../data/mockArtists';

// Enhanced mock data with more details
const mockArtistsDetails = {
  '1': {
    ...mockArtists.find(a => a.id === '1'),
    bio: "Creating traditional Cycladic pottery with a modern twist. Each piece tells a story of our island's rich heritage. Working from my sun-drenched studio in Oia, I combine ancient techniques with contemporary designs.",
    phone: '+30 2286 071234',
    email: 'maria@example.com',
    instagram: 'mariaceramics',
    portfolio: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1578749556591-ea5c7a45f59a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        title: 'Blue Aegean Collection',
        description: 'Inspired by the colors of the Aegean Sea'
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1565193298979-3b6dc6d9f147?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        title: 'Traditional Vases',
        description: 'Hand-crafted using ancient techniques'
      }
    ]
  },
  '2': {
    ...mockArtists.find(a => a.id === '2'),
    bio: "Transforming molten glass into contemporary pieces that capture the essence of Santorini. My work is inspired by the volcanic landscape and the ever-changing colors of the caldera.",
    phone: '+30 2286 071235',
    email: 'dimitris@example.com',
    instagram: 'dimitrisglass',
    portfolio: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        title: 'Volcanic Series',
        description: 'Glass sculptures inspired by lava flows'
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1577955096765-a639cae0051b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        title: 'Ocean Waves',
        description: 'Capturing the movement of the Aegean'
      }
    ]
  }
};

export function useArtist(id) {
  const [artist, setArtist] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        setIsLoading(true);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const artistData = mockArtistsDetails[id] || mockArtists.find(a => a.id === id);
        if (!artistData) {
          throw new Error('Artist not found');
        }
        
        setArtist(artistData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setArtist(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArtist();
  }, [id]);

  return { artist, isLoading, error };
}