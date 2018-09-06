import axios from "axios";

const setAuthToken = token => {
  if (token) {
    // Se aplica a cada solicitud de autenticacion
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    //Elimina el  encabezado de autenticación
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
