
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
//       date: 'Mar 2021 - Mar 2022',
//       title: 'research Intern',
//       location: 'SPCRC, IIITH, India',
//       description: 'derived and published research conference paper on characterizing SNR chanracteristics in UAV based Communication',
//       type: 'career',
//     },
//     {
//       date: 'Mar 2021 - Mar 2022',
//       title: 'Data Scientist',
//       location: 'Aakarsh Consultancy Enterprises, India',
//       description: 'Enhanced ML model accuracy and system reliability, led Azure cloud deployment with key metrics dashboards, improved supplier evaluation, and designed forecasting models for automated inventory management.',
//       type: 'career',
//     },
//     {
//       date: 'Jan 2020 - Mar 2021',
//       title: 'Embedded Hardware Intern',
//       location: 'Aakarsh Consultancy Enterprises, India',
//       description: 'Worked on Iot and GSM enabled prototypes and built automated embedded devices',
//       type: 'career',
//     },
//     {
//       date: 'Jun 2019 - Aug 2020',
//       title: 'Silicon Design Intern',
//       location: 'Indian Institute of Sciences, India',
//       description: 'Fabricated passive semiconductor devices and developed, verified digital filters and parity check circuits using VHDL in Xilinx Vivado for high-performance memory subsystems.',
//       type: 'career',
//     },
//     {
//       date: 'Jul 2021',
//       title: 'Bachelor of Technology in ECE',
//       location: 'Sreenidhi Institute of Science and Technology, Hyderabad, India',
//       description: 'Graduated in Electronics and Communication Engineering',
//       type: 'education',
//     },
//   ];

//   return (
//     <div id="careers">
//       <VerticalTimeline>
//         {timelineElements
//           .sort((a, b) => new Date(b.date) - new Date(a.date)) // Reverse chronological order
//           .map((element, index) => (
//             <VerticalTimelineElement
//               key={index}
//               date={element.date}
//               iconStyle={{ background: element.type === 'career' ? 'rgb(33, 150, 243)' : 'rgb(233, 30, 99)', color: '#fff' }}
//               position={element.type === 'career' ? 'right' : 'left'}
//             >
//               <div className="timeline-element-content">
//                 <h3 className="vertical-timeline-element-title">{element.title}</h3>
//                 <h4 className="vertical-timeline-element-subtitle">{element.location}</h4>
//                 <p className="vertical-timeline-element-description">{element.description}</p>
//               </div>
//             </VerticalTimelineElement>
//           ))}
//       </VerticalTimeline>
//     </div>
//   );
// };

// export default Timeline;



// import React from 'react';

// import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';

// import { ReactComponent as WorkIcon } from '../assets/icons/work.svg';
// import { ReactComponent as SchoolIcon } from '../assets/icons/school.svg';
// import { ReactComponent as StarIcon } from '../assets/icons/star.svg';

// export default function Home() {
//     const typeSchool = 'school';
//     const typeWork = 'work';
//     const timelineData = [
//         {
//             id: 0,
//             date: 'Aug 2021 - Present',
//             title: 'Trinity College Dublin – Dublin, Ireland',
//             subtitle: 'M.Sc. Interactive Digital Media',
//             type: typeSchool,
//         },
//         {
//             id: 1,
//             date: 'Oct 2019 – July 2021',
//             title: 'JOSH TECHNOLOGY GROUP – Gurgaon, India',
//             subtitle: 'Senior Software Developer - 1',
//             type: typeWork,
//         },
//         {
//             id: 2,
//             date: 'July 2018 – Sep 2019',
//             title: 'JOSH TECHNOLOGY GROUP – Gurgaon, India',
//             subtitle: 'Software Developer',
//             type: typeWork,
//         },
//         {
//             id: 3,
//             date: 'Jan 2018 – Jun 2018  ',
//             title: 'JOSH TECHNOLOGY GROUP – Gurgaon, India',
//             subtitle: 'Software Development Intern',
//             type: typeWork,
//         },
//         {
//             id: 4,
//             date: 'Aug 2014 - July 2018',
//             title: 'YMCA University of Science and Technology – Faridabad, India',
//             subtitle: 'Bachelor of Technology, Computer Engineering',
//             type: typeSchool,
//         },
//         {
//             id: 5,
//             date: 'Apr 2014',
//             title: 'Delhi Public School, Sushant Lok – Gurgaon, India',
//             subtitle: 'High School',
//             type: typeSchool,
//         },
//     ];

