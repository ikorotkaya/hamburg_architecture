import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { GoogleMapProps } from "../types";

const containerStyle = {
  width: "800px",
  height: "400px",
};

const center = {
  lat: 52.52, // Replace with your desired latitude
  lng: 13.405, // Replace with your desired longitude
};

console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

export default function GoogleMapsComponent({projects}: GoogleMapProps) {
  return (
    <div className="google-map">
      <LoadScript
        googleMapsApiKey={
          process.env.REACT_APP_GOOGLE_MAPS_API_KEY !== undefined
            ? process.env.REACT_APP_GOOGLE_MAPS_API_KEY
            : ""
        }
      >
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {/* Add markers, polygons, or other map elements here */}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
