// import React, { useContext, useState } from "react";
// import Card from "../components/Card";
// import { ThemeContext } from "../themeProvider";

// const Projects = () => {
//   const theme = useContext(ThemeContext);
//   const darkMode = theme.state.darkMode;
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const projectData = [
//     {
//       url: "",
//       imgSrc: "https://cdn.jsdelivr.net/gh/spchanakya/spchanakya.github.io@main/Assets/image_chatbot.jpg",
//       title: "Generative AI-Enabled Web Application for SQL Databases",
//       associatedWith: "MeghaAI",
//       skills: "Python, GenAI, PostgreSQL, RAG, Prompt Engineering",
//       description: "Developed an Chat-interface powered by ChatGPT3.5 turbo on top of SQL (PostgreSQL DB). Utilized RAG and Prompt engineering techniques to ehnace the relavance factor by 3x",
//       category: "ML"
//     },
//     {
//       url: "",
//       imgSrc: "https://cdn.jsdelivr.net/gh/spchanakya/spchanakya.github.io@main/Assets/image_grafana.jpg",
//       title: "KPI visualizations and monitoring using Grafana",
//       associatedWith: "MeghaAI",
//       skills: "Grafana, JavaScript, Apache Echarts",
//       description: `Analyzed large MES Data in PostgreSQL, Provided Dashboards for critical KPI metrics in Grafana using Apache charts,
//       Plotly to enhance inventory management, and Initiated cloud data sourcing methods for real-time performance visualization.`,
//       category: "ML"
//     },
//     {
//       url: "",
//       imgSrc: "https://cdn.jsdelivr.net/gh/spchanakya/spchanakya.github.io@main/Assets/image_grafana.jpg",
//       title: "KPI visualizations and monitoring using Grafana",
//       associatedWith: "MeghaAI",
//       skills: "Grafana, JavaScript, Apache Echarts",
//       description: `Analyzed large MES Data in PostgreSQL, Provided Dashboards for critical KPI metrics in Grafana using Apache charts,
//       Plotly to enhance inventory management, and Initiated cloud data sourcing methods for real-time performance visualization.`,
//       category: "ML"
//     },
//     {
//       url: "/",
//       imgSrc: "https://cdn.jsdelivr.net/gh/spchanakya/spchanakya.github.io@main/Assets/image_RO.jpg",
//       title: "Predictive Maintainance of RO filters",
//       associatedWith: "MeghaAI",
//       skills: "Python, ML, Time series, CNN",
//       description: `Slashed Business operations costs by 50% in the Plant by Innovating an AI model using Regression, performed correlation
// analysis for feature engineering with sensor data for predictive maintenance of stakeholders’ $50 million RO unit filters.`,
//       category: "ML"
//     },
//     {
//       url: "/",
//       imgSrc: "https://cdn.jsdelivr.net/gh/spchanakya/spchanakya.github.io@main/Assets/image_capstone.jpg",
//       title: "Anhanced MobilenetV2 for fruit and vegetable quality classification",
//       associatedWith: "University of Wisconsin - Madison",
//       skills: "Python, Computer vision, Neural network, Tensorflow, ",
//       description: "This is a short description of Project 2.",
//       category: "ML"
//     },
//     {
//       url: "",
//       imgSrc: "https://cdn.jsdelivr.net/gh/spchanakya/spchanakya.github.io@main/Assets/image_grafana.jpg",
//       title: "Model parameter tuning using MLFlow",
//       associatedWith: "Akarsh Consultancy Enterprises",
//       skills: "Grafana, JavaScript, Apache Echarts",
//       description: `Analyzed large MES Data in PostgreSQL, Provided Dashboards for critical KPI metrics in Grafana using Apache charts,
//       Plotly to enhance inventory management, and Initiated cloud data sourcing methods for real-time performance visualization.`,
//       category: "ML"
//     },
//     {
//       url: "",
//       imgSrc: "https://cdn.jsdelivr.net/gh/spchanakya/spchanakya.github.io@main/Assets/image_grafana.jpg",
//       title: "Water monitoring and control using IoT for CWT",
//       associatedWith: "Aakarsh Consultancy Enterprises",
//       skills: "Embedded C, Arduino, IoT, ThinkSpeak, Comm Protocols(SPI,I2C)",
//       description: `Analyzed large MES Data in PostgreSQL, Provided Dashboards for critical KPI metrics in Grafana using Apache charts,
//       Plotly to enhance inventory management, and Initiated cloud data sourcing methods for real-time performance visualization.`,
//       category: "Embedded"
//     },
//   ];

//   const categories = ["All", "ML", "Embedded"];

//   const filteredProjects = selectedCategory === "All" ? projectData : projectData.filter(project => project.category === selectedCategory);

//   return (
//     <div id="projects" className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
//         <h2 className="text-5xl font-bold px-4 md:px-0 text-center">Projects</h2>
//         <h4 className="mt-16 text-3xl font-semibold text-blue-600">What I Built</h4>
//         <div className="mt-8 flex justify-center">
//           {categories.map(category => (
//             <button
//               key={category}
//               className={`mx-2 px-4 py-2 ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'} rounded`}
//               onClick={() => setSelectedCategory(category)}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//         <div className="mt-8 flex flex-wrap -mx-4">
//           {filteredProjects.map((project, index) => (
//             <Card
//               key={index}
//               url={project.url}
//               imgSrc={project.imgSrc}
//               title={project.title}
//               associatedWith={project.associatedWith}
//               skills={project.skills}
//               description={project.description}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

import React, { useContext, useState } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projectData = [
        {
      url: "",
      imgSrc: "https://cdn.jsdelivr.net/gh/spchanakya/spchanakya.github.io@main/Assets/image_chatbot.jpg",
      title: "Generative AI-Enabled Web Application for SQL Databases",
      associatedWith: "MeghaAI",
      skills: "Python, GenAI, PostgreSQL, RAG, Prompt Engineering",
      description: "Developed an Chat-interface powered by ChatGPT3.5 turbo on top of SQL (PostgreSQL DB). Utilized RAG and Prompt engineering techniques to ehnace the relavance factor by 3x",
      categories: ["ML"]
    },
    {
      url: "",
      imgSrc: "https://cdn.jsdelivr.net/gh/spchanakya/spchanakya.github.io@main/Assets/image_grafana.jpg",
      title: "KPI visualizations and monitoring using Grafana",
      associatedWith: "MeghaAI",
      skills: "Grafana, JavaScript, Apache Echarts",
      description: `Analyzed large MES Data in PostgreSQL, Provided Dashboards for critical KPI metrics in Grafana using Apache charts,
      Plotly to enhance inventory management, and Initiated cloud data sourcing methods for real-time performance visualization.`,
      categories: ["ML"]
    },
    {
      url: "/",
      imgSrc: "https://cdn.jsdelivr.net/gh/spchanakya/spchanakya.github.io@main/Assets/image_RO.jpg",
      title: "Predictive Maintainance of RO filters",
      associatedWith: "MeghaAI",
      skills: "Python, ML, Time series, CNN",
      description: `Slashed Business operations costs by 50% in the Plant by Innovating an AI model using Regression, performed correlation 
      analysis for feature engineering with sensor data for predictive maintenance of stakeholders’ $50 million RO unit filters.`,
      categories: ["ML"]
    },
    {
      url: "",
      imgSrc: "https://cdn.jsdelivr.net/gh/spchanakya/spchanakya.github.io@main/Assets/image_cern.jpg",
      title: "CNN and ML appraoch for Image Classification",
      associatedWith: "Univeristy of Wisconsin Madison",
      skills: "Python, Tensorflow, SkLearn, Matlab",
      description: `Analyzed large MES Data in PostgreSQL, Provided Dashboards for critical KPI metrics in Grafana using Apache charts,
      Plotly to enhance inventory management, and Initiated cloud data sourcing methods for real-time performance visualization.`,
      categories: ["ML"]
    },
    {
      imgSrc: "https://cdn.jsdelivr.net/gh/spchanakya/spchanakya.github.io@main/Assets/image_rtl.jpg",  // Make sure to update with the correct image URL
      title: "Advanced Memory File System and Scheduling Enhancements for XV6 OS",
      associatedWith: "University of Wisconsin Madison",
      skills: "C++, Linux, OS",
      description: `Engineered an advanced memory file system, custom shell, and an improved synchronous Interrupt Service Routine (ISR) for the XV6 OS, showcasing expertise in system-level C programming and operating system internals. 
      Enhanced process scheduling and concurrency within XV6 by developing custom stack structures and implementing Multi-Level Feedback Queue (MLFQ) scheduling and mutexes.`,
      categories: ["Embedded"]
    },

    {
      url: "/",
      imgSrc: "https://cdn.jsdelivr.net/gh/spchanakya/spchanakya.github.io@main/Assets/image_capstone.jpg",
      title: "Anhanced MobilenetV2 for fruit and vegetable quality classification",
      associatedWith: "University of Wisconsin Madison",
      skills: "Python, Computer vision, Neural network, Tensorflow, ",
      description: "This is a short description of Project 2.",
      categories: ["ML"]
    },
    {
      url: "",
      imgSrc: "https://cdn.jsdelivr.net/gh/spchanakya/spchanakya.github.io@main/Assets/image_grafana.jpg",
      title: "Model parameter tuning using MLFlow",
      associatedWith: "Akarsh Consultancy Enterprises",
      skills: "Grafana, JavaScript, Apache Echarts",
      description: `Analyzed large MES Data in PostgreSQL, Provided Dashboards for critical KPI metrics in Grafana using Apache charts,
      Plotly to enhance inventory management, and Initiated cloud data sourcing methods for real-time performance visualization.`,
      categories: ["ML"]
    },
    {
      url: "",
      imgSrc: "https://cdn.jsdelivr.net/gh/spchanakya/spchanakya.github.io@main/Assets/image_cwt.jpg",
      title: "Water monitoring and control using IoT for CWT",
      associatedWith: "Aakarsh Consultancy Enterprises",
      skills: "Embedded C, FreeRTOS, Arduino, IoT, ThinkSpeak, Comm Protocols(SPI,I2C)",
      description: `Analyzed large MES Data in PostgreSQL, Provided Dashboards for critical KPI metrics in Grafana using Apache charts,
      Plotly to enhance inventory management, and Initiated cloud data sourcing methods for real-time performance visualization.`,
      categories: ["Embedded"]
    },
    {
      url: "",
      imgSrc: "https://cdn.jsdelivr.net/gh/spchanakya/spchanakya.github.io@main/Assets/image_gsm.jpg",
      title: "Smart Energy Meter using GSM",
      associatedWith: "Aakarsh Consultancy Enterprises",
      skills: "Embedded C, Arduino, IoT, ThinkSpeak, Comm Protocols(SPI,I2C)",
      description: `Analyzed large MES Data in PostgreSQL, Provided Dashboards for critical KPI metrics in Grafana using Apache charts,
      Plotly to enhance inventory management, and Initiated cloud data sourcing methods for real-time performance visualization.`,
      categories: ["Embedded"]
    },
    {
      url: "",
      imgSrc: "https://cdn.jsdelivr.net/gh/spchanakya/spchanakya.github.io@main/Assets/image_mine.jpg",
      title: "Embedded Multi-Sensor Remote Mine Monitor",
      associatedWith: "Aakarsh Consultancy Enterprises",
      skills: "Embedded C, FreeRTOS, Arduino, LoraWan",
      description: `Analyzed large MES Data in PostgreSQL, Provided Dashboards for critical KPI metrics in Grafana using Apache charts,
      Plotly to enhance inventory management, and Initiated cloud data sourcing methods for real-time performance visualization.`,
      categories: ["Embedded"]
    },
    {
      imgSrc: "https://cdn.jsdelivr.net/gh/spchanakya/spchanakya.github.io@main/Assets/image_rtl.jpg", 
      title: "Maze Runner - RTL Design",
      associatedWith: "Personal Project",
      skills: "RTL Design, DAC, ADC, OpAmp, UART, FIFO, FPGA, Static Timing Analysis (STA), Clock Domain Crossing (CDC)",
      description: `Developed and validated RTL blocks (DAC, ADC, OpAmp, UART_RX, UART_TX, FIFO) for FPGA, applying Static Timing Analysis (STA) and Clock Domain Crossing (CDC) techniques to optimize performance and ensure reliability.
      Enhanced system performance assessments and FPGA prototype testing through streamlined block-level verification, focusing on timing, data integrity, and FIFO management in asynchronous interfaces.`,
      categories: ["Embedded"]
    }
  ];

  const categories = ["All", "ML", "Embedded"];

  const filteredProjects = selectedCategory === "All"
    ? projectData
    : projectData.filter(project => project.categories.includes(selectedCategory));

  return (
    <div id="projects" className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">Projects</h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">What I Built</h4>
        <div className="mt-8 flex justify-center">
          {categories.map(category => (
            <button
              key={category}
              className={`mx-2 px-4 py-2 ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'} rounded`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap -mx-4">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              imgSrc={project.imgSrc}
              title={project.title}
              associatedWith={project.associatedWith}
              skills={project.skills}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
