import React from 'react';
import Project from './OneProject';
function ProjectList({ projects, styling }) {
  return (
    <div className="container">
      {projects.map((project) => (
        <Project {...project} styling={styling} />
      ))}
    </div>
  );
}

export default ProjectList;
