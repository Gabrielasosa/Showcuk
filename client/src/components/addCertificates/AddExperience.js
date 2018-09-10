import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FormUsergroups from "../common/form/FormUsergroups";
import Formprofilegroups from "../common/form/FormProfilegroups";
import { addExperience } from "../../actions/profileActions";
import SelectListGroup from "../common/SelectListGroup";

class AddExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "",
      title: "",
      location: "",
      from: "",
      to: "",
      current: false,
      description: "",
      errors: {},
      disabled: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const expData = {
      company: this.state.company,
      title: this.state.title,
      location: this.state.location,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description
    };

    this.props.addExperience(expData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onCheck(e) {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current
    });
  }

  render() {
    const { errors } = this.state;

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
      <div className="add-experience">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Volver
              </Link>
              <h1 className="display-4 text-center">Añade tu experiencia</h1>
              <p className="lead text-center">
                Agregue cualquier trabajo o puesto que haya tenido en el pasado
                o actualmente
              </p>
              <small className="d-block pb-3">
                Los campos con * son obligatorios
              </small>
              <form onSubmit={this.onSubmit}>
                <FormUsergroups
                  placeholder="* Empresa"
                  name="company"
                  value={this.state.company}
                  onChange={this.onChange}
                  error={errors.company}
                />
                <SelectListGroup
                  placeholder="* Puesto"
                  name="title"
                  value={this.state.status}
                  onChange={this.onChange}
                  options={options}
                  error={errors.status}
                />
                <FormUsergroups
                  placeholder=" Localidad"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                />
                <h5>Fecha inicio</h5>
                <FormUsergroups
                  name="from"
                  placeholder="Desde "
                  type="date"
                  value={this.state.from}
                  onChange={this.onChange}
                  error={errors.from}
                />
                <h5>Fecha finalización</h5>
                <FormUsergroups
                  name="to"
                  placeholder="Hasta "
                  type="date"
                  value={this.state.to}
                  onChange={this.onChange}
                  error={errors.to}
                  disabled={this.state.disabled ? "disabled" : ""}
                />
                <div className="form-check mb-4">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="current"
                    value={this.state.current}
                    checked={this.state.current}
                    onChange={this.onCheck}
                    id="current"
                  />
                  <label htmlFor="current" className="form-check-label">
                    Trabajo actual
                  </label>
                </div>
                <Formprofilegroups
                  placeholder="Breve descripción de tu trabajo"
                  name="description"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                  info="Cuentanos un poco del trabajo que desempeñas"
                />
                <input
                  type="submit"
                  value="Guardar"
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

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addExperience }
)(withRouter(AddExperience));
