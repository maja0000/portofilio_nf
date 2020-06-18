import React from 'react';
import './Header.scss';

import Toggle from '../../img/toggle.svg';
import GitHub from '../../img/gitHub.svg';
import LinkedIn from '../../img/linkedIn.svg';

import DownArrow from '../../img/downArrow.svg';

class Header extends React.Component {
  render(props) {
    const { onToggleChange, darkMode } = this.props;
    const style = {
      header: {
        backgroundColor: darkMode ? '#2E2E2E' : 'white',
      },
      textColor: {
        color: darkMode ? 'white' : '#2E2E2E',
      },
      svgColor: {
        filter: darkMode ? '' : 'invert(1)',
      },
    };
    return (
      <section id="header" className="section" style={style.header}>
        <img
          style={style.svgColor}
          className="dark-mode-toggle"
          onClick={onToggleChange}
          src={Toggle}
          alt="dark mode button"
        />
        <h3 className="header-emoji ">
          <span className="bug">🐛</span>
        </h3>
        <h1 className="header-headline-main title" style={style.textColor}>
          hey, I'm <span className="text-pink">Maja</span>.<br />
          I'm a junior web developer.
        </h1>
        <h1 className="header-headline " style={style.textColor}>
          Building in
          <span className="text-pink"> Java Script</span> and{' '}
          <span className="text-pink">React</span>, <br />
          my favourite stack is <span className="text-pink">MERN.</span>
        </h1>
        <div className="header-social">
          <a
            href=" https://github.com/maja0000"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="header-social-item"
              style={style.svgColor}
              src={GitHub}
              alt="Github button"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/majagach/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="header-social-item"
              style={style.svgColor}
              src={LinkedIn}
              alt="linkedIn button"
            />
          </a>
        </div>
        <a href="#about-me">
          <div className="scroll-button">
            <h5 style={style.textColor}>Scroll Down</h5>
            <img
              style={style.svgColor}
              src={DownArrow}
              alt="scroll down button"
            />
          </div>
        </a>
      </section>
    );
  }
}

export default Header;
