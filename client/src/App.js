import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

import Landing from "./components/layout/Landing";
import Register from "./components/register/Register";
import Login from "./components/login/login";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Dashboard from "./components/dashboard/Dashboard";
import { clearCurrentProfile } from "./actions/profileActions";

// verificacion del token
if (localStorage.jwtToken) {
  // verifica la autenticacion en la cabecera
  setAuthToken(localStorage.jwtToken);
  // Descodificar token y obtener información del usuario
  const decoded = jwt_decode(localStorage.jwtToken);
  // establece al usuario y lo autentica
  store.dispatch(setCurrentUser(decoded));

  //varifica que la caducidad del token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // desconeccion del usuario
    store.dispatch(logoutUser());
    //limpiar el perfil al desconectarse el usuario
    store.dispatch(clearCurrentProfile());

    //redirecciona al login cuando se desconecta el usuario
    window.location.href = "/login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Switch className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
