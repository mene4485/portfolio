import React from "react";
import ProjectWrapper from "./ProjectWrapper"; // Adjust the import path as needed
import projects from "../files/projects.json"; // Adjust the import path according to your project structure

const ProjectsList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project, index) => (
        <ProjectWrapper
          key={index}
          href={project.href}
          title={project.title}
          imgName={project.imgName}
          color={project.color}
          description={project.description}
        />
      ))}
    </div>
  );
};

export default ProjectsList;
