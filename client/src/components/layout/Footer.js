import React from "react";

export default () => {
  return (
    <footer>
      <br />
      <div className="card text-center card  mb-3">
        <div className="card-body">
          <section className="contact-section bg-black">
            <div className="container">
              <div className="row">
                <div className="col-md-4 mb-3 mb-md-0">
                  <div className="card py-4 h-100">
                    <div className="card-body text-center">
                      <i className="fas fa-map-marked-alt text-info mb-2" />
                      <h4 className="text-uppercase m-0 card-title">
                        Dirección
                      </h4>
                      <hr className="my-4" />
                      <div className="small text-black-50 card-text">
                        4923 Market Street, Orlando FL
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-3 mb-md-0">
                  <div className="card py-4 h-100">
                    <div className="card-body text-center">
                      <i className="fas fa-envelope text-info mb-2" />
                      <h4 className="text-uppercase m-0 card-title">Email</h4>
                      <hr className="my-4" />
                      <div className="small text-black-50 card-text">
                        <span>gabrielasosaft@gmail.com</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-3 mb-md-0">
                  <div className="card py-4 h-100">
                    <div className="card-body text-center">
                      <i className="fas fa-mobile-alt text-info mb-2" />
                      <h4 className="text-uppercase m-0 card-title">
                        TELÉFONO
                      </h4>
                      <hr className="my-4" />
                      <div className="small text-black-50 card-text">
                        +34 625-395-5532
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="social d-flex justify-content-center">
                <a
                  href="https://www.linkedin.com/in/gabriela-sosa-gavil%C3%A1n-1a3821162/"
                  className="mx-2 text-info"
                >
                  <i className="fab fa-linkedin" />
                </a>
                <a
                  href="https://github.com/Gabrielasosa/Showcuk"
                  className="mx-2 text-info"
                >
                  <i className="fab fa-github" />
                </a>
              </div>
            </div>
          </section>
        </div>
        <div className="card-footer text-muted">
          {" "}
          Gabriela Sosa &copy;
          {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};
