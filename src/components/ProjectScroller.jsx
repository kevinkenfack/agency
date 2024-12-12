import React from 'react';
import '../styles/ProjectScroller.css';

const ProjectScroller = () => {
  const projects = [
    '/project/project.webp',
    '/project/project.webp',
    '/project/project.webp',
    '/project/project.webp',
    '/project/project.webp',
  ];

  return (
    <section className="projects-section">
      {/* Première ligne - défilement vers la gauche */}
      <div className="scroller-container">
        <div className="scroller" style={{ '--animation-duration': '80s' }}>
          <div className="scroller-inner">
            {projects.map((project, index) => (
              <img
                key={`row1-1-${index}`}
                src={project}
                alt={`Project ${index + 1}`}
                className="project-image"
                loading="lazy"
              />
            ))}
            {projects.map((project, index) => (
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
            {projects.map((project, index) => (
              <img
                key={`row2-1-${index}`}
                src={project}
                alt={`Project ${index + 1}`}
                className="project-image"
                loading="lazy"
              />
            ))}
            {projects.map((project, index) => (
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
            {projects.map((project, index) => (
              <img
                key={`row3-1-${index}`}
                src={project}
                alt={`Project ${index + 1}`}
                className="project-image"
                loading="lazy"
              />
            ))}
            {projects.map((project, index) => (
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