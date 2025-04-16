import React from "react";
import { Project } from "@interfaces/common";
interface Project2Props {
  project: Project;
}

const Project2: React.FC<Project2Props> = ({ project }) => {
  const { img, alt, title, description } = project;
  return (
    <>
      <img className="project__img" src={img} alt={alt} />
      <div className="project__metadata">
        <h3 className="project__metadata__title">{title}</h3>
        <p>{description}</p>
      </div>
    </>
  );
};

export default Project2;
