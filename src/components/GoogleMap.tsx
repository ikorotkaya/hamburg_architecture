import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { GoogleMapProps } from "../types";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 53.5488,
  lng: 9.9872,
};

export default function GoogleMapsComponent({projects}: GoogleMapProps) {
  return (
    <div className="map_container">
      <LoadScript
        googleMapsApiKey={
          process.env.REACT_APP_GOOGLE_MAPS_API_KEY !== undefined
            ? process.env.REACT_APP_GOOGLE_MAPS_API_KEY
            : ""
        }
      >
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={11}>
          {/* Add markers, polygons, or other map elements here */}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
