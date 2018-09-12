import React, { Component } from "react";
import "./Nosotros.css";

export default class gabriela extends Component {
  render() {
    return (
      <div className="container c2">
        {/* <div className="card c1">
          <img src="/img/Gabriela.png" alt="Gabriela" />
          <h1>Gabriela Sosa</h1>
          <p className="title">CEO Founder, Showcuk</p>
          <p>CodespaceAcademy</p>
        
          <a>
            <i className="fa fa-twitter" />
          </a>
          <a>
            <i className="fa fa-linkedin" />
          </a>
          <a>
            <i className="fa fa-facebook" />
          </a>
          <p>
            <button className="btn-nosotros">Contact</button>
          </p>
        </div> */}
        <div class="row">
          <div class="col-md-12">
            <div
              class="card card-body bg-danger text-white mb-3"
              style={{
                background:
                  "linear-gradient(to top left, #33ccff 0%, #ff99cc 100%)"
              }}
            >
              <div class="row">
                <div class="col-4 col-md-3 m-auto">
                  <img
                    class="rounded-circle"
                    src="//www.gravatar.com/avatar/9e96075c17e339d4d96c416528810eb9?s=200&amp;r=pg&amp;d=mm"
                    alt=""
                  />
                </div>
              </div>
              <div class="text-center">
                <h1 class="display-4 text-center">Gabriela Sosa Gavilán</h1>
                <p class="lead text-center">
                  Estudiante Full Stack web Developer
                  <span>en CodespaceAcademy</span>
                </p>
                <p>
                  <a
                    class="text-white p-2"
                    href="https://github.com/Gabrielasosa/Showcuk"
                    target="_blank"
                  >
                    <i class="fab fa-github fa-2x" />
                  </a>

                  <a
                    class="text-white p-2"
                    href="https://www.linkedin.com/in/gabriela-sosa-gavilan/"
                    target="_blank"
                  >
                    <i class="fab fa-linkedin fa-2x" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <h3 class="text-center text-info">Experiencia</h3>
            <ul class="list-group">
              <li class="list-group-item">
                <h4>La Fabrica</h4>
                <p>
                  <time datetime="1528416000000">05/05/2015</time> - Actualmente
                </p>
                <p>
                  <strong>Puesto:</strong> Camarera
                </p>
                <p>
                  <span>
                    <strong>Localidad: </strong> Marbella,Málaga
                  </span>
                </p>
                <p>
                  <span>
                    <strong>Descripción: </strong>
                    Atención al cliente Preparaciones del servicio
                  </span>
                </p>
              </li>
              <li class="list-group-item">
                <h4>CodespaceAcademy</h4>
                <p>
                  <time datetime="1528416000000">22/04/2018</time> - Actualmente
                </p>
                <p>
                  <strong>Puesto:</strong> Estudiante
                </p>
                <p>
                  <span>
                    <strong>Localidad: </strong> Málaga, Málaga
                  </span>
                </p>
                <p>
                  <span>
                    <strong>Descripción: </strong>
                    Formación dedicada a la programación WEB
                  </span>
                </p>
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <h3 class="text-center text-info">Formación</h3>

            <ul class="list-group">
              <li class="list-group-item">
                <h4>CodespaceAcademy</h4>
                <p>
                  <time datetime="1528416000000">22/04/2018</time> - Actualmente
                </p>
                <p>
                  <strong>Titulación:</strong> Full Stack WEB
                </p>
                <p>
                  <span>
                    <strong>Especialidad: </strong> Desarrollo de aplicaciones
                    web
                  </span>
                </p>
                <p>
                  <span>
                    <strong>Descripción: </strong>
                    <p>
                      curso de programación web de 20 semanas intensivo y
                      presencial.
                    </p>
                    <p>BBDD</p>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>Javascript</p>
                    <p>NODE JS</p>
                    <p>Diseño APIS.REST</p>
                    <p>SCRUM</p>
                  </span>
                </p>
              </li>
              <li class="list-group-item">
                <h4>Sistemas microinformaticos y redes</h4>
                <p>
                  <time datetime="1531267200000">15/09/2015</time> -
                  <time datetime="1536192000000">22/06/2017</time>
                </p>
                <p>
                  <strong>Titulación:</strong> Tecnico en sistemas
                  microinformaticos y redes
                </p>
                <p>
                  <strong>Especialidad:</strong> Informatica
                </p>
                <p />
                <p>
                  <strong>Descripción: </strong>
                  <p>Instalar y mantener servicios de redes.</p>
                  {/* <p>Instalador-reparador de equipos informáticos.</p>
                  <p>Técnico de redes de datos.</p>
                  <p>Reparador de periféricos de sistemas microinformáticos.</p>
                  <p>Operador de sistemas.</p> */}
                </p>
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <ul class="list-group">
              <div class="d-none d-md-block">
                <h3 class="text-center text-info">SKILLS</h3>
                <ul class="list-group">
                  <li class="list-group-item">
                    <i class="fas fa-star" />
                    <i class="fas fa-star" />
                    <i class="fas fa-star" />
                    <i class="fas fa-star" />
                    <span> HTML </span>
                  </li>
                  <li class="list-group-item">
                    <i class="fas fa-star" />
                    <i class="fas fa-star" />
                    <i class="fas fa-star" />
                    <span> CSS </span>
                  </li>
                  <li class="list-group-item">
                    <i class="fas fa-star" />
                    <i class="fas fa-star" />
                    <i class="fas fa-star" />
                    <i class="fas fa-star" />
                    <span> Javascript </span>
                  </li>
                  <li class="list-group-item">
                    <i class="fas fa-star" /> <i class="fas fa-star" />
                    <i class="fas fa-star" />
                    <span> MYSQL </span>
                  </li>
                  <li class="list-group-item">
                    <i class="fas fa-star" />
                    <i class="fas fa-star" />
                    <span> MONGODB </span>
                  </li>
                  <li class="list-group-item">
                    <i class="fas fa-star" />
                    <i class="fas fa-star" />
                    <i class="fas fa-star" />
                    <span> NODEJS </span>
                  </li>
                  <li class="list-group-item">
                    <i class="fas fa-star" />
                    <i class="fas fa-star" />
                    <span> DISEÑO APIS.REST </span>
                  </li>
                  <li class="list-group-item">
                    <i class="fas fa-star" />
                    <i class="fas fa-star" />
                    <i class="fas fa-star" />
                    <span> SCRUM </span>
                  </li>
                  <li class="list-group-item">
                    <i class="fas fa-star" />
                    <i class="fas fa-star" />
                    <span> ANGULAR </span>
                  </li>
                  <li class="list-group-item">
                    <i class="fas fa-star" />
                    <i class="fas fa-star" />
                    <i class="fas fa-star" />
                    <i class="fas fa-star" />
                    <span> REACTJS </span>
                  </li>
                  <li class="list-group-item">
                    <i class="fas fa-star" />
                    <span> REDUX </span>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
