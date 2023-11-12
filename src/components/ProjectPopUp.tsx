import React from "react";
import { ProjectPopUpProps } from "../types";

export default function ProjectPopUp({ project }: ProjectPopUpProps) {

  const openGoogleMaps = () => {
    const mapsUrl = `https://www.google.com/maps?q=${project.lat},${project.lng}`;
    window.open(mapsUrl, "_blank");
  };
  
  return (
    <div className="project-popup">
      <img
        className="project-popup__project-image"
        src={`images/${project.id}.webp`}
        alt="image"
      />
      <h2 className="project-popup__project-title">{project.title}</h2>
      <p className="project-popup__project-architect">
      <strong>Architect:</strong> {project.architect}
      </p>
      <p className="project-popup__project-description">
        {project.description}
      </p>
      <div className="project-popup__google-maps-button" onClick={openGoogleMaps}>
        Get directions
      </div>
    </div>
  );
}
