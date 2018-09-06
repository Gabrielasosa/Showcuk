import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">
              S H O W C U K
            </a>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home <span className="sr-only" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  otro
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="{{ url('/login') }}">
                  <i className="fas fa-sign-in-alt" />
                  <span> Acceder </span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="{{ url('/register') }}">
                  <i className="fas fa-user" /> <span> Registrate </span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
