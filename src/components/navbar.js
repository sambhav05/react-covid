import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../App.css"
class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand zoom">Covid - Tracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/countries/data" className="nav-link">Data for Each Country</Link>
          </li>
          <li className="navbar-item">
          <Link to="/india/state" className="nav-link">State Wise Data for India</Link>
          </li>
          <li className="navbar-item">
          <Link to="/how-to-prevent" className="nav-link">How-to-Prevent</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar