
import React from "react";
import { motion } from "framer-motion";

const Card = ({ url, imgSrc, title, associatedWith, skills, description }) => {
  const handleReadMoreClick = () => {
    window.location.href = url; // Use the URL passed via props
  };

  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className="w-full sm:w-1/2 lg:w-1/3 p-4"
    >
      <div className="bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <a href={url}>
          <img
            className="rounded-t-lg w-full"
            src={imgSrc}
            alt=""
          />
        </a>
        <div className="p-5">
          <a href={url}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <p className="mb-1 font-semibold text-gray-700 dark:text-gray-400">
            Associated with: <span className="text-blue-500">{associatedWith}</span>
          </p>
          <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400">
            Skills: <span className="text-blue-500">{skills}</span>
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <button
            onClick={handleReadMoreClick}
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Read more
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
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
