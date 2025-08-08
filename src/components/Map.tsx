import React from 'react';
import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  center: [number, number];
  zoom: number;
  markers?: { position: [number, number]; label: string }[];
  className?: string;
}

export const Map: React.FC<MapProps> = ({ center, zoom, markers = [], className }) => {
  return (
    <MapContainer center={center} zoom={zoom} className={`h-64 ${className}`} aria-label="Map">
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position}>
          <Popup>{marker.label}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

Map.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  zoom: PropTypes.number.isRequired,
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  className: PropTypes.string,
};