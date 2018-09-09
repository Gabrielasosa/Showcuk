import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Commongroup from "../common/form/commongroups";

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: "",
      company: "",
      website: "",
      location: "",
      status: "",
      skills: "",
      githubusername: "",
      bio: "",
      twitter: "",
      facebook: "",
      linkedin: "",
      youtube: "",
      instagram: "",
      errors: {}
    };
  }
  render() {
    return (
      <div className="Profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="dysplay-4 text-center">Tu perfil</h1>
              <p className="lead text-center"> añade alguna informacion</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});
export default connect(null)(CreateProfile);
