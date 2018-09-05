import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
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
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="{{ url('/login') }}">
                  <i class="fas fa-sign-in-alt" />
                  <span> Acceder </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="{{ url('/register') }}">
                  <i class="fas fa-user" /> <span> Registrate </span>
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
