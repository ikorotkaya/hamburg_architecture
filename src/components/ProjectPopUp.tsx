import React from "react";
import { ProjectPopUpProps } from "../types";
import { useTranslation } from "react-i18next";

export default function ProjectPopUp({ project, locale }: ProjectPopUpProps) {
  const { t } = useTranslation();

  const projectDescription = (
    project.description as unknown as { [key: string]: string }
  )[locale];
  const projectTitle = (project.title as unknown as { [key: string]: string })[
    locale
  ];

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
      <h2 className="project-popup__project-title">{projectTitle}</h2>
      <p className="project-popup__project-architect">
        <strong>{t("architect")}:</strong> {project.architect}
      </p>
      <p className="project-popup__project-description">{projectDescription}</p>
      <div
        className="project-popup__google-maps-button"
        onClick={openGoogleMaps}
      >
        Get directions
      </div>
    </div>
  );
}
