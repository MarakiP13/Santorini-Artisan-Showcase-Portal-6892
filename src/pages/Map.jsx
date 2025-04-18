import { useState } from 'react';
import { motion } from 'framer-motion';
import ReactECharts from 'echarts-for-react';
import { mockArtists } from '../data/mockArtists';
import ArtistCard from '../components/ArtistCard';

export default function Map() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  
  // Santorini map coordinates for different locations
  const locations = {
    'Oia': [25.3767, 36.4624],
    'Fira': [25.4317, 36.4168],
    'Imerovigli': [25.4285, 36.4350],
    'Pyrgos': [25.4627, 36.3781],
    'Kamari': [25.4817, 36.3772],
  };

  const mapOptions = {
    backgroundColor: '#f0f9ff',
    geo: {
      map: 'santorini',
      roam: true,
      label: {
        show: true,
        color: '#0c4a6e',
        fontSize: 12,
      },
      itemStyle: {
        areaColor: '#e0f2fe',
        borderColor: '#0ea5e9',
        borderWidth: 1.5,
      },
      emphasis: {
        itemStyle: {
          areaColor: '#bae6fd',
        },
        label: {
          color: '#0c4a6e',
        },
      },
      regions: [{
        name: 'Santorini',
        itemStyle: {
          areaColor: '#e0f2fe',
        },
      }],
    },
    series: [
      {
        name: 'Artisans',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: mockArtists.map(artist => ({
          name: artist.name,
          value: [...locations[artist.location.split(',')[0].trim()], artist.id],
          itemStyle: {
            color: '#0ea5e9',
          },
        })),
        symbolSize: 15,
        label: {
          show: true,
          formatter: '{b}',
          position: 'right',
        },
        emphasis: {
          scale: 1.5,
          label: {
            show: true,
          },
        },
      },
    ],
    tooltip: {
      trigger: 'item',
      formatter: params => {
        const artist = mockArtists.find(a => a.id === params.value[2]);
        return `
          <div class="font-sans">
            <strong>${artist.name}</strong><br/>
            ${artist.craft}<br/>
            ${artist.location}
          </div>
        `;
      },
    },
  };

  const onChartClick = (params) => {
    if (params.value) {
      const artistId = params.value[2];
      setSelectedLocation(artistId);
    }
  };

  const selectedArtist = mockArtists.find(a => a.id === selectedLocation);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <h1 className="text-4xl font-serif text-aegean-800 text-center mb-8">
          Discover Artisans Across Santorini
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-4">
            <ReactECharts
              option={mapOptions}
              style={{ height: '600px' }}
              onEvents={{
                click: onChartClick
              }}
            />
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-serif text-aegean-800 mb-4">
                Locations
              </h2>
              <div className="space-y-2">
                {Object.keys(locations).map(location => (
                  <button
                    key={location}
                    className="block w-full text-left px-4 py-2 rounded-lg hover:bg-sand-50
                             text-aegean-700 hover:text-aegean-900 transition-colors"
                    onClick={() => {
                      const artist = mockArtists.find(a => 
                        a.location.includes(location)
                      );
                      if (artist) setSelectedLocation(artist.id);
                    }}
                  >
                    {location}
                  </button>
                ))}
              </div>
            </div>

            {selectedArtist && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-lg shadow-lg"
              >
                <ArtistCard artist={selectedArtist} />
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}