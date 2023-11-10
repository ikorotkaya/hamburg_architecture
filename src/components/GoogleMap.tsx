import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";
import pin from "../images/pin.svg";

import { GoogleMapsComponentProps } from "../types";
import ProjectPopUp from "./ProjectPopUp";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 53.5488,
  lng: 9.9872,
};

const googleMapOptions = {
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
  maxZoom: 16,
  minZoom: 5,
};

export default function GoogleMapsComponent({
  projects,
}: GoogleMapsComponentProps) {
  const [isGoogleMapsLoaded, setIsGoogleMapsLoaded] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  const handleMarkerClick = (projectId: number | null) => {
    setSelectedProjectId(projectId);
  };

  const handleGoogleMapsLoad = () => {
    setIsGoogleMapsLoaded(true);
  };

  return (
    <div className="map_container">
      <LoadScript
        googleMapsApiKey={
          process.env.REACT_APP_GOOGLE_MAPS_API_KEY !== undefined
            ? process.env.REACT_APP_GOOGLE_MAPS_API_KEY
            : ""
        }
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          options={googleMapOptions}
          onLoad={handleGoogleMapsLoad}
          zoom={11}
        >
          {isGoogleMapsLoaded &&
            projects.map((project, index) => (
              <MarkerF
                key={index}
                position={{
                  lat: Number(project.lat),
                  lng: Number(project.lng),
                }}
                title={project.title}
                options={{
                  icon: {
                    url: pin,
                    scaledSize: new window.google.maps.Size(15, 15),
                  },
                }}
                onClick={() => handleMarkerClick(project.id)}
              >
                {selectedProjectId === project.id && (
                  <InfoWindowF
                    position={{
                      lat: Number(project.lat),
                      lng: Number(project.lng),
                    }}
                    onCloseClick={() => handleMarkerClick(null)}
                    options={{ disableAutoPan: false }}
                  >
                    <ProjectPopUp project={project} />
                  </InfoWindowF>
                )}
              </MarkerF>
            ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
