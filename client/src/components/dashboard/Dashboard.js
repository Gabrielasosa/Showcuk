import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";
import Loading from "../common/loading/Loanding";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Loading />;
    } else {
      // Verificamos si el usuario conectado tiene datos de perfil
      if (Object.keys(profile).length > 0) {
        dashboardContent = <h4>TODO: DISPLAY PROFILE</h4>;
      } else {
        //en caso de que el usuario inicie sesion pero no tenta perfil
        dashboardContent = (
          <div>
            <p className="lead text-muted">Bienvenido {user.name}</p>
            <p>
              Aún no ha configurado tu perfil, por favor agregue su información
            </p>
            <Link to="/create-profile" className="btn btn-lg btn-info">
              Configuración del Perfil
            </Link>
          </div>
        );
      }
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4"> Perfil</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
