import React from 'react';
import './Project.scss';

function Project({ title, img, styling, link, description }) {
  const style = {
    ...styling,
    projectPic: {
      backgroundImage: `url("${img}")`,
    },

    title: {
      fontSize: '25px',
    },
  };
  return (
    <div className="project-wrapper">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="pic-desc">
          <div className="description">
            <span style={style.title}>{title}</span>
            <br />

            {description}
          </div>
          <div className="project-picture" style={style.projectPic}></div>
        </div>
      </a>
    </div>
  );
}
export default Project;
