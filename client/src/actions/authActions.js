import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER } from "./types";

// Registro usuario
//creo y exporto las acciones para registrar usuarios en la base de datos
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    //redirecciono con history al usuario que se acaba de registrar a la pagina de login
    .then(res => history.push("/login"))

    .catch(err =>
      //llamo a dispatch para pasarle el objeto de errors
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Registro - Get User Token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // guardo el token en el localStorage
      const { token } = res.data;
      // fijo  token en el  localStorage
      localStorage.setItem("jwtToken", token);
      // fijo el token para la realizar la autenticacion con la cabecera
      setAuthToken(token);
      // descodifico el token para coger los datos del usuario
      const decoded = jwt_decode(token);
      // para finalizar se establece el usuario final
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//se obtiene el usuario conectado
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// realizo la desconeccion del usuario
export const logoutUser = () => dispatch => {
  // Elimino token de localStorage
  localStorage.removeItem("jwtToken");
  //Elimino el encabezado de autenticación para futuras solicitudes
  setAuthToken(false);
  //cambio el estado del usuario actual
  dispatch(setCurrentUser({}));
};
