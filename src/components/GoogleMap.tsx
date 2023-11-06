import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 53.5488,
  lng: 9.9872,
};

export default function GoogleMapsComponent() {
  const exampleProject = {
    id: 1,
    title: "Example Project",
    description: "This is an example project.",
    address: "Hofdurchgang Steinschanze 2–4",
    city: "Hamburg",
    country: "Germany",
  };

  const [map, setMap] = useState<any>(null);
  const [projectLatLng, setProjectLatLng] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  useEffect(() => {
    if (map && exampleProject) {
      const geocoder = new window.google.maps.Geocoder();

      geocoder.geocode(
        { address: exampleProject.address },
        (results, status) => {
          if (status === "OK" && results && results.length > 0) {
            const { lat, lng } = results[0].geometry.location;
            setProjectLatLng({ lat: lat(), lng: lng() });
          } else {
            console.error("Geocoding failed:", status);
          }
        }
      );
    }
  }, [map, exampleProject]);

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
          zoom={11}
          onLoad={(map) => setMap(map)}
        >
          {projectLatLng && (
            <Marker
              position={projectLatLng}
              title={exampleProject.title}
              label="Yo"
            />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
