import React from "react";
import { ProjectsProps, ProjectProps } from "../types";

export default function Projects({projects}: ProjectsProps) {
  return (
    <>
      {projects.map((project: ProjectProps) => (
        <div key={project.id}>
          <p>{project.id}</p>
          <p>{project.description}</p>
        </div>
      ))}
    </>
  );
}
