
import React, { useContext, useState } from 'react';
import { ThemeContext } from "../themeProvider";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaInfoCircle } from 'react-icons/fa';

import { ReactComponent as WorkIcon } from '../assets/icons/work.svg';
import { ReactComponent as SchoolIcon } from '../assets/icons/school.svg';
import { ReactComponent as StarIcon } from '../assets/icons/star.svg';

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [selectedItem, setSelectedItem] = useState(null);
  const typeSchool = 'school';
  const typeWork = 'work';
  const timelineData = [
    {
      id: 0,
      date: 'Feb 2024 - Present',
      title: 'Machine Learning Engineer',
      subtitle: 'MeghaAI, Indiana, USA',
      description: 'Slashed business operations costs by 50% by innovating an AI model using Regression for predictive maintenance of RO unit filters',
      type: typeWork,
    },
    {
      id: 1,
      date: 'Dec 2023',
      title: 'Master of Science in ECE',
      subtitle: 'University of Wisconsin-Madison',
      description: 'Specialized in Machine Learning and Signal Processing',
      type: typeSchool,
    },
    {
      id: 2,
      date: 'Apr 2022 - Jul 2022',
      title: 'Program Analyst Trainee',
      subtitle: 'Cognizant Technology Solutions, India',
      description: 'Examined large multivariant datasets, engineered, and deployed ETL and ML pipelines using Docker',
      type: typeWork,
    },
    {
      id: 3,
      date: 'Jul 2021 - Jan 2022',
      title: 'Research Intern',
      subtitle: 'SPCRC, IIITH, India',
      description: 'Derived and published research conference paper on characterizing SNR characteristics in UAV based Communication',
      type: typeWork,
    },
    {
      id: 4,
      date: 'Mar 2021 - Mar 2022',
      title: 'Data Scientist',
      subtitle: 'Aakarsh Consultancy Enterprises, India',
      description: 'Enhanced ML model accuracy and system reliability, led Azure cloud deployment with key metrics dashboards, improved supplier evaluation, and designed forecasting models for automated inventory management',
      type: typeWork,
    },
    {
      id: 7,
      date: 'Jul 2021',
      title: 'Bachelor of Technology in ECE',
      subtitle: 'Sreenidhi Institute of Science and Technology, Hyderabad, India',
      description: 'Graduated in Electronics and Communication Engineering',
      type: typeSchool,
    },
    {
      id: 5,
      date: 'Jan 2020 - Mar 2021',
      title: 'Embedded Hardware Intern',
      subtitle: 'Aakarsh Consultancy Enterprises, India',
      description: 'Worked on IoT and GSM-enabled prototypes and built automated embedded devices...',
      type: typeWork,
    },
    {
      id: 6,
      date: 'Jun 2019 - Aug 2019',
      title: 'Silicon Design Intern',
      subtitle: 'Indian Institute of Sciences, India',
      description: 'Fabricated passive semiconductor devices and developed, verified digital filters and parity check circuits using VHDL in Xilinx Vivado for high-performance memory subsystems',
      type: typeWork,
    },
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseClick = () => {
    setSelectedItem(null);
  };

  return (
    <div
      id="careers"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          My Career
        </h2>
        <VerticalTimeline
          className="vertical-timeline-container"
          animate={true}
          lineColor={darkMode ? "#aaa" : "#444"}
        >
          {timelineData.map((item, index) => (
            <VerticalTimelineElement
              key={item.id}
              className="vertical-timeline-element--work"
              contentStyle={{ background: darkMode ? '#ddd' : '#f9f9f9', color: darkMode ? '#000' : '#333' }}
              contentArrowStyle={{ borderRight: darkMode ? '7px solid #ddd' : '7px solid #f9f9f9' }}
              date={item.date}
            //   iconStyle={{ background: item.type === typeWork ? (darkMode ? '#aaa' : '#444') : '#e91e63', color: '#fff' }}
              iconStyle={{ background: item.type === typeWork ? (darkMode ? '#00bfff' : '#87cefa') : '#e91e63', color: '#fff' }}
              icon={item.type === typeWork ? <WorkIcon /> : <SchoolIcon />}
              position={index % 2 === 0 ? "left" : "right"}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
              <div className="absolute bottom-2 right-2 bg-white px-2 py-1 rounded text-xs text-gray-800 shadow-md cursor-pointer"
                onClick={() => handleItemClick(item)}>
                Click for more info
              </div>
            </VerticalTimelineElement>
          ))}
          <VerticalTimelineElement
            iconStyle={{ background: darkMode ? '#aaa' : '#444', color: '#fff' }}
            icon={<StarIcon />}
          />
        </VerticalTimeline>
      </div>

      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={handleCloseClick}>
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={handleCloseClick}
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
            >
              &times;
            </button>
            <h2 className="mb-3 text-xl font-bold text-blue-600">
              {selectedItem.title}
            </h2>
            <p className="mb-3 text-lg text-gray-600">
              {selectedItem.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
