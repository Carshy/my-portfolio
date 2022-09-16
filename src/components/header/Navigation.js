import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <div>
      <nav className="nav-section">
      <a href="/" className="bookstore-logo">
        Musoko Collins
      </a>
      <ul className="nav-group">
        <li>
          <a href="/" className="nav-items">
            Portfolio
          </a>
        </li>
        <li>
          <a href="/" className="nav-items">
            About
          </a>
        </li>
        <li>
          <a href="/" className="nav-items">
            Contact
          </a>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Navigation
