import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/Math-tools-app/"><h1>Home</h1></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Math-tools-app/calculator">Calculator</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Math-tools-app/facts">Number facts</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;