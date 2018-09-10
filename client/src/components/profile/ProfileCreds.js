import React, { Component } from "react";
import Moment from "react-moment";
//componente para mostrar experiencia y educacion
class ProfileCreds extends Component {
  render() {
    const { experience, education } = this.props;

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
    return (
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-center text-info">Experiencia</h3>
          {expItems.length > 0 ? (
            <ul className="list-group">{expItems}</ul>
          ) : (
            <p className="text-center">Sin experiencia añadida</p>
          )}
        </div>

        <div className="col-md-6">
          <h3 className="text-center text-info">Educación</h3>
          {eduItems.length > 0 ? (
            <ul className="list-group">{eduItems}</ul>
          ) : (
            <p className="text-center">Sin educaion añadida</p>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileCreds;
