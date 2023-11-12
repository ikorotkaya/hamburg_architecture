import React, { useState, useRef, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";
import Supercluster, { ClusterFeature, PointFeature } from "supercluster";

import rawProjects from "../data/final_projects.js";

import pin from "../images/pin.svg";
import clusterPinIcon from "../images/cluster-pin-icon.svg";
import pinActiveIcon from "../images/pin-active-icon.svg";

import { ProjectProps } from "../types";
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

const MIN_CLUSTER_POINTS = 3;

type Map = google.maps.Map & { zoom: number };
type ProjectCluster = ClusterFeature<{ project: ProjectProps }> & {
  properties: { project: ProjectProps };
};

export default function GoogleMapsComponent() {
  const [isGoogleMapsLoaded, setIsGoogleMapsLoaded] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null
  );

  const [projects, setProjects] = useState<ProjectProps[]>([]);

  const mapRef = useRef<Map>();
  const [zoom, setZoom] = useState<number>(12);
  const [bounds, setBounds] = useState<GeoJSON.BBox>([0, 0, 0, 0]);
  const [clusters, setClusters] = useState<ProjectCluster[]>([]);
  const [supercluster, setSupercluster] = useState<Supercluster>(
    new Supercluster({
      radius: 75,
      maxZoom: googleMapOptions.maxZoom,
      minPoints: MIN_CLUSTER_POINTS,
    })
  );

  const handleMarkerClick = (projectId: number | null) => {
    setSelectedProjectId(projectId);
  };

  const handleGoogleMapsLoad = (map: google.maps.Map) => {
    setIsGoogleMapsLoaded(true);
    mapRef.current = map as Map;
  };

  const handleClusterClick = ({
    id,
    lat,
    lng,
  }: {
    id: number;
    lat: number;
    lng: number;
  }) => {
    const expansionZoom = Math.min(
      supercluster.getClusterExpansionZoom(id),
      20
    );
    mapRef.current?.setZoom(expansionZoom);
    mapRef.current?.panTo({ lat, lng });
  };

  const getLabel = (pointCount: number): google.maps.MarkerLabel => {
    return {
      text: pointCount.toString(),
      color: "#FFF",
      fontWeight: "bold",
    };
  };

  const handleBoundsChanged = () => {
    if (mapRef.current) {
      const bounds = mapRef.current.getBounds()?.toJSON();

      setBounds([
        bounds?.west || 0, // eslint-disable-line @typescript-eslint/strict-boolean-expressions
        bounds?.south || 0, // eslint-disable-line @typescript-eslint/strict-boolean-expressions
        bounds?.east || 0, // eslint-disable-line @typescript-eslint/strict-boolean-expressions
        bounds?.north || 0, // eslint-disable-line @typescript-eslint/strict-boolean-expressions
      ]);
    }
  };

  const handleZoomChanged = () => {
    if (mapRef.current) {
      setZoom(mapRef.current?.zoom);
    }
  };

  const formatDataToGeoJsonPoints = (
    projects: ProjectProps[]
  ): GeoJSON.Feature<GeoJSON.Point>[] => {
    return projects.map((project) => ({
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [project.lng, project.lat],
      },
      properties: { cluster: false, project },
    }));
  };

  useEffect(() => {
    setProjects(rawProjects);
  }
  , []);

  useEffect(() => {
    const radius = (100 * googleMapOptions.maxZoom) / zoom;

    setSupercluster(
      new Supercluster({
        radius: radius,
        maxZoom: googleMapOptions.maxZoom,
        minPoints: MIN_CLUSTER_POINTS,
      })
    );
  }, [zoom]);

  useEffect(() => {
    if (mapRef.current) {
      supercluster.load(
        formatDataToGeoJsonPoints(projects) as PointFeature<
          GeoJSON.Feature<GeoJSON.Point>
        >[]
      );

      setClusters(supercluster.getClusters(bounds, zoom) as ProjectCluster[]);
    }
  }, [projects, bounds, zoom]);

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
          onBoundsChanged={handleBoundsChanged}
          onZoomChanged={handleZoomChanged}
          options={googleMapOptions}
          onLoad={handleGoogleMapsLoad}
          zoom={zoom}
        >
          {isGoogleMapsLoaded &&
            clusters.map(({ id, geometry, properties }) => {
              const [lng, lat] = geometry.coordinates;
              const { cluster, point_count } = properties;

              if (selectedProjectId !== null && cluster === true) {
                return null;
              }
              if (
                selectedProjectId !== null &&
                selectedProjectId !== properties.project.id
              ) {
                return null;
              }
              return cluster ? (
                <MarkerF
                  key={`cluster-${id}`}
                  onClick={() =>
                    handleClusterClick({ id: id as number, lat, lng })
                  }
                  position={{ lat, lng }}
                  options={{
                    icon: {
                      url: clusterPinIcon,
                      scaledSize: new window.google.maps.Size(48, 48),
                    },
                  }}
                  label={getLabel(point_count)}
                />
              ) : (
                <MarkerF
                  key={properties.project.id}
                  position={{
                    lat: Number(properties.project.lat),
                    lng: Number(properties.project.lng),
                  }}
                  title={properties.project.title}
                  options={{
                    icon: {
                      url:
                        selectedProjectId === properties.project.id
                          ? pinActiveIcon
                          : pin,
                      scaledSize:
                        selectedProjectId === properties.project.id
                          ? new window.google.maps.Size(60, 60)
                          : new window.google.maps.Size(30, 30),
                    },
                  }}
                  onClick={() => handleMarkerClick(properties.project.id)}
                >
                  {selectedProjectId === properties.project.id && (
                    <InfoWindowF
                      position={{
                        lat: Number(properties.project.lat),
                        lng: Number(properties.project.lng),
                      }}
                      onCloseClick={() => handleMarkerClick(null)}
                      options={{ disableAutoPan: false }}
                    >
                      <ProjectPopUp project={properties.project} />
                    </InfoWindowF>
                  )}
                </MarkerF>
              );
            })}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
