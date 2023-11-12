import React from "react";
import { ProjectPopUpProps } from "../types";

export default function ProjectPopUp({ project }: ProjectPopUpProps) {
  return (
    <div className="project-popup">
      <img
        className="project-popup__project-image"
        src={`images/${project.id}.webp`}
        alt="image"
      />
      <h2 className="project-popup__project-title">{project.title}</h2>
      <p className="project-popup__project-architect">
        Architect: {project.architect}
      </p>
    </div>
  );
}
