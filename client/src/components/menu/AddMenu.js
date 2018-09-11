import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FormUsergroups from "../common/form/FormUsergroups";
import Formprofilegroups from "../common/form/FormProfilegroups";
import { addMenu } from "../../actions/profileActions";
import ImageUploader from "react-images-upload";
class AddMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      price: "",
      image: "",
      errors: {},
      disabled: false,
      pictures: []
    };
    this.onDrop = this.onDrop.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }
  state = {
    selecedFile: null
  };
  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture)
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const menData = {
      title: this.state.title,
      description: this.state.description,
      image: this.state.image,
      price: this.state.price
    };

    this.props.addMenu(menData, this.props.history);
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

    return (
      <div className="add-menu">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Volver
              </Link>
              <h1 className="display-4 text-center"> Menus</h1>
              <p className="lead text-center">Añade tus menus especiales</p>
              <small className="d-block pb-3">
                Los campos con * son obligatorios
              </small>
              <form onSubmit={this.onSubmit}>
                <FormUsergroups
                  placeholder="* Nombre"
                  name="title"
                  value={this.state.title}
                  onChange={this.onChange}
                  error={errors.title}
                />
                {/* <FormUsergroups
                  placeholder="* Foto"
                  name="image"
                  value={this.state.image}
                  onChange={this.onChange}
                  error={errors.image}
                  type="file"
                /> */}

                <FormUsergroups
                  placeholder="* Precio"
                  name="price"
                  value={this.state.price}
                  onChange={this.onChange}
                  error={errors.price}
                />

                <Formprofilegroups
                  placeholder="Breve descripción de tus menu"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                  error={errors.description}
                  info="cuentanos de tus menus"
                />
                <input
                  type="submit"
                  value="Guardar"
                  className="btn btn-info btn-block mt-4"
                  onChange={this.onChange}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddMenu.propTypes = {
  addMenu: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addMenu }
)(withRouter(AddMenu));
