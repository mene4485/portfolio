import React from "react";

const Project = ({ href, title, imgName, color }) => {
  return (
    // Add a hover effect using Tailwind CSS classes for scale and shadow
    <div className="relative rounded-lg overflow-hidden min-h-[200px] transition duration-300 ease-in-out transform hover:scale-101 hover:shadow-lg">
      <a href={href} target="_blank" rel="noreferrer">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={require("../images/" + imgName)}
          alt={title}
        />
        <div
          className={"absolute bottom-0 left-0 w-full pl-3 py-1"}
          style={{
            backgroundColor: color,
          }}
        >
          <h4 className="font-bold text-lg text-black">{title}</h4>
        </div>
      </a>
    </div>
  );
};

export default Project;
