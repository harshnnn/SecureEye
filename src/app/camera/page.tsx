"use client"
import { useState, useEffect } from 'react';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import BingMaps from 'ol/source/BingMaps.js';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Icon } from 'ol/style';

const AddCamera = () => {
  const [formData, setFormData] = useState({
    ownerName: '',
    location: '',
    modelName: '',
    visibility: 'public', // Default value for visibility
  });

  useEffect(() => {
    const map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'map',
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });

    // Clean up OpenLayers map on component unmount
    return () => {
      map.setTarget(null);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLocationClick = async () => {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lon = position.coords.longitude;
            const lat = position.coords.latitude;
            
            // Update formData's location
            setFormData({ ...formData, location: `${lat}, ${lon}` });
            
            // Center map to the current location
            const map = new Map({
              target: 'map',
              layers: [
                new TileLayer({
                  source: new OSM(),
                }),
              ],
              view: new View({
                center: fromLonLat([lon, lat]),
                zoom: 15,
              }),
            });

            // Add a marker to the current location
            const marker = new Feature({
              geometry: new Point(fromLonLat([lon, lat])),
            });
            const markerLayer = new VectorLayer({
              source: new VectorSource({
                features: [marker],
              }),
            });
            map.addLayer(markerLayer);
          },
          (error) => {
            if (error.code === error.PERMISSION_DENIED) {
              console.error('Permission denied for location');
              alert("Location Access has been blocked");
            } else {
              console.error('Error getting location:', error);
            }
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4 text-white">Add Camera</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium text-white">Owner's Name:</label>
          <input
            type="text"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3"
          />
        </div>
        <div>
          <label className="block font-medium text-white">Location:</label>
          <button
            type="button"
            onClick={handleLocationClick}
            className="block border border-gray-300 rounded-md py-2 px-3 mt-1 text-white"
          >
            Get Current Location
          </button>
          {/* Display current location */}
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1"
          />
        </div>
        <div>
          <label className="block font-medium text-white">Model Name:</label>
          <input
            type="text"
            name="modelName"
            value={formData.modelName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3"
          />
        </div>
        <div>
          <label className="block font-medium text-white">Visibility:</label>
          <select
            name="visibility"
            value={formData.visibility}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3"
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600">
          Submit
        </button>
      </form>

      {/* OpenLayers Map */}
      <div id="map" className="mt-8" style={{ width: '100%', height: '400px' }}></div>
    </div>
  );
};

export default AddCamera;
