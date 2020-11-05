import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to='/' >Swapi<span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to='/people' >People<span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/starships' >Starships<span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/planets' >Planets<span className="sr-only">(current)</span></Link>
          </li>
        </ul>
      </div>
    </nav>
  </>
}

export default Header;