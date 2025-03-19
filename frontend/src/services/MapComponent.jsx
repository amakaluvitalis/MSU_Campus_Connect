import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -1.286389,
  lng: 36.817223,
};

// Get API key from .env
const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const MapComponent = () => {
  if (!googleMapsApiKey) {
    console.error("Google Maps API key is missing!");
    return <p>Error: Google Maps API key is not set.</p>;
  }

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
