import React from 'react';
import './Portfolio.css';
import animalia from '../../assets/animalia.PNG';

const Portfolio = () => (
  <div className="portfolio-section">
    <div className="project-image">
      <img src={animalia} alt="Project1" />
    </div>
    <div className="project-details">
      <h1>e-shop</h1>
      <p>
        This project is based on an eCommerce website built
        with React. The user can add items to the cart, increase
        or decrease the number of items on the cart, or even empty
        the cart. The user can also click on checkout from the cart
        and pay by entering his/her credit card number.
      </p>
      <div className="project-stacks">
        <p>React</p>
        <p>Redux</p>
        <p>JavaScript</p>
      </div>
      <button type="button">See Live</button>
      <button type="button">Source</button>
    </div>
  </div>
);

export default Portfolio;
