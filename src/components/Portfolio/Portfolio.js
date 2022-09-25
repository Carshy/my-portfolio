import React from 'react';
import PropTypes from 'prop-types';
import './Portfolio.css';

const Portfolio = ({
  img, title, description, language, see,
}) => (
  <div className="portfolio-section">
    <div className="project-image">
      <img src={img} alt={title} />
    </div>
    <div className="project-details">
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <div className="project-stacks">
        <p className="languages">{language}</p>
        <p className="languages">{language}</p>
        <p className="languages">{language}</p>
      </div>
      <button className="see" type="button">{see}</button>
    </div>
  </div>
);

Portfolio.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  language: PropTypes.string,
  see: PropTypes.string,
}.isRequired;

export default Portfolio;
