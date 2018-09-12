import React, { Component } from "react";

import "./MenuStyles.css";
class Menudetail extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <h3>¿BUSCANDO CHEF A DOMICILIO PARA UN EVENTO ESPECIAL?</h3>
          <ul class="lista-productos">
            <li>
              <div class="card">
                <img
                  class="card-img-top"
                  src="img/cena_romantica.jpg"
                  alt="Cena Romantica"
                />
                <div class="card-body">
                  <span class="card-text">
                    Hay momentos en la vida en los que te apetece sorprender a
                    aquellos que te rodean. Regala un momento magico.
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div class="card">
                <img
                  class="card-img-top"
                  src="img/cena_enfamili.jpg"
                  alt="Cena en Familia"
                />
                <div class="card-body">
                  <span class="card-text">
                    Vive un momento único en familia.
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div class="card">
                <img
                  class="card-img-top"
                  src="img/cena_con_amigos.jpg"
                  alt="Cena con Amigos"
                />
                <div class="card-body">
                  <span class="card-text">
                    ¡Tus amigos y tú sois únicos, por eso os merecéis un chef a
                    domicilio para celebrar una cena en casa por todo lo alto!
                  </span>
                  <br />
                </div>
              </div>
            </li>
            <li>
              <div class="card">
                <img
                  class="card-img-top"
                  src="img/cena_aniversario_en_familia.jpg"
                  alt="Aniversario en Familia"
                />
                <div class="card-body">
                  <span class="card-text">
                    Un cumpleaños diferente... un chef cocinando para ti y tu
                    familia en tu casa!
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Menudetail;
