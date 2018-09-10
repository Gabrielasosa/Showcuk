import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import FormUsergroups from "../common/form/FormUsergroups";
import Formprofilegroups from "../common/form/FormProfilegroups";
import InputGroup from "../common/InputGroup";
import SelectListGroup from "../common/SelectListGroup";
import { createProfile, getCurrentProfile } from "../../actions/profileActions";
import isEmpty from "../../validation/is-empty";

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
      bio: "",
      twitter: "",
      facebook: "",
      linkedin: "",
      youtube: "",
      instagram: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;

      const skillsCSV = profile.skills.join(",");

      // Si el campo de perfil no existe, lo pasa a un string
      profile.company = !isEmpty(profile.company) ? profile.company : "";
      profile.website = !isEmpty(profile.website) ? profile.website : "";
      profile.location = !isEmpty(profile.location) ? profile.location : "";
      profile.bio = !isEmpty(profile.bio) ? profile.bio : "";
      profile.social = !isEmpty(profile.social) ? profile.social : {};
      profile.twitter = !isEmpty(profile.social.twitter)
        ? profile.social.twitter
        : "";
      profile.facebook = !isEmpty(profile.social.facebook)
        ? profile.social.facebook
        : "";
      profile.linkedin = !isEmpty(profile.social.linkedin)
        ? profile.social.linkedin
        : "";
      profile.youtube = !isEmpty(profile.social.youtube)
        ? profile.social.youtube
        : "";
      profile.instagram = !isEmpty(profile.social.instagram)
        ? profile.social.instagram
        : "";

      // Establece el estado de los campos de componentes
      this.setState({
        handle: profile.handle,
        company: profile.company,
        website: profile.website,
        location: profile.location,
        status: profile.status,
        skills: skillsCSV,
        bio: profile.bio,
        twitter: profile.twitter,
        facebook: profile.facebook,
        linkedin: profile.linkedin,
        youtube: profile.youtube
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
      company: this.state.company,
      website: this.state.website,
      location: this.state.location,
      status: this.state.status,
      skills: this.state.skills,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram
    };

    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    //destruccturacion para pasar los errores y un array con las redes sociales de los usario
    const { errors, displaySocialInputs } = this.state;
    //inicialiamos los imputs de la redes sociales
    let socialInputs;
    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <InputGroup
            placeholder="Facebook Page URL"
            name="facebook"
            icon="fab fa-facebook"
            value={this.state.facebook}
            onChange={this.onChange}
            error={errors.facebook}
          />

          <InputGroup
            placeholder="URL de perfil en Linkedin"
            name="linkedin"
            icon="fab fa-linkedin"
            value={this.state.linkedin}
            onChange={this.onChange}
            error={errors.linkedin}
          />

          <InputGroup
            placeholder="URL de Canal en YouTube"
            name="youtube"
            icon="fab fa-youtube"
            value={this.state.youtube}
            onChange={this.onChange}
            error={errors.youtube}
          />

          <InputGroup
            placeholder="URL de perfil en Instagram"
            name="instagram"
            icon="fab fa-instagram"
            value={this.state.instagram}
            onChange={this.onChange}
            error={errors.instagram}
          />
        </div>
      );
    }
    // Lista para seleccionar nivel profesional(status)

    const options = [
      { label: "* Seleccione su puesto profesional", value: 0 },
      { label: "Chef Ejecutivo", value: "Chef Ejecutivo" },
      { label: "Chef Pastelero", value: "Chef Pastelero" },
      { label: "Chef de Sección", value: "Chef Sección" },
      { label: "Chef poissonier", value: "Chef poissonier" },
      { label: "Ayudante de cocina", value: "Ayudante de Cocina" },
      { label: "Segundo de cocina", value: "Segundo de Cocina" },
      { label: "Estudiante", value: "Estudiante" },
      { label: "Otros", value: "Otros" }
    ];
    return (
      <div className="Profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Volver
              </Link>
              <h1 className="dysplay-4 text-center">Edita tu perfil</h1>
              <p className="lead text-center"> Edita tu informacion</p>
              <small className="d-block pb-3">
                Los campos con * son obligatorios
              </small>
              <form onSubmit={this.onSubmit}>
                <FormUsergroups
                  placeholder="* Profile Handle"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                  info="Es la  URL para tu perfil. (p. ej: Showcuk-chef1 ) "
                />
                <SelectListGroup
                  placeholder="Status"
                  name="status"
                  value={this.state.status}
                  onChange={this.onChange}
                  options={options}
                  error={errors.status}
                  info="Danos una idea de dónde estás en tu carrera"
                />
                <FormUsergroups
                  placeholder="Empresa"
                  name="company"
                  value={this.state.company}
                  onChange={this.onChange}
                  error={errors.company}
                  info="Podría ser tu propia empresa o una para la que trabajas"
                />
                <FormUsergroups
                  placeholder="Página Web"
                  name="website"
                  value={this.state.website}
                  onChange={this.onChange}
                  error={errors.website}
                  info="Podría ser tu propia pagina Web o de la empresa en la que trabajas"
                />
                <FormUsergroups
                  placeholder="Localidad"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                  info="Ciudad y/o Localidad, (p. ej: Marbella, MA )"
                />
                <FormUsergroups
                  placeholder="* Habilidades"
                  name="skills"
                  value={this.state.skills}
                  onChange={this.onChange}
                  error={errors.skills}
                  info="Las habibilidades deben estar separas por comas, (p. ej: Rapidez, Limpieza, Buen paladar...)"
                />
                <Formprofilegroups
                  placeholder="Breve descripción"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                  info="Cuentanos un poco sobre ti, queremos saber un poco mas."
                />
                <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                    className="btn btn-light"
                  >
                    Redes Sociales
                  </button>
                  <span className="text-muted">Opcional</span>
                </div>
                {socialInputs}
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile }
)(withRouter(CreateProfile));
