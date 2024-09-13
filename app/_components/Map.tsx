"use client";

import L from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

interface MapInterface {
  center?: number[];
}

const Map = ({ center }: MapInterface) => {
  return (
    <MapContainer
      center={(center as L.LatLngExpression) || [42.3131807, -103.121914]}
      zoom={center ? 4 : 2}
      scrollWheelZoom={true}
      className="h-[35vh] rounded-lg"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {center && (
        <Marker position={center as L.LatLngExpression} />
      )}
    </MapContainer>
  );
};

export default Map;
