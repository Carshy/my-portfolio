import React from 'react';
import './Introduction.css';
import github1 from '../../assets/github1.png';
import linkedin1 from '../../assets/linkedin1.png';
import angellist1 from '../../assets/angellist1.png';
import twitter1 from '../../assets/twitter1.png';
import medium1 from '../../assets/medium1.png';

function Introduction() {
  return (
    <div className="introduction-section">
      <ul className="social-links">
        <li className="nav-items">
          <a href="/"><img src={github1} alt="Github" /></a>
        </li>
        <li className="nav-items">
          <a href="/"><img src={linkedin1} alt="Github" /></a>
        </li>
        <li className="nav-items">
          <a href="/"><img src={angellist1} alt="ngellist" /></a>
        </li>
        <li className="nav-items">
          <a href="/"><img src={twitter1} alt="Twitter" /></a>
        </li>
        <li className="nav-items">
          <a href="/"><img src={medium1} alt="Medium" /></a>
        </li>
      </ul>
      <div className="intro-details">
        <h1>
          Hey There.
          <br />
          I am Collins
        </h1>
        <h2>I am a Software Developer</h2>
        <p>
          I can help you build a product, feature
          <br />
          or website Look through some of my work
          <br />
          and experience! If you like what you see and have a project you need coded,
          <br />
          do not hestiate to contact me.
        </p>
      </div>
    </div>
  );
}

export default Introduction;
