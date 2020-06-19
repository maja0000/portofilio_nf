import React from 'react';
import github from '../../img/gitHub.svg';
import linkedIn from '../../img/linkedIn.svg';
import twitter from '../../img/icons/twitter-square.svg';
import cv from '../../img/icons/cv2.svg';
import contact from '../../img/icons/contact.svg';

export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: '#2e2e2e',
        display: 'flex',
        padding: '10px',
      }}
    >
      <span style={{ color: 'white', fontWeight: '700', marginRight: '30px' }}>
        say hi !
      </span>
      <a href="https://github.com/maja0000">
        <img
          style={{ marginRight: '10px' }}
          src={github}
          alt="github"
          width="23px"
          height="23px"
        />
      </a>
      <a href="https://www.linkedin.com/in/majagach/">
        <img
          style={{ marginRight: '10px' }}
          src={linkedIn}
          alt="linkedIn"
          width="20px"
          height="20px"
        />
      </a>
      <a href="https://twitter.com/maja_gch/">
        <img
          style={{ marginRight: '10px' }}
          src={twitter}
          alt="twitter"
          width="20px"
          height="20px"
        />
      </a>
      <a href="https://drive.google.com/file/d/1PCXJpCsTQjKXgLb2A42yaDgMNHy9pcAl/view">
        <img
          style={{ marginRight: '10px' }}
          src={cv}
          alt="cv"
          width="20px"
          height="20px"
        />
      </a>
      <a href="mailto:maja.gach@gmail.com">
        <img
          style={{ marginRight: '10px' }}
          src={contact}
          alt="email"
          width="20px"
          height="20px"
        />
      </a>
    </div>
  );
}
