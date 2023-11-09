import React from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import pin from "../images/pin.svg";

import { GoogleMapsComponentProps } from "../types";
const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 53.5488,
  lng: 9.9872,
};

export default function GoogleMapsComponent({
  projects,
}: GoogleMapsComponentProps) {
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
          {projects && projects.map((project, index) => (
            <MarkerF
              key={index}
              position={{ lat: Number(project.lat), lng: Number(project.lng) }}
              title={project.title}
              options={{
                icon: {
                  url: pin,
                  scaledSize: new window.google.maps.Size(15, 15),
                },
              }}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
