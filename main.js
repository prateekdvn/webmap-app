import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const indiaExtent = [68.1766451354, 6.7544924994, 97.4025614766, 35.504287014];

const center = fromLonLat([(indiaExtent[0] + indiaExtent[2]) / 2, (indiaExtent[1] + indiaExtent[3]) / 2]);

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    extent: indiaExtent,
    center: center,
    zoom: 6
  })
});
