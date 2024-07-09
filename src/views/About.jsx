// import React, { useContext } from "react";
// import { techStack } from "../constants";
// import { ThemeContext } from "../themeProvider";
// import { motion } from "framer-motion";

// const About = () => {
//   const theme = useContext(ThemeContext);
//   const darkMode = theme.state.darkMode;
//   return (
//     <div id="about" className={darkMode === true ? "bg-white" : "bg-gray-900"}>
//       <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
//         <h2
//           className={
//             darkMode
//               ? "text-5xl font-bold px-4 md:px-0 text-center"
//               : "text-5xl font-bold px-4 md:px-0 text-center text-white"
//           }
//         >
//           About Me
//         </h2>
//         <div>
//           <motion.div>
//             <h4 className="mt-12 text-3xl font-semibold text-blue-500">
//               A bit about me
//             </h4>
//             <p
//               className={
//                 darkMode
//                   ? "mt-4 text-xl text-justify text-gray-500"
//                   : "mt-4 text-xl text-justify text-white"
//               }
//             >
//               A skilled MS graduate and ML engineering intern who builds and trains ML,DL, and CV models, develops and monitors Data-
//               Driven pipelines utilizing MLOps. Proficient in building Generative-AI applications and fine-tuning LLM. I am pursuing roles
//               across diverse domains to tackle challenging problems with innovative technology in Machine Learning/AI.
//             </p>
//           </motion.div>
//           <motion.div
//           >
//             <h4 className="mt-12 text-3xl font-semibold text-blue-500">
//               Technologies and Tools
//             </h4>
//             <p
//               className={
//                 darkMode
//                   ? "mt-4 text-xl text-justify text-gray-500"
//                   : "mt-4 text-xl text-justify text-white"
//               }
//             >
//               Using a combination of cutting-edge technologies and reliable
//               open-source software I build Scalable Data-Driven end-to-end pipelines and enhanced Decision making capabilities 
//             </p>
//           </motion.div>
//           <motion.div className="flex flex-wrap mt-8 flex flex-wrap justify-between ">
//             {techStack.map((el, index) => (
//               <motion.div
//                 initial="hidden"
//                 whileInView={"visible"}
//                 variants={{
//                   visible: {
//                     y: 0,
//                     opacity: 1,
//                     transition: {
//                       type: "spring",
//                     },
//                   },
//                   hidden: { opacity: 1, y: 80 },
//                 }}
//                 className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
//               >
//                 <img alt="" src={el.link} className="w-12" />
//                 <h4 className="text-md ml-4">{el.name}</h4>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaTools, FaCloud, FaPuzzlePiece, FaCubes, FaChartBar } from 'react-icons/fa';


const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const legend = {
    language: { color: "bg-blue-200", label: "Programming Languages", icon: <FaCode /> },
    database: { color: "bg-green-200", label: "Databases", icon: <FaDatabase /> },
    framework: { color: "bg-purple-200", label: "Frameworks", icon: <FaPuzzlePiece /> },
    tool: { color: "bg-yellow-200", label: "Tools", icon: <FaTools /> },
    cloud: { color: "bg-pink-200", label: "Cloud Platforms", icon: <FaCloud /> },
    library: { color: "bg-teal-200", label: "Libraries", icon: <FaCubes /> },
    visualization: { color: "bg-orange-200", label: "Visualization", icon: <FaChartBar /> },
  };
  
  const getTypeClass = (type) => {
    return legend[type]?.color || "bg-gray-200";
  };

  return (
    <div id="about" className={darkMode ? "bg-white" : "bg-gray-900"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:mt-0 pt-24 pb-12">
        <h2
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          About Me
        </h2>
        <div>
          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              A bit about me
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              An accomplished MS graduate in Electrical and Computer Engineering (ECE) with specialized expertise in Embedded Systems, Semiconductor Technologies, and Machine Learning. 
              Demonstrates proficiency in Real-Time Operating Systems (RTOS), Embedded C programming, semiconductor fabrication, and the development of advanced Machine Learning and 
              Deep Learning models, including Generative AI with Large Language Models (LLMs). Actively seeking challenging opportunities that allow for innovation and leadership in 
              technological development across a wide range of sectors.
            </p>
          </motion.div>
          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              Technologies and Tools
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
            </p>
          </motion.div>
          <div className="mt-8">

            <div className="flex flex-wrap mt-2">
              {Object.keys(legend).map((key) => (
                <div key={key} className="flex items-center mr-4 mb-2">
                  <span className={`w-4 h-4 inline-block ${legend[key].color} mr-2 rounded-full`}></span>
                  <span className="mr-2">{legend[key].icon}</span>
                  <span className={darkMode ? "text-gray-500" : "text-white"}>{legend[key].label}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Skills */}
          <motion.div className="flex flex-wrap mt-8 justify-between">
            {techStack.map((el, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                    },
                  },
                  hidden: { opacity: 1, y: 80 },
                }}
                className={`py-2 px-4 ${getTypeClass(el.type)} md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40 shadow-lg`}
              >
                <img alt="" src={el.link} className="w-12" />
                <h4 className="text-md ml-4">{el.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
