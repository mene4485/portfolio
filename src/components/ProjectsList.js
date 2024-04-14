import React, { useState, useEffect } from "react";
import ProjectWrapper from "./ProjectWrapper";

const ProjectsList = ({ jsonFilePath }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const loadProjects = async () => {
      if (jsonFilePath) {
        try {
          const response = await import(`../files/${jsonFilePath}`);
          console.log("response", response.default);
          setProjects(response.default);
        } catch (error) {
          console.error("Failed to load projects data:", error);
          setProjects([]); // Handle errors or set to an empty array if the file can't be loaded
        }
      }
    };

    loadProjects();
  }, [jsonFilePath]); // Effect dependency on jsonFilePath

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
