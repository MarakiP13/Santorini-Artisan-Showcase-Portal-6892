import { useMemo } from 'react';
import { mockArtists } from '../data/mockArtists';

export function useRecommendations(currentArtist, limit = 4) {
  return useMemo(() => {
    if (!currentArtist) return [];

    // Calculate similarity scores for each artist
    const artistScores = mockArtists
      .filter(artist => artist.id !== currentArtist.id)
      .map(artist => {
        let score = 0;

        // Same category
        if (artist.category === currentArtist.category) {
          score += 3;
        }

        // Shared mediums
        const sharedMediums = artist.mediums.filter(medium => 
          currentArtist.mediums.includes(medium)
        );
        score += sharedMediums.length * 2;

        // Shared tags
        const sharedTags = artist.tags.filter(tag => 
          currentArtist.tags.includes(tag)
        );
        score += sharedTags.length;

        // Same location
        if (artist.location.split(',')[0] === currentArtist.location.split(',')[0]) {
          score += 1;
        }

        return {
          artist,
          score
        };
      });

    // Sort by score and return top recommendations
    return artistScores
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(({ artist }) => artist);
  }, [currentArtist, limit]);
}