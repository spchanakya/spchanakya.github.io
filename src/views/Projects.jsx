
import React, { useContext } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const projectData = [
    {
      url: "",
      imgSrc: "https://cdn.jsdelivr.net/gh/spchanakya/spchanakya.github.io@main/Assets/image_chatbot.jpg",
      title: "Generative AI-Enabled Web Application for SQL Databases",
      associatedWith: "MeghaAI",
      skills: "Python, GenAI, PostgreSQL, RAG, Prompt Engineering",
      description: "Developed an Chat-interface powered by ChatGPT3.5 turbo on top of SQL (PostgreSQL DB). Utilized RAG and Prompt engineering techniques to ehnace the relavance factor by 3x"
    },
    {
      url: "",
      imgSrc: "https://cdn.jsdelivr.net/gh/spchanakya/spchanakya.github.io@main/Assets/image_grafana.jpg",
      title: "KPI visualizations and monitoring using Grafana",
      associatedWith: "MeghaAI",
      skills: "Grafana, JavaScript, Apache Echarts",
      description: `Analyzed large MES Data in PostgreSQL, Provided Dashboards for critical KPI metrics in Grafana using Apache charts,
      Plotly to enhance inventory management, and Initiated cloud data sourcing methods for real-time performance visualization.`
    },
    {
      url: "/project1-url",
      imgSrc: "https://cdn.jsdelivr.net/gh/spchanakya/spchanakya.github.io@main/Assets/image_RO.jpg",
      title: "Predictive Maintainance of RO filters",
      associatedWith: "MeghaAI",
      skills: "Python, ML, Time series, CNN",
      description: `Slashed Business operations costs by 50% in the Plant by Innovating an AI model using Regression, performed correlation
analysis for feature engineering with sensor data for predictive maintenance of stakeholders’ $50 million RO unit filters.`
    },
    {
      url: "/project2-url",
      imgSrc: "https://cdn.jsdelivr.net/gh/spchanakya/spchanakya.github.io@main/Assets/image_capstone.jpg",
      title: "Project 2",
      associatedWith: "MeghaAI",
      skills: "Python, GenAI, PostgreSQL, RAG, Prompt Engineering",
      description: "This is a short description of Project 2."
    }
  ];

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
          What I Built
        </h4>
        <div className="mt-8 flex flex-wrap -mx-4">
          {projectData.map((project, index) => (
            <Card
              key={index}
              url={project.url}
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
