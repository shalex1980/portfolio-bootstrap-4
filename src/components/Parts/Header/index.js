import React from 'react';
import { Link } from 'react-router-dom';
import { LOGO } from '../../../data/constants';
import './style.css';

export default () => {
  return (
  <header className="header">

    <nav className="navbar navbar-custom" role="navigation">

      <div className="container-fluid">

        <div className="navbar-header">
          <a className="navbar-brand font-weight-bold" href="index.html">{LOGO}</a>
        </div>

          <ul className="nav">
            <li className="nav-item"><Link className="nav-link text-uppercase" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link text-uppercase" to="/examples">Examples</Link></li>
            <li className="nav-item"><Link className="nav-link text-uppercase" to="/contact">Contact</Link></li>
            <li className="nav-item"><Link className="nav-link text-uppercase" to="/other">Other</Link></li>
          </ul>

      </div>

    </nav>

  </header>


    )
}