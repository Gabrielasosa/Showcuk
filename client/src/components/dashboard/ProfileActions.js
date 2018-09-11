import React from "react";
import { Link } from "react-router-dom";

const ProfileActions = () => {
  return (
    <div className="btn-group mb-4" role="group">
      <Link to="/edit-profile" className="btn btn-light">
        <i className="fas fa-user-circle text-info mr-1" /> Editar Perfil
      </Link>
      <Link to="/add-expirience" className="btn btn-light">
        <i className="fab fa-black-tie text-info mr-1" />
        Añadir Experiencia
      </Link>
      <Link to="/add-education" className="btn btn-light">
        <i className="fas fa-graduation-cap text-info mr-1" />
        Añadir Formación
      </Link>
      <Link to="/add-menu" className="btn btn-light">
        <i class="fas fa-utensils text-info  mr-1" />
        Añadir Menu
      </Link>
    </div>
  );
};

export default ProfileActions;
