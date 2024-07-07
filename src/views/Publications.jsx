import React, { useContext } from "react";
import Cardp from "../components/Card_publi";
import { ThemeContext } from "../themeProvider";

const Publications = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const publicationsData = [
    {
      conference: "IEEE ICC 2022",
      title: "On the Properties of Time-Varying SNR Process in Cellular-Enabled UAV Networks",
      url: "https://ieeexplore.ieee.org/document/9838749"
    },
    // Add more publications as needed
  ];

  return (
    <div
      id="publications"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Publications
        </h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
          My Publications 
        </h4>
        <div className="mt-8 flex flex-wrap">
          {publicationsData.map((pub, index) => (
            <Cardp
              key={index}
              conference={pub.conference}
              title={pub.title}
              url={pub.url}
            />
          ))}
        </div>
        <a
          href="hello"
          className="w-32 flex items-center py-4 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto mt-4"
        >
          Show More
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Publications;
