import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import FormUsergroups from "../common/form/FormUsergroups";
import Formprofilegroups from "../common/form/FormProfilegroups";
import InputGroup from "../common/InputGroup";
import SelectListGroup from "../common/SelectListGroup";
import { createProfile } from "../../actions/profileActions";

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
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
      { label: "* Seleccione su categoria profesional", value: 0 },
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
              <h1 className="dysplay-4 text-center">Tu perfil</h1>
              <p className="lead text-center"> añade alguna informacion</p>
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
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { createProfile }
)(withRouter(CreateProfile));
