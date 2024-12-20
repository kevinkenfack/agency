import React from 'react';
import '../styles/ProjectScroller.css';

const ProjectScroller = () => {
  const allProjects = [
    '/project/1ec2e.png',
    '/project/2be11.png',
    '/project/5e6a1.png',
    '/project/6d665.png',
    '/project/7bbc4.png',
    '/project/8c63b.png',
    '/project/9e9ec.png',
    '/project/49c2c.png',
    '/project/107abd.png',
    '/project/112b9e.png',
    '/project/304b5.png',
    '/project/1535ab.png',
    '/project/14691f.png',
    '/project/32270.png',
    '/project/132420.png'
  ];

  // Diviser les 15 images en 3 groupes de 5
  const firstRowProjects = allProjects.slice(0, 5);
  const secondRowProjects = allProjects.slice(5, 10);
  const thirdRowProjects = allProjects.slice(10, 15);

  return (
    <section className="projects-section" id="projects">
      {/* Première ligne - défilement vers la gauche */}
      <div className="scroller-container">
        <div className="scroller" style={{ '--animation-duration': '80s' }}>
          <div className="scroller-inner">
            {firstRowProjects.map((project, index) => (
              <img
                key={`row1-1-${index}`}
                src={project}
                alt={`Project ${index + 1}`}
                className="project-image"
                loading="lazy"
              />
            ))}
            {firstRowProjects.map((project, index) => (
              <img
                key={`row1-2-${index}`}
                src={project}
                alt={`Project ${index + 1}`}
                className="project-image"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Deuxième ligne - défilement vers la droite */}
      <div className="scroller-container">
        <div className="scroller" style={{ '--animation-duration': '70s' }}>
          <div className="scroller-inner reverse">
            {secondRowProjects.map((project, index) => (
              <img
                key={`row2-1-${index}`}
                src={project}
                alt={`Project ${index + 1}`}
                className="project-image"
                loading="lazy"
              />
            ))}
            {secondRowProjects.map((project, index) => (
              <img
                key={`row2-2-${index}`}
                src={project}
                alt={`Project ${index + 1}`}
                className="project-image"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Troisième ligne - défilement vers la gauche */}
      <div className="scroller-container">
        <div className="scroller" style={{ '--animation-duration': '90s' }}>
          <div className="scroller-inner">
            {thirdRowProjects.map((project, index) => (
              <img
                key={`row3-1-${index}`}
                src={project}
                alt={`Project ${index + 1}`}
                className="project-image"
                loading="lazy"
              />
            ))}
            {thirdRowProjects.map((project, index) => (
              <img
                key={`row3-2-${index}`}
                src={project}
                alt={`Project ${index + 1}`}
                className="project-image"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectScroller; 