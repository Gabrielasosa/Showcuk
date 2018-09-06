import React, { Component } from "react";
import "./style.css";
class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div id="capa_a_ocultar ">
          <video
            autoplay="autoplay"
            loop="loop"
            preload="auto"
            className="embed-responsive embed-responsive-16by9 "
          >
            <source src="../../img/showcuk.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Showcuk</h1>
                <p className="lead">Tu Chef a domicilio en casa</p>
                <hr />
                <a href="#" className="btn btn-lg btn-info mr-2">
                  <i className="fas fa-sign-in-alt" />
                  <span> Acceder </span>
                </a>
                <a href="#" className="btn btn-lg btn-light">
                  <i className="fas fa-user" /> <span> Registrate </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
