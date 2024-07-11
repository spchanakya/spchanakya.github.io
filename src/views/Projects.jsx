
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
      title: "LLM-Enhanced Database Query Solution",
      associatedWith: "MeghaAI",
      skills: "Python, GenAI, PostgreSQL, RAG, Prompt Engineering",
      description: [
        "<span class='highlight'>Problem Statement</span>: In many organizations, including the one that approached us, data is stored in PostgreSQL databases. Accessing this data requires knowledge of SQL queries, limiting the number of individuals who can retrieve information.",
        "<span class='highlight'>Approch</span>: Developed a solution using GPT-3.5 Turbo to convert user questions into SQL queries, enabling non-technical users to access the database.",
        "Utilized LangChain agents to streamline the process, incorporated authentication and chat history storage, and deployed the solution on Azure Web Apps, ensuring privacy and scalability using only the DB schema as context and Retrieval-Augmented Generation (RAG) concepts.",
        "<span class='highlight'>Impact</span>: Democratizes database access by enabling users without SQL knowledge to query the database effortlessly, improving productivity and decision-making across the organization.",
        "Ensures privacy and scalability through robust authentication, limited context provision, and the use of Azure Web Apps and RAG concepts, enhancing overall efficiency and security of data access."
      ],
      categories: ["ML"]
    },
    {
      url: "",
      imgSrc: "https://cdn.jsdelivr.net/gh/spchanakya/spchanakya.github.io@main/Assets/image_grafana.jpg",
      title: "KPI visualizations and monitoring using Grafana",
      associatedWith: "MeghaAI",
      skills: "KPI Analysis, Grafana, JavaScript, Apache Echarts, Data visualization",
      description: [
        "Problem Statement: Tracking KPIs like pre-order levels, production timelines, and demand forecasting is challenging due to disparate data sources and formats in the manufacturing industry.",
        "Approach: Grafana and Apache ECharts: Implemented Grafana for standard KPI plots and Apache ECharts for advanced visualizations, enabling real-time monitoring and in-depth analysis.",
        "Unified Dashboard: Designed a dashboard to consolidate data from multiple plants, allowing simultaneous monitoring and comparison of critical metrics like energy consumption and production efficiency.",
        "Impact: Data Accessibility and Decision-Making: Delivered a single-window solution that integrates all manufacturing data, providing comprehensive visibility and improving decision-making through actionable insights and advanced analytics."
      ],
      categories: ["ML"]
    },
    {
      url: "/",
      imgSrc: "https://cdn.jsdelivr.net/gh/spchanakya/spchanakya.github.io@main/Assets/image_RO.jpg",
      title: "Predictive Maintenance of RO filters",
      associatedWith: "MeghaAI",
      skills: "Prophet, python, Sklearn, Pandas",
      description: [
        "Problem Statement: The client's RO system required monitoring of pressure drops across filters, with frequent cleaning causing significant downtime.",
        "Current cleaning was done every 3-4 hours, often before reaching the pressure drop threshold, leading to inefficiency.",
        "Approach: Developed a time series forecasting system using Prophet to predict when the pressure drop threshold would be reached.",
        "Employed feature engineering techniques and evaluated various models, with Prophet providing the best results.",
        "Impact: Increased the filter cleaning cycle to 24 hours, reducing downtime and operational interruptions.",
        "Achieved a 50% reduction in filter cleaning costs, leading to significant cost savings."
      ],
      categories: ["ML"]
    },
    {
      url: "",
      imgSrc: "https://cdn.jsdelivr.net/gh/spchanakya/spchanakya.github.io@main/Assets/image_cern.jpg",
      title: "CNN and ML approach for Image Classification",
      associatedWith: "University of Wisconsin Madison",
      skills: "Python, Tensorflow, SkLearn, Matlab",
      description: [
        "Problem Statement:Identifying new particles emitted during atomic collisions requires manual observation, which is impractical due to the rarity of these events.",
        "Approach:Developed an automated method using AI models to classify particle images (16x16) into existing and new particles, logging parameters with MLflow. Performed PCA to identify that only 40% of the features significantly contributed to classification.",
        "Evaluated Naive Bayes, KNN, Decision Tree, and Random Forest classifiers, achieving 89% accuracy, and implemented a 4-layer CNN with TensorFlow, achieving 95% accuracy through hyperparameter tuning.",
        "Impact:Automated detection reduced the need for constant manual observation by scientists, enhancing efficiency.",
        "Proposed model reduced expert intervention by 90%, significantly streamlining the identification process of new particles"
      ],
      categories: ["ML"]
    },
    {
      imgSrc: "https://cdn.jsdelivr.net/gh/spchanakya/spchanakya.github.io@main/Assets/image_os.jpg", 
      title: "Advanced Memory File System and Scheduling Enhancements for XV6 OS",
      associatedWith: "University of Wisconsin Madison",
      skills: "C++, Linux, OS",
      description: [
        "Problem Statement:The XV6 operating system required improvements in its file system, shell, and interrupt handling to enhance overall system performance.",
        "There was a need to optimize process scheduling and concurrency for better system efficiency.",
        "Approach:Engineered an advanced memory file system, developed a custom shell, and improved the synchronous Interrupt Service Routine (ISR) for the XV6 OS.",
        "Enhanced process scheduling and concurrency by developing custom stack structures and implementing Multi-Level Feedback Queue (MLFQ) scheduling and mutexes.",
        "Impact:Improved the performance and reliability of the XV6 operating system through advanced memory management and efficient interrupt handling.",
        "Enhanced process scheduling and concurrency, leading to more efficient CPU utilization and better system responsiveness."],
      categories: ["Embedded"]
    },
    {
      url: "/",
      imgSrc: "https://cdn.jsdelivr.net/gh/spchanakya/spchanakya.github.io@main/Assets/image_capstone.jpg",
      title: "Enhanced MobileNetV2 for fruit and vegetable quality classification",
      associatedWith: "University of Wisconsin Madison",
      skills: "Python, Computer vision, Neural network, Tensorflow",
      description: [
        "Problem Statement: Ensuring the quality of food products throughout the supply chain is crucial, but traditional methods of assessing ripeness and quality are often inefficient and prone to error.",
        "Approach: Developed a deep learning-based solution using image analysis to determine the ripeness and quality of fruits and vegetables, leveraging pre-trained models (MobileNetV2, VGG16) and a custom 4-layer CNN.",
        "Employed data augmentation techniques and fine-tuned the models to enhance accuracy, enabling the system to classify food items into various ripeness stages.",
        "Impact: Optimized the quality control process in food processing and distribution centers, reducing waste and ensuring high-quality end products.",
        "Empowered consumers, including visually impaired individuals, to assess the quality of food products accurately, enhancing decision-making and reducing food waste."
      ],
      categories: ["ML"]
    },
    // {
    //   url: "",
    //   imgSrc: "https://cdn.jsdelivr.net/gh/spchanakya/spchanakya.github.io@main/Assets/image_grafana.jpg",
    //   title: "Model parameter tuning using MLFlow",
    //   associatedWith: "Akarsh Consultancy Enterprises",
    //   skills: "Grafana, JavaScript, Apache Echarts",
    //   description: [
    //     "Analyzed large MES Data in PostgreSQL, provided dashboards for critical KPI metrics in Grafana using Apache charts and Plotly.", 
    //     "Initiated cloud data sourcing methods for real-time performance visualization."],
    //   categories: ["ML"]
    // },
    {
      url: "",
      imgSrc: "https://cdn.jsdelivr.net/gh/spchanakya/spchanakya.github.io@main/Assets/image_cwt.jpg",
      title: "Water monitoring and control using IoT for CWT",
      associatedWith: "Aakarsh Consultancy Enterprises",
      skills: "Embedded C, FreeRTOS, Arduino, IoT, ThinkSpeak, Comm Protocols(SPI,I2C)",
      description: [
        "Problem Statement: A manufacturing facility needed to ensure water reusability by maintaining specific pH, temperature, and turbidity standards, which required manual checks by multiple employees.",
        "Approach: Developed an IIoT 4.0 solution with modules that continuously monitored pH, turbidity, and temperature, relaying data to a central processing unit using ESP8266.",
        "Built an IoT dashboard with Thinkspeak for remote monitoring and employed FreeRTOS for efficient scheduling, multitasking, and advanced interrupt handling.",
        "Impact: Automated the monitoring process, reducing the need for 10-12 employees and enabling remote management.",
        "Improved operational efficiency and water quality management, ensuring optimal cooling tower performance."
      ],
      categories: ["Embedded"]
    },
    {
      url: "",
      imgSrc: "https://cdn.jsdelivr.net/gh/spchanakya/spchanakya.github.io@main/Assets/image_gsm.jpg",
      title: "Smart Energy Meter using GSM",
      associatedWith: "Aakarsh Consultancy Enterprises",
      skills: "Embedded C, Arduino, IoT, ThinkSpeak, GSM protocol, Data Analysis",
      description: [
        "Problem Statement: In India, the adoption of smart meters is extremely low, with only 0.05% of the 200 million energy meters being smart. This limits the ability to monitor and manage energy consumption effectively.",
        "Approach: A cost-effective solution was developed by creating a device for under $6 using Arduino Uno and a GSM module. This device can be attached to existing energy meters, allowing them to read and transmit energy consumption data to a predefined network at regular intervals.",
        "Impact: This project facilitates the transformation of traditional energy meters into smart meters at a minimal cost, improving energy consumption monitoring, enhancing user awareness through detailed analysis, and enabling the detection and management of abnormal energy usage patterns."
      ],
      categories: ["Embedded"]
    },
    {
      url: "",
      imgSrc: "https://cdn.jsdelivr.net/gh/spchanakya/spchanakya.github.io@main/Assets/image_mine.jpg",
      title: "Embedded Multi-Sensor Remote Mine Monitor",
      associatedWith: "Aakarsh Consultancy Enterprises",
      skills: "Embedded C, FreeRTOS, Arduino, LoraWan",
      description: [
        "Problem Statement:Need for a system to remotely monitor atmospheric and terrain conditions in mines.",
        "Approach: Developed a system using Arduino Uno, Raspberry Pi, and the LoRa protocol.",
        "Employed ultrasonic, temperature, humidity, gas, and barometric pressure sensors for remote sensing and data analysis.",
        "Impact: Enabled efficient remote monitoring of environmental conditions in mines.",
        "Improved safety and data-driven decision-making in mining operations."
      ],
      categories: ["Embedded"]
    },
    {
      imgSrc: "https://cdn.jsdelivr.net/gh/spchanakya/spchanakya.github.io@main/Assets/image_rtl.jpg", 
      title: "Maze Runner - RTL Design",
      associatedWith: "Personal Project",
      skills: "RTL Design, DAC, ADC, OpAmp, UART, FIFO, FPGA, Static Timing Analysis (STA), Clock Domain Crossing (CDC)",
      description: [
        "Problem Statement: Need to develop and validate RTL blocks for FPGA to enhance performance and ensure reliability.",
        "Approach: Developed RTL blocks (DAC, ADC, OpAmp, UART_RX, UART_TX, FIFO) and applied STA and CDC techniques.",
        "Conducted streamlined block-level verification focusing on timing, data integrity, and FIFO management.",
        "Impact: Improved system performance assessments and FPGA prototype testing.",
        "Enhanced reliability and efficiency in FPGA designs."],
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
