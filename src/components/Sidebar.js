import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <ul className="sidebar navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/home">
          <i className="fas fa-fw fa-home"></i>
          <span>Home</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/video">
          <i className="fas fa-fw fa-video"></i>
          <span>Video Page</span>
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;
