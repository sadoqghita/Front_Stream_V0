import React from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white static-top osahan-nav sticky-top">
      <button className="btn btn-link btn-sm text-secondary order-1 order-sm-0" id="sidebarToggle">
        <i className="fas fa-bars"></i>
      </button>
      <Link className="navbar-brand mr-1" to="/">
        <img className="img-fluid" alt="Logo" src="img/logo.png" />
      </Link>
      <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-5 my-2 my-md-0 osahan-navbar-search">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search for..." />
          <div className="input-group-append">
            <button className="btn btn-light" type="button">
              <i className="fas fa-search"></i> 
            </button>
          </div>
        </div>
      </form>
      <ul className="navbar-nav ml-auto ml-md-0 osahan-right-navbar">
        <li className="nav-item mx-1">
          <Link className="nav-link" to="/upload">
            <i className="fas fa-plus-circle fa-fw"></i>
            Upload Video
          </Link>
        </li>
        <li className="nav-item mx-1">
          <a className="nav-link" href="#" id="alertsDropdown">
            <i className="fas fa-bell fa-fw"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
