import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainPage from "./MainPage";

import backgroundVideo from "./images/backgroundVideo.mp4";

export default function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image 
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={require("./images/background_image1.png")}
        alt="Profile"
      />*/}

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={backgroundVideo}
        type="video/mp4"
      />

      {/* Background Video with Video-React 
      <div className="video-background">
        <Player autoPlay loop muted playsInline className="video-player">
          <source src="./images/backgroundVideo.mp4" type="video/mp4" />
        </Player>
      </div>*/}

      {/* Your content */}
      <div className="relative z-10">
        <MainPage />
      </div>
    </div>
  );
}
