import React from 'react';
import Project from './OneProject';
function ProjectList({ projects, styling, darkMode }) {
  return (
    <div className="container">
      {projects.map((project) => (
        <Project {...project} styling={styling} darkMode={darkMode} />
      ))}
    </div>
  );
}

export default ProjectList;
