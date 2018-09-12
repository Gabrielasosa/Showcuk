import React, { Component } from "react";

class Container extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <br />
          <br />
          <br />
          <br />
          <br />

          <h3>SERVICIO EN TU CASA</h3>
          <div className="row">
            <div className="col-sm">
              <img src="../img/cesta-de-la-compra.png" alt="cesta" />
              <p>El Chef compra los ingredientes, frescos y de calidad</p>
            </div>
            <div className="col-sm">
              <img src="../img/olla.png" alt="plato" />
              <p>El Chef llega 2 horas antes y prepara la cena</p>
            </div>
            <div className="col-sm">
              <img src="../img/cubiertos.png" alt="" />
              <p>El Chef sirve la mesa</p>
            </div>
            <div className="col-sm">
              <img src="../img/plato.png" alt="" />
              <p>El Chef limpia y recoge la cocina</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
