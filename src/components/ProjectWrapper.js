import React, { useState } from "react";
import Project from "./project"; // Ensure this path matches your project structure
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"; // Importing the icons

const ProjectWrapper = ({ href, title, imgName, color, description }) => {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <div className="relative mb-4">
      {" "}
      {/* Added margin bottom for spacing between project blocks */}
      <div className="relative">
        {/* Project Component */}
        <Project href={href} title={title} imgName={imgName} color={color} />

        <div
          onClick={toggleDescription}
          className="absolute bottom-0 right-0 mb-1 mr-2 flex items-center justify-cente rounded-full cursor-pointer"
          style={{ width: "29px", height: "29px", backgroundColor: color }} // Set a fixed size for the icon container
          aria-label="Toggle Description"
        >
          {isDescriptionVisible ? (
            <MdKeyboardArrowUp />
          ) : (
            <MdKeyboardArrowDown />
          )}
        </div>
      </div>
      {/* Project Description - Appears below the project component */}
      {isDescriptionVisible && (
        <div className="mt-2 p-3 bg-white border-t border-gray-200">
          <p className="text-sm text-black">{description}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectWrapper;