//     return (
//         <VerticalTimeline
//             className="vertical-timeline-container"
//             animate={false}
//             lineColor="#000"
//         >
//             {timelineData.map(item => (
//                     <VerticalTimelineElement
//                         id={item.id}
//                         key={item.id}
//                         className="vertical-timeline-element--work"
//                         contentStyle={{ background: '#aaa', color: '#000' }}
//                         contentArrowStyle={{ borderRight: '7px solid #aaa' }}
//                         date={item.date}
//                         iconStyle={{ background: '#aaa', border: '#000' }}
//                         icon={item.type === typeWork ? <WorkIcon /> : <SchoolIcon />}
//                     >
//                         <h3 className="vertical-timeline-element-title">{item.title}</h3>
//                         <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
//                     </VerticalTimelineElement>
//                 ))}
//             <VerticalTimelineElement
//                 id="vertical-timeline-icon-star"
//                 iconStyle={{ background: '#aaa', border: '#000' }}
//                 icon={<StarIcon />}
//             />
//         </VerticalTimeline>
//     );
// }

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { ReactComponent as WorkIcon } from '../assets/icons/work.svg';
import { ReactComponent as SchoolIcon } from '../assets/icons/school.svg';
import { ReactComponent as StarIcon } from '../assets/icons/star.svg';

export default function Home() {
    const typeSchool = 'school';
    const typeWork = 'work';
    const timelineData = [
        {
            id: 0,
            date: 'Feb 2024 - Present',
            title: 'Machine Learning Engineer',
            subtitle: 'MeghaAI, Indiana, USA',
            description: 'Slashed business operations costs by 50% by innovating an AI model using Regression for predictive maintenance of RO unit filters...',
            type: typeWork,
        },
        {
            id: 1,
            date: 'Dec 2023',
            title: 'Master of Science in ECE',
            subtitle: 'University of Wisconsin-Madison',
            description: 'Specialized in Machine Learning and Signal Processing...',
            type: typeSchool,
        },
        {
            id: 2,
            date: 'Apr 2022 - Jul 2022',
            title: 'Program Analyst Trainee',
            subtitle: 'Cognizant Technology Solutions, India',
            description: 'Examined large multivariant datasets, engineered, and deployed ETL and ML pipelines using Docker...',
            type: typeWork,
        },
        {
            id: 3,
            date: 'Mar 2021 - Mar 2022',
            title: 'Research Intern',
            subtitle: 'SPCRC, IIITH, India',
            description: 'Derived and published a research conference paper on characterizing SNR characteristics in UAV-based communication...',
            type: typeWork,
        },
        {
            id: 4,
            date: 'Mar 2021 - Mar 2022',
            title: 'Data Scientist',
            subtitle: 'Aakarsh Consultancy Enterprises, India',
            description: 'Enhanced ML model accuracy and system reliability, led Azure cloud deployment with key metrics dashboards, improved supplier evaluation, and designed forecasting models for automated inventory management...',
            type: typeWork,
        },
        {
            id: 7,
            date: 'Jul 2021',
            title: 'Bachelor of Technology in ECE',
            subtitle: 'Sreenidhi Institute of Science and Technology, Hyderabad, India',
            description: 'Graduated in Electronics and Communication Engineering...',
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
            date: 'Jun 2019 - Aug 2020',
            title: 'Silicon Design Intern',
            subtitle: 'Indian Institute of Sciences, India',
            description: 'Fabricated passive semiconductor devices and developed, verified digital filters and parity check circuits using VHDL in Xilinx Vivado for high-performance memory subsystems...',
            type: typeWork,
        },
    ];

    return (
        <VerticalTimeline
            className="vertical-timeline-container"
            animate={false}
            lineColor="#000"
        >
            {timelineData.map(item => (
                <VerticalTimelineElement
                    id={item.id}
                    key={item.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#aaa', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid #aaa' }}
                    date={item.date}
                    iconStyle={{ background: item.type === typeWork ? '#aaa' : '#e91e63', border: '#000' }}
                    icon={item.type === typeWork ? <WorkIcon /> : <SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">{item.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
                    <p>{item.description}</p>
                </VerticalTimelineElement>
            ))}
            <VerticalTimelineElement
                id="vertical-timeline-icon-star"
                iconStyle={{ background: '#aaa', border: '#000' }}
                icon={<StarIcon />}
            />
        </VerticalTimeline>
    );
}
