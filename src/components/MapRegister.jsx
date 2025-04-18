import { useEffect } from 'react';
import * as echarts from 'echarts';

// Simplified GeoJSON data for Santorini
const santoriniGeoJSON = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { name: 'Santorini' },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [25.3267, 36.4624], // Oia
          [25.4317, 36.4168], // Fira
          [25.4627, 36.3781], // Pyrgos
          [25.4817, 36.3772], // Kamari
          [25.3767, 36.3572], // Southern tip
          [25.3267, 36.4624], // Back to Oia
        ]],
      },
    },
  ],
};

export default function MapRegister() {
  useEffect(() => {
    echarts.registerMap('santorini', santoriniGeoJSON);
  }, []);

  return null;
}