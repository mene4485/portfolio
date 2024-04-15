import React, { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import asinara1 from "../images/asinara1.jpg";
import asinara2 from "../images/asinara2.jpg";
import USC_milan from "../images/USC_milan.jpeg";
import lauzhack_team from "../images/lauzhack_team.mp4";
import bebelik from "../images/bebelik.jpeg";

const AboutMe = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [sectionHeight, setSectionHeight] = useState(200);
  const contentRef = useRef(null);

  const toggleExpansion = () => {
    setIsExpanded((prev) => !prev);
  };

  useEffect(() => {
    if (contentRef.current) {
      setSectionHeight(isExpanded ? contentRef.current.scrollHeight : 200);
    }
  }, [isExpanded]);

  return (
    <div className="about-me-section" id="about">
      <h2 className="text-4xl font-bold mb-4 ">Hello,</h2>
      <div
        ref={contentRef}
        style={{
          height: `${sectionHeight}px`,
          overflow: "hidden",
          transition: "height 0.5s ease-in-out",
        }}
        className="leading-relaxed" // Right align text and add padding on small screens
      >
        <p className="mt-4 text-base italic">
          My name is <strong>Menelik</strong>, or <strong>ምኒልክ</strong> in
          Amharic (I'm currently learning it to have secret conversations with
          my mom 🤫). I was born in France and had the opportunity to grow up in
          different parts of the world. These experiences allowed me to meet and
          interact with various cultures, giving me a{" "}
          <strong>broad perspective</strong> on life and making me more{" "}
          <strong>confident</strong>, while also making me aware of the issues
          that the world is facing, such as poverty, inequality, and ecological
          disasters 🌍.
        </p>

        <p className="mt-4">
          My first four years were spent in Congo, and then we moved to Brazil
          where we stayed for 11 years. After that, we moved to Thailand for
          three years. Throughout my travels, I learned several languages such
          as Portuguese, French, English (C1), Spanish (B1), and a bit of
          Italian.
        </p>
        <br />
        <div className="flex justify-center">
          <img
            src={bebelik}
            alt="Photo of me baby looking at the horizon"
            className="w-full w-9/12"
          />
          {/* <p className="text-sm mt-2 italic">Working on our Italian speech.</p> */}
        </div>
        <p className="mt-4">
          Regarding my education, I have a Bachelor's degree in communication
          systems from EPFL, with an exchange program at Politecnico di Milano.
          Currently, I'm pursuing my Master's degree in data science at ETHZ.
          However, I don't want to talk much about my educational background as
          LinkedIn is made for this 🙂
        </p>
        <p className="mt-4">
          I take pride in my ability to{" "}
          <strong>develop ideas and work on them with my friends</strong>. I
          believe that with the right energy and motivation, we can achieve
          anything we set our minds to. In fact, one of my proudest moments was
          when I gave a conference in Italian about my{" "}
          <strong>Ethiopian family's history</strong>. They were incarcerated in
          Sardinia (Asinara) during the Italian occupation in Ethiopia. To my
          surprise, the conference even made it to the local newspaper,{" "}
          <a
            href="https://www.unionesarda.it/news-sardegna/sassari-provincia/gli-etiopi-confinati-allasinara-la-storia-di-haile-figlio-del-primo-ministro-d5bpki9v"
            target="_blank"
            rel="noreferrer"
          >
            <strong>L'Unione Sarda </strong>📰.
          </a>
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <div className="w-4/12 text-center">
            <img
              src={asinara1}
              alt="Photo of my sister and me working on the speech in Italian"
              className="w-full"
            />
            <p className="text-sm mt-2 italic">
              Working on our Italian speech.
            </p>
          </div>
          <div className="w-8/12 text-center">
            <img
              src={asinara2}
              alt="Photo of me with my brother and sister near Asinara"
              className="w-full"
            />
            <p className="text-sm mt-2 italic">
              Photo taken in front of Asinara during our visit to Sardinia.
            </p>
          </div>
        </div>

        <br />
        <p className="mt-4">
          Looking ahead, my goal for the next one to three years is to build a{" "}
          <strong>
            successful startup that has a positive impact on the world
          </strong>
          . In my view, data science is going to play a pivotal role in shaping
          the future, especially as the world becomes more digitally oriented. I
          believe that my skills and passion for technology will enable me to
          make a real difference 💡.
        </p>

        <div className="flex justify-center space-x-4 mt-4">
          <div className="text-center w-2/3">
            <img
              src={USC_milan}
              alt="Photo of me and my team at the University Startup Challenge in Milan"
              className="w-full" // Ensure the image takes up the full width of the div
            />
            <p className="text-sm mt-2 italic">
              Finalist of University Startup Challenge at Politecnico di Milano.
            </p>
          </div>
          <div className="text-center w-1/3">
            <video
              src={lauzhack_team} // Replace with the actual path to your video file
              autoPlay
              loop
              muted
              playsInline
              className="w-full" // Ensure the video takes up the full width of the div
            >
              Your browser does not support the video tag.
            </video>
            <p className="text-sm mt-2 italic">Lauzhack</p>
          </div>
        </div>
        <br />
        <p className="mt-4">
          My interest is in projects that have a{" "}
          <strong>direct impact on people</strong>, particularly those that
          address social issues. Working with{" "}
          <strong>inspiring and intelligent people</strong> is something that I
          really enjoy as it helps me to grow and develop as an individual. I
          hope sharing my background and interests helped you understand me
          better. Though my website primarily showcases my projects, I also
          wanted to share some of my personal story. My experiences growing up
          and traveling the world have given me a{" "}
          <strong>unique perspective on life</strong>. I'm excited to use my
          skills and passion to make a positive impact on the world 🚀.
        </p>

        {/* Content continues */}
      </div>
      <button
        onClick={toggleExpansion}
        className="mt-4 text-red-500 hover:text-orange-700 focus:outline-none focus:underline"
      >
        {isExpanded ? "Show Less ↑" : "Show More ↓"}
      </button>
    </div>
  );
};

export default AboutMe;
