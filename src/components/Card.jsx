
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaInfoCircle } from 'react-icons/fa';

const Card = ({ imgSrc, title, associatedWith, skills, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (e) => {
    e.stopPropagation();  // Prevent the click from propagating to the card click handler
    setIsModalOpen(false);
  };

  return (
    <>
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        className="w-full sm:w-1/2 lg:w-1/3 p-4 cursor-pointer relative group"
        onClick={handleCardClick}
      >
        <div className="bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-transform transform group-hover:scale-105 relative">
          <img className="rounded-t-lg w-full" src={imgSrc} alt={title} />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            <p className="mb-1 font-semibold text-gray-700 dark:text-gray-400">
              Associated: <span className="text-blue-500">{associatedWith}</span>
            </p>
            <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400">
              Skills: <span className="text-blue-500">{skills}</span>
            </p>
          </div>
          <div className="absolute bottom-2 right-2 bg-white px-2 py-1 rounded text-xs text-gray-800 shadow-md">
            Click for more info
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50 rounded-lg">
          <FaInfoCircle className="text-white text-3xl" />
        </div>
      </motion.div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={handleCloseModal}>
          <div className="bg-white rounded-lg p-8 max-w-lg w-lg relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
            >
              &times;
            </button>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              {title}
            </h5>
            {Array.isArray(description) ? (
              <ul className="list-disc list-inside mb-3 text-gray-700 dark:text-gray-700">
                {description.map((point, index) => (
                  <li key={index} className="text-justify" dangerouslySetInnerHTML={{ __html: point }}></li>
                ))}
              </ul>
            ) : (
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-700 text-justify">
                {description}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
