import React, { useState, useRef, useEffect } from "react";
import Project from "./project";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const ProjectWrapper = ({ href, title, imgName, color, description }) => {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);
  const descriptionRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  const toggleDescription = () => {
    setDescriptionVisible((prev) => !prev);
    setMaxHeight(
      isDescriptionVisible ? "0px" : `${descriptionRef.current.scrollHeight}px`
    );
  };

  // Update maxHeight on window resize and initially on component mount
  useEffect(() => {
    if (isDescriptionVisible && descriptionRef.current) {
      const updateMaxHeight = () => {
        setMaxHeight(`${descriptionRef.current.scrollHeight}px`);
      };
      window.addEventListener("resize", updateMaxHeight);
      updateMaxHeight(); // Ensure correct height on initial load

      return () => {
        window.removeEventListener("resize", updateMaxHeight);
      };
    }
  }, [isDescriptionVisible, descriptionRef.current]);

  return (
    <div className="relative mb-4">
      <div className="relative">
        <Project href={href} title={title} imgName={imgName} color={color} />
        <div
          onClick={toggleDescription}
          className="absolute bottom-0 right-0 mb-1 mr-2 flex items-center justify-center rounded-full cursor-pointer"
          style={{ width: "29px", height: "29px", backgroundColor: color }}
          aria-label="Toggle Description"
        >
          {isDescriptionVisible ? (
            <MdKeyboardArrowUp />
          ) : (
            <MdKeyboardArrowDown />
          )}
        </div>
      </div>
      <div
        ref={descriptionRef}
        style={{
          maxHeight,
          transition: "max-height 0.5s ease, opacity 0.5s ease",
          overflow: "hidden",
          opacity: isDescriptionVisible ? 1 : 0,
        }}
      >
        <div className="mt-2 p-3 bg-white border-t border-gray-200">
          <p className="text-sm text-black">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectWrapper;
