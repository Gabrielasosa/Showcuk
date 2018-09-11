import React, { Component } from "react";
import Moment from "react-moment";
//componente para mostrar experiencia y educacion
class ProfileCreds extends Component {
  render() {
    const { experience, education, menu } = this.props;

    const expItems = experience.map(exp => (
      <li key={exp._id} className="list-group-item">
        <h4>{exp.company}</h4>
        <p>
          <Moment format="DD/MM/YYYY">{exp.from}</Moment> -
          {exp.to === null ? (
            " Actualmente"
          ) : (
            <Moment format="DD/MM/YYYY">{exp.to}</Moment>
          )}
        </p>
        <p>
          <strong>Puesto:</strong> {exp.title}
        </p>
        <p>
          {exp.location === "" ? null : (
            <span>
              <strong>Localidad: </strong> {exp.location}
            </span>
          )}
        </p>
        <p>
          {exp.description === "" ? null : (
            <span>
              <strong>Descripción: </strong> {exp.description}
            </span>
          )}
        </p>
      </li>
    ));

    const eduItems = education.map(edu => (
      <li key={edu._id} className="list-group-item">
        <h4>{edu.school}</h4>
        <p>
          <Moment format="DD/MM/YYYY">{edu.from}</Moment> -
          {edu.to === null ? (
            " Now"
          ) : (
            <Moment format="DD/MM/YYYY">{edu.to}</Moment>
          )}
        </p>
        <p>
          <strong>Titulación:</strong> {edu.degree}
        </p>
        <p>
          <strong>Especualidad:</strong> {edu.fieldofstudy}
        </p>
        <p>
          {edu.description === "" ? null : (
            <span>
              <strong>Descripción: </strong> {edu.description}
            </span>
          )}
        </p>
      </li>
    ));
    const menuItems = menu.map(men => (
      <li key={men._id} className="list-group-item">
        <img
          style={{ width: "200px", margin: "auto", display: "block" }}
          className="card-img-top rounded-circle"
          src={`../img/${men.image}`}
          alt={men.title}
        />{" "}
        <h4>{men.title}</h4>{" "}
        <p>
          {men.price === "" ? null : (
            <span>
              <strong>Precio: </strong> {men.price} €
            </span>
          )}
        </p>
        <p>
          {men.description === "" ? null : (
            <span>
              <strong>Descripción: </strong> {men.description}
            </span>
          )}
        </p>
      </li>
    ));
    return (
      <div className="row">
        <div className="col-md-4">
          <h3 className="text-center text-info">Experiencia</h3>
          {expItems.length > 0 ? (
            <ul className="list-group">{expItems}</ul>
          ) : (
            <p className="text-center">Sin experiencia añadida</p>
          )}
        </div>
        <div className="col-md-4">
          <h3 className="text-center text-info">Educación</h3>
          {eduItems.length > 0 ? (
            <ul className="list-group">{eduItems}</ul>
          ) : (
            <p className="text-center">Sin educación añadida</p>
          )}
        </div>
        <div className="col-md-4">
          <h3 className="text-center text-info">Menu</h3>
          {menuItems.length > 0 ? (
            <ul className="list-group">{menuItems}</ul>
          ) : (
            <p className="text-center">Sin Menu </p>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileCreds;
