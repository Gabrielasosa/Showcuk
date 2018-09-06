import React from "react";

export default () => {
  return (
    <footer>
      <div class="card text-center ">
        <div class="card-body">
          <section class="contact-section bg-black">
            <div class="container">
              <div class="row">
                <div class="col-md-4 mb-3 mb-md-0">
                  <div class="card py-4 h-100">
                    <div class="card-body text-center">
                      <i class="fas fa-map-marked-alt text-primary mb-2" />
                      <h4 class="text-uppercase m-0">Dirección</h4>
                      <hr class="my-4" />
                      <div class="small text-black-50">
                        4923 Market Street, Orlando FL
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 mb-3 mb-md-0">
                  <div class="card py-4 h-100">
                    <div class="card-body text-center">
                      <i class="fas fa-envelope text-primary mb-2" />
                      <h4 class="text-uppercase m-0">Email</h4>
                      <hr class="my-4" />
                      <div class="small text-black-50">
                        <span>gabrielasosaft@gmail.com</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 mb-3 mb-md-0">
                  <div class="card py-4 h-100">
                    <div class="card-body text-center">
                      <i class="fas fa-mobile-alt text-primary mb-2" />
                      <h4 class="text-uppercase m-0">TELÉFONO</h4>
                      <hr class="my-4" />
                      <div class="small text-black-50">+1 (555) 902-8832</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="social d-flex justify-content-center">
                <a href="#" class="mx-2">
                  <i class="fab fa-linkedin" />
                </a>
                <a href="#" class="mx-2">
                  <i class="fab fa-facebook-f" />
                </a>
                <a href="#" class="mx-2">
                  <i class="fab fa-github" />
                </a>
              </div>
            </div>
          </section>
        </div>
        <div class="card-footer text-muted">
          {" "}
          Gabriela Sosa &copy;
          {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};
