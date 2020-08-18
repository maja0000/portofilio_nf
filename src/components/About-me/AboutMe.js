import React from 'react';
import './AboutMe.scss';
import profilePics from '../../img/profilePics.png';
import Button from '@material-ui/core/Button';

let skills = [
  { name: 'JavaScript', className: 'js skill' },
  { name: 'React', className: 'react skill' },
  { name: 'Node.js', className: 'node skill' },
  { name: 'MongoDB', className: 'mongodb skill' },
  { name: 'MySQL', className: 'mysql skill' },

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
        <h1 className="title welcome">nice to meet you!</h1>
        <div className="left-right-wrapper">
          <div className="about-left">
            <img
              className="profilePicture"
              src={profilePics}
              alt="my profile"
              height="130px"
              width="auto"
              data-aos="fade-up-right"
            />
            <br />
            <div data-aos="fade-left" className="cv-email-buttons">
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
            <p data-aos="fade-right" className="about-me-paragraph">
              I'm a code doodler with passion for design and building useful
              tools online. I have a people-first attitude and I'm not (yet!)
              tech opinionated. Curious to learned anything new, currently React
              Native and Typescript.
              <br />
              I'm in a hunt for a new interesting project to work on! You can
              read about the way I work{' '}
              <a
                href="https://how-i-work.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>here</strong>.
              </a>{' '}
              Or check out my daily progress on
              <a
                href="https://twitter.com/maja_gch"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong> twitter</strong>.
              </a>
              <br />
              <br /> If you think I could help you build something on the web,
              feel free to contact me, I'll be happy to hear from you!
            </p>
          </div>

          <div className="about-right">
            {skills.map((skill) => (
              <div
                className="skill-pair"
                data-aos="fade-left"
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
