import React, { useEffect } from 'react';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import 'ol/ol.css'; 

const MapComponent = () => {
  useEffect(() => {
    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        projection: 'EPSG:4326',
        center: [79.218764, 20.527135],
        zoom: 4.8,
      }),
    });

    return () => {
      map.setTarget(null);
    };
  }, []); 

  return React.createElement('div', { id: 'map', style: { width: '100%', height: '600px' } });
};

export default MapComponent;
