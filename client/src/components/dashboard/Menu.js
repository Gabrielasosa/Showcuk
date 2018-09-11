import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteMenu } from "../../actions/profileActions";

class Menu extends Component {
  onDeleteClick(id) {
    this.props.deleteMenu(id);
  }

  render() {
    const menu = this.props.menu.map(men => (
      <tr key={men._id}>
        <td>{men.title}</td>
        <td>{men.price}</td>
        <td>{men.description}</td>

        <td />
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, men._id)}
            className="btn btn-danger"
          >
            Eliminar
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h4 className="mb-4">Menu</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Precio</th>
              <th>Descripción</th>
              <th />
            </tr>
            {menu}
          </thead>
        </table>
      </div>
    );
  }
}

Menu.propTypes = {
  deleteMenu: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteMenu }
)(Menu);
