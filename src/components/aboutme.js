import React, { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

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
    <div className="about-me-section">
      <h2 className="text-4xl font-bold mb-4">Hello,</h2>
      <div
        ref={contentRef}
        style={{
          height: `${sectionHeight}px`,
          overflow: "hidden",
          transition: "height 0.5s ease-in-out",
        }}
      >
        <p className="mt-4">
          My name is <strong>Menelik</strong>, or <strong>ምኒልክ</strong> in
          Amharic (I'm currently learning it to have secret conversations with
          my mom). I was born in France and had the opportunity to grow up in
          different parts of the world. These experiences allowed me to meet and
          interact with various cultures, giving me a{" "}
          <strong>broad perspective</strong> on life and making me more{" "}
          <strong>confident</strong>, while also making me aware of the issues
          that the world is facing, such as poverty, inequality, and ecological
          disasters.
        </p>
        <p className="mt-4">
          My first four years were spent in Congo, and then we moved to Brazil
          where we stayed for 11 years. After that, we moved to Thailand for
          three years. Throughout my travels, I learned several languages such
          as Portuguese, French, English (C1), Spanish (B1), and a bit of
          Italian.
        </p>
        <p className="mt-4">
          Regarding my education, I have a Bachelor's degree in communication
          systems from EPFL, with an exchange program at Politecnico di Milano.
          Currently, I'm pursuing my Master's degree in data science at ETHZ.
          However, I don't want to talk much about my educational background as
          LinkedIn is made for this :)
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
          <strong>L'Unione Sarda </strong>
          <a
            href="https://www.unionesarda.it/news-sardegna/sassari-provincia/gli-etiopi-confinati-allasinara-la-storia-di-haile-figlio-del-primo-ministro-d5bpki9v"
            target="_blank"
            rel="noreferrer"
          >
            (link to the article)
          </a>
          .
        </p>
        <p className="mt-4">
          Looking ahead, my goal for the next one to three years is to build a{" "}
          <strong>
            successful startup that has a positive impact on the world
          </strong>
          . In my view, data science is going to play a pivotal role in shaping
          the future, especially as the world becomes more digitally oriented. I
          believe that my skills and passion for technology will enable me to
          make a real difference.
        </p>
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
          skills and passion to make a positive impact on the world.
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
