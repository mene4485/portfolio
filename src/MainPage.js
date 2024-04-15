import React from "react";
import { FaInstagram, FaLinkedinIn, FaGithubAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdCake } from "react-icons/md";
import { IoPhonePortrait } from "react-icons/io5";
import AboutMe from "./components/aboutme";
import ProjectsList from "./components/ProjectsList";
import HorizontalMenu from "./components/horizontal_menu";

const MainPage = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row">
        {/* Left Panel */}
        <div className=" text-center p-5 lg:w-1/3 h-fit mt-10 -ml-7">
          <img
            className="w-60 mx-auto -mb-16 rounded-xl object-cover"
            src={require("./images/photoPP.jpg")}
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
              <a
                href="/MENELIK_NOUVELLON_CV.pdf"
                download="Menelik_Nouvellon_CV"
              >
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

          <div className="flex justify-end opacity-0 lg:opacity-100">
            {/* Horizontal Menu */}
            <HorizontalMenu />
          </div>

          <div className="text-left lg:text-left lg:p-16 p-6 bg-white rounded-lg m-3.5 -mt-64 lg:mt-0">
            {/* About me */}
            <AboutMe />

            {/**  Projects */}
            <div className="mt-8 " id="projects">
              <h3 className="text-3xl font-bold mb-4 ">Projects</h3>
              <h5 className="text-2xl mb-4 ">Done</h5>
              <ProjectsList jsonFilePath={"projects_done"} />
              <div className="border-t-2 border-gray-300 my-4"></div>
              <h5 className="text-2xl mb-4 ">In progress</h5>
              <ProjectsList jsonFilePath={"projects_in_progress"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
