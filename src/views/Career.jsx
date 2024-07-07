// // Timeline.js
// import React from 'react';
// import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
// import './Timeline.css'; // Add custom styles for hover effect

// const Timeline = () => {
//   const timelineElements = [
//     {
//       date: 'Feb 2024 - Present',
//       title: 'Machine Learning Engineer',
//       location: 'MeghaAI, Indiana, USA',
//       description: 'Slashed business operations costs by 50% by innovating an AI model using Regression for predictive maintenance of RO unit filters...',
//       type: 'career',
//     },
//     {
//       date: 'Dec 2023',
//       title: 'Master of Science in ECE',
//       location: 'University of Wisconsin-Madison',
//       description: 'Specialized in Machine Learning and Signal Processing...',
//       type: 'education',
//     },
//     {
//       date: 'Apr 2022 - Jul 2022',
//       title: 'Program Analyst Trainee',
//       location: 'Cognizant Technology Solutions, India',
//       description: 'Examined large multivariant datasets, engineered, and deployed ETL and ML pipelines using Docker...',
//       type: 'career',
//     },
//     {
//       date: 'Jan 2021 - Mar 2022',
//       title: 'Data Scientist',
//       location: 'Aakarsh Consultancy Enterprises, India',
//       description: 'Improved ML model accuracy to 89% by refining data structuring and enhancing system reliability...',
//       type: 'career',
//     },
//     {
//       date: 'Jul 2021',
//       title: 'Bachelor of Technology in ECE',
//       location: 'Sreenidhi Institute of Science and Technology, Hyderabad, India',
//       description: 'Graduated with a focus on Electronics and Communication Engineering...',
//       type: 'education',
//     },
//   ];

//   return (
//     <VerticalTimeline>
//       {timelineElements
//         .sort((a, b) => new Date(b.date) - new Date(a.date)) // Reverse chronological order
//         .map((element, index) => (
//           <VerticalTimelineElement
//             key={index}
//             date={element.date}
//             iconStyle={{ background: element.type === 'career' ? 'rgb(33, 150, 243)' : 'rgb(233, 30, 99)', color: '#fff' }}
//             position={element.type === 'career' ? 'right' : 'left'}
//           >
//             <div className="timeline-element-content">
//               <h3 className="vertical-timeline-element-title">{element.title}</h3>
//               <h4 className="vertical-timeline-element-subtitle">{element.location}</h4>
//               <p className="vertical-timeline-element-description">{element.description}</p>
//             </div>
//           </VerticalTimelineElement>
//         ))}
//     </VerticalTimeline>
//   );
// };

// export default Timeline;
// Timeline.js
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.css'; // Add custom styles for hover effect

const Timeline = () => {
  const timelineElements = [
    {
      date: 'Feb 2024 - Present',
      title: 'Machine Learning Engineer',
      location: 'MeghaAI, Indiana, USA',
      description: 'Slashed business operations costs by 50% by innovating an AI model using Regression for predictive maintenance of RO unit filters...',
      type: 'career',
    },
    {
      date: 'Dec 2023',
      title: 'Master of Science in ECE',
      location: 'University of Wisconsin-Madison',
      description: 'Specialized in Machine Learning and Signal Processing...',
      type: 'education',
    },
    {
      date: 'Apr 2022 - Jul 2022',
      title: 'Program Analyst Trainee',
      location: 'Cognizant Technology Solutions, India',
      description: 'Examined large multivariant datasets, engineered, and deployed ETL and ML pipelines using Docker...',
      type: 'career',
    },
    {
      date: 'Jan 2021 - Mar 2022',
      title: 'Data Scientist',
      location: 'Aakarsh Consultancy Enterprises, India',
      description: 'Improved ML model accuracy to 89% by refining data structuring and enhancing system reliability...',
      type: 'career',
    },
    {
      date: 'Jul 2021',
      title: 'Bachelor of Technology in ECE',
      location: 'Sreenidhi Institute of Science and Technology, Hyderabad, India',
      description: 'Graduated with a focus on Electronics and Communication Engineering...',
      type: 'education',
    },
  ];

  return (
    <div id="careers">
      <VerticalTimeline>
        {timelineElements
          .sort((a, b) => new Date(b.date) - new Date(a.date)) // Reverse chronological order
          .map((element, index) => (
            <VerticalTimelineElement
              key={index}
              date={element.date}
              iconStyle={{ background: element.type === 'career' ? 'rgb(33, 150, 243)' : 'rgb(233, 30, 99)', color: '#fff' }}
              position={element.type === 'career' ? 'right' : 'left'}
            >
              <div className="timeline-element-content">
                <h3 className="vertical-timeline-element-title">{element.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{element.location}</h4>
                <p className="vertical-timeline-element-description">{element.description}</p>
              </div>
            </VerticalTimelineElement>
          ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
