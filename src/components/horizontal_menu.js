import React from "react";
import {
  MdOutlineAccountCircle,
  MdOutlineDocumentScanner,
  MdOutlineWorkOutline,
} from "react-icons/md";

const HorizontalMenu = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6 w-fit ">
      <ul className="flex space-x-10">
        <li>
          <a
            href="#about"
            className="flex flex-col items-center justify-center bg-gray-200 text-gray-800 rounded-lg p-2 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50"
          >
            <MdOutlineAccountCircle size={20} />
            <span>About me</span>
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="flex flex-col items-center justify-center bg-gray-200 text-gray-800 rounded-lg p-2 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50"
          >
            <MdOutlineWorkOutline size={20} />
            <span>Projects</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HorizontalMenu;
