import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import "./style.css";

class Landing extends Component {
  componentDidMount() {
    //compruebo que el usuario esta autenticado y luego lo redirecciono
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  render() {
    return (
      <div className="">
        <div className="landing" />
        <video
          autoplay="autoplay"
          loop="loop"
          preload="auto"
          className="embed-responsive embed-responsive-16by9 capa_a_ocultar "
        >
          <source
            src="../../img/showcuk.mp4"
            type="video/mp4"
            className="vid"
          />
        </video>
        <div className="dark-overlay landing-inner text-light capa_a_ocultar">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Showcuk</h1>
                <p className="lead">
                  Registrate y conoce mas
                  <Link to="/profiles">
                    {" "}
                    <span> Chefs</span>
                  </Link>
                </p>
                <hr />

                <Link className="btn btn-outline-info btn-lg  mr-2" to="/login">
                  <i className="fas fa-sign-in-alt" /> <span>Acceder</span>
                </Link>

                <Link
                  className="btn btn-lg btn-outline-secondary btn-lg  mr-2"
                  to="/register"
                >
                  <i className="fas fa-user" /> <span> Registrate </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};
//cuando el usuario este conectado y atenticado no vera la opcion de registrarse
//solo lo vera al cerrar sesion
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
