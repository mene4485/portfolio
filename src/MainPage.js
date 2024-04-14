import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithubAlt,
} from "react-icons/fa";
import { MdWork, MdEmail, MdLocationOn, MdCake } from "react-icons/md";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { MdOutlineWorkOutline } from "react-icons/md";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoPhonePortrait } from "react-icons/io5";
import Project from "./components/project";
import AboutMe from "./components/aboutme";
import ProjectWrapper from "./components/ProjectWrapper";
import ProjectsList from "./components/ProjectsList";
import projects from "./files/projects_done.json";

const MainPage = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row">
        {/* Left Panel */}
        <div className=" text-center p-8 lg:w-1/3 h-fit mt-10">
          <img
            className="w-40 h-40 rounded-xl mx-auto -mb-16"
            src={require("./images/heureux.jpg")}
            alt="Profile"
          />
          <div className="bg-white pt-20 rounded-xl">
            <div className="mb-3">
              <h1 className="text-xl font-bold mt-4">Menelik Nouvellon</h1>
              <p className="text-gray-600">Data Science student @ ETH</p>
            </div>

            <div className="flex justify-center gap-3 mb-3">
              <a
                href="https://github.com/mene4485"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithubAlt
                  className="text-black my-1 bg-gray-100 p-1 rounded-md"
                  size={30}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/menelik-nouvellon/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn
                  className="text-blue-700 my-1 bg-gray-100 p-1 rounded-md"
                  size={30}
                />
              </a>

              <a
                href="https://www.instagram.com/nouvellon_mnlk/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram
                  className="text-pink-500 my-1 bg-gray-100 p-1 rounded-md"
                  size={30}
                />
              </a>
            </div>

            <div className="flex justify-center">
              <div className="justify-items-start content-center w-fit bg-gray-100 p-7 rounded-xl">
                <div className="flex items-center gap-2 mb-4 border-b pb-1">
                  <IoPhonePortrait />
                  <span>+41 783086958</span>
                </div>
                <div className="flex items-center gap-2 mb-4 border-b pb-1">
                  <MdEmail />
                  <span>mnouvellon@ethz.ch</span>
                </div>
                <div className="flex items-center gap-2 mb-4 border-b pb-1">
                  <MdLocationOn />
                  <span>Zürich, Switzerland</span>
                </div>
                <div className="flex items-center gap-2">
                  <MdCake />
                  <span>September 01, 2002</span>
                </div>
              </div>
            </div>

            <div className="px-9 py-4">
              <a href="./files/MENELIK_NOUVELLON_CV.pdf" download>
                <div className="bg-red-600 text-white rounded-xl p-2 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Download CV
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="lg:w-2/3 mt-40">
          {/* Container for the menu, positioned to the right */}
          <div className="flex justify-end">
            {/* Horizontal Menu 
            <div className="bg-white shadow-md rounded-lg p-4 mb-6 w-fit">
              <ul className="flex space-x-10">
                <li>
                  <a
                    href="#about"
                    className="flex flex-col items-center justify-center bg-red-500 text-white rounded-lg p-2 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                  >
                    <MdOutlineAccountCircle size={20} />
                    <span>About</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#resume"
                    className="flex flex-col items-center justify-center bg-gray-200 text-gray-800 rounded-lg p-2 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50"
                  >
                    <MdOutlineDocumentScanner size={20} />
                    <span>Resume</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#works"
                    className="flex flex-col items-center justify-center bg-gray-200 text-gray-800 rounded-lg p-2 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50"
                  >
                    <MdOutlineWorkOutline size={20} />
                    <span>Works</span>
                  </a>
                </li>
              </ul>
            </div>*/}
          </div>

          <div className="text-center lg:text-left lg:p-16 bg-white rounded-lg m-3.5">
            {/* About me */}
            <AboutMe />

            {/* Projects */}
            {/* <div className="mt-8 bg-red-200 p-2">
              <h3 className="text-2xl font-bold mb-4">Projects</h3>
              <div className="flex flex-col bg-white p-4">
                {/* UI/UX Design Section 
                <div className="flex items-center mb-4">
                  <BiBook className="text-xl" />
                  <div className="ml-4">
                    <h4 className="font-bold">UI/UX Design</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed diam eiusmod voluptat.
                    </p>
                  </div>
                </div>
                {/* App Development Section 
                <div className="flex items-center">
                  <BiMessageSquareDetail className="text-xl" />
                  <div className="ml-4">
                    <h4 className="font-bold">App Development</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed diam eiusmod voluptat.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}

            {/**  Projects */}
            <div className="mt-8">
              <h3 className="text-3xl font-bold mb-4 ">Projects</h3>
              <h5 className="text-2xl mb-4 ">Done</h5>
              <ProjectsList jsonFilePath={"projects_done"} />
              <div className="border-t-2 border-gray-300 my-4"></div>
              <h5 className="text-2xl mb-4 ">In progress</h5>
              <ProjectsList jsonFilePath={"projects_in_progress"} />
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
