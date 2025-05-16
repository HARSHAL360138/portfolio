// import React from 'react';
// import Image1 from '../assets/image2.png';

// const projectData = [
//   {
//     title: 'Explorify App',
//     image: Image1, // Replace with correct path
//     github: 'https://github.com/your-username/explorify',
//     demo: 'https://your-live-demo-link.com/explorify',
//   },
//   {
//     title: 'TimeSync App',
//     image: Image1, // Replace with correct path
//     github: 'https://github.com/your-username/timesync',
//     demo: 'https://your-live-demo-link.com/timesync',
//   },
//   {
//     title: 'Hot Coffee App',
//     image: Image1, // Replace with correct path
//     github: 'https://github.com/your-username/hotcoffee',
//     demo: 'https://your-live-demo-link.com/hotcoffee',
//   },
//   {
//     title: 'FitTrack App',
//     image: Image1,
//     github: 'https://github.com/your-username/fittrack',
//     demo: 'https://your-live-demo-link.com/fittrack',
//   },
//   {
//     title: 'EduLearn App',
//     image: Image1,
//     github: 'https://github.com/your-username/edulearn',
//     demo: 'https://your-live-demo-link.com/edulearn',
//   },
//   {
//     title: 'TaskMate App',
//     image: Image1,
//     github: 'https://github.com/your-username/taskmate',
//     demo: 'https://your-live-demo-link.com/taskmate',
//   },
// ];

// function Projects() {
//   return (
//     <section id="projects" className="w-full py-20 px-4 md:px-16 bg-white dark:bg-gray-900">
//       <div className="text-center mb-12">
//         <p className="text-sm text-gray-500 dark:text-gray-400">Browse My Recent</p>
//         <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Projects</h2>
//       </div>

//       <div className="grid gap-10 md:grid-cols-3">
//         {projectData.map((project, index) => (
//           <div key={index} className="bg-white dark:bg-gray-800 rounded-3xl shadow-md overflow-hidden flex flex-col items-center p-6">
//             <img src={project.image} alt={project.title} className="rounded-xl w-full mb-6 object-cover" />
//             <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">{project.title}</h3>
//             <div className="flex gap-4">
//               <a
//                 href={project.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="px-4 py-2 border border-gray-500 dark:border-gray-300 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
//               >
//                 Github
//               </a>
//               <a
//                 href={project.demo}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="px-4 py-2 border border-gray-500 dark:border-gray-300 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
//               >
//                 Live Demo
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Projects;










// import React from 'react';
// import 'animate.css';
// import Image1 from '../assets/image2.png';

// const projectData = [
//   {
//     title: 'Explorify App',
//     image: Image1,
//     github: 'https://github.com/your-username/explorify',
//     demo: 'https://your-live-demo-link.com/explorify',
//   },
//   {
//     title: 'TimeSync App',
//     image: Image1,
//     github: 'https://github.com/your-username/timesync',
//     demo: 'https://your-live-demo-link.com/timesync',
//   },
//   {
//     title: 'Hot Coffee App',
//     image: Image1,
//     github: 'https://github.com/your-username/hotcoffee',
//     demo: 'https://your-live-demo-link.com/hotcoffee',
//   },
//   {
//     title: 'FitTrack App',
//     image: Image1,
//     github: 'https://github.com/your-username/fittrack',
//     demo: 'https://your-live-demo-link.com/fittrack',
//   },
//   {
//     title: 'EduLearn App',
//     image: Image1,
//     github: 'https://github.com/your-username/edulearn',
//     demo: 'https://your-live-demo-link.com/edulearn',
//   },
//   {
//     title: 'TaskMate App',
//     image: Image1,
//     github: 'https://github.com/your-username/taskmate',
//     demo: 'https://your-live-demo-link.com/taskmate',
//   },
// ];

// function Projects() {
//   return (
//     <section id="projects" className="w-full py-20 px-4 md:px-16 bg-white dark:bg-gray-900">
//       <div className="text-center mb-12 animate__animated animate__fadeInDown">
//         <p className="text-sm text-gray-500 dark:text-gray-400">Browse My Recent</p>
//         <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Projects</h2>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {projectData.map((project, index) => (
//           <div
//             key={index}
//             className="bg-white dark:bg-gray-800 rounded-3xl shadow-md overflow-hidden flex flex-col items-center p-6 animate__animated animate__fadeInUp animate__delay-1s"
//           >
//             <img
//               src={project.image}
//               alt={project.title}
//               className="rounded-xl w-full mb-6 object-cover max-h-48"
//             />
//             <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 text-center">
//               {project.title}
//             </h3>
//             <div className="flex gap-4">
//               <a
//                 href={project.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="px-4 py-2 border border-gray-500 dark:border-gray-300 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
//               >
//                 Github
//               </a>
//               <a
//                 href={project.demo}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="px-4 py-2 border border-gray-500 dark:border-gray-300 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
//               >
//                 Live Demo
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Projects;













import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import Image1 from '../assets/image2.png';

const projectData = [
  {
    title: 'Explorify App',
    image: Image1,
    github: 'https://github.com/your-username/explorify',
    demo: 'https://your-live-demo-link.com/explorify',
  },
  {
    title: 'TimeSync App',
    image: Image1,
    github: 'https://github.com/your-username/timesync',
    demo: 'https://your-live-demo-link.com/timesync',
  },
  {
    title: 'Hot Coffee App',
    image: Image1,
    github: 'https://github.com/your-username/hotcoffee',
    demo: 'https://your-live-demo-link.com/hotcoffee',
  },
  {
    title: 'FitTrack App',
    image: Image1,
    github: 'https://github.com/your-username/fittrack',
    demo: 'https://your-live-demo-link.com/fittrack',
  },
  {
    title: 'EduLearn App',
    image: Image1,
    github: 'https://github.com/your-username/edulearn',
    demo: 'https://your-live-demo-link.com/edulearn',
  },
  {
    title: 'TaskMate App',
    image: Image1,
    github: 'https://github.com/your-username/taskmate',
    demo: 'https://your-live-demo-link.com/taskmate',
  },
];

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="projects" className="w-full py-20 px-4 md:px-16 bg-white dark:bg-gray-900">
      <div className="text-center mb-12" data-aos="fade-down">
        <p className="text-sm text-gray-500 dark:text-gray-400">Browse My Recent</p>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Projects</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-md overflow-hidden flex flex-col items-center p-6"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-xl w-full h-48 object-cover mb-6"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 text-center">
              {project.title}
            </h3>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-gray-500 dark:border-gray-300 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Github
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-gray-500 dark:border-gray-300 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
