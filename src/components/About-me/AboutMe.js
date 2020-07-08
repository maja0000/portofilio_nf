import React from 'react';
import './AboutMe.scss';
import profilePics from '../../img/profilePics.png';
import Button from '@material-ui/core/Button';

let skills = [
  { name: 'JavaScript', className: 'js skill' },
  { name: 'React', className: 'react skill' },
  { name: 'MongoDB', className: 'mongodb skill' },

  { name: 'Redux', className: 'redux skill' },
  { name: 'Version control', className: 'git skill' },
  { name: 'html', className: 'html skill' },
  { name: 'css', className: 'css skill' },
  { name: 'sass', className: 'sass' },

  { name: 'Styled Components', className: 'styled-components skill' },
  { name: 'Material UI', className: 'materialui skill' },
];

function AboutMe() {
  return (
    <section id="about-me" className="section">
      <div className="about-me-details">
        <h1 className="title">nice to meet you!</h1>
        <div className="left-right-wrapper">
          <div className="about-left">
            <img
              className="profilePicture"
              src={profilePics}
              alt="my profile"
              height="130px"
              width="auto"
            />
            <br />
            <div className="cv-email-buttons">
              <Button
                variant="outlined"
                href="https://drive.google.com/file/d/1PCXJpCsTQjKXgLb2A42yaDgMNHy9pcAl/view?usp=sharing"
                className="cv-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                see my cv
              </Button>{' '}
              <Button
                variant="outlined"
                href="mailto:maja.gach@gmail.com"
                className="mail-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                email me
              </Button>
            </div>
            <p className="about-me-paragraph">
              I'm a code doodler with a passion for building useful tools online
              and good design. Previously working on managing positions, I know
              how to build good fellowship and what comes next, great product!{' '}
              <br />
              I'm in a hunt for a new interesting project to work on! I always
              look for better, easier solutions to difficult problems. Currently
              learning React Native and Typescript! You can read about the way I
              work{' '}
              <a href="https://how-i-work.netlify.app/">
                <strong>here</strong> .
              </a>
              <br />
              <br /> Feel free to contact me, I'll be happy to hear from you!
            </p>
          </div>

          <div className="about-right">
            {skills.map((skill) => (
              <div
                className="skill-pair"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  margin: '0px 20px 0px 5px',
                }}
              >
                <p>{skill.name}</p>
                <div className={skill.className}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutMe;
