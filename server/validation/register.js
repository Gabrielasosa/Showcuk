const Validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateRegisterImput(data) {
  let errors = {};

  data.nombre = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  //name validate
  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Nombre debe tener entre 2 y 30 caracteres";
  }
  if (Validator.isEmpty(data.name)) {
    errors.name = "Nombre es obligatorio";
  }
  //email validate
  if (Validator.isEmpty(data.email)) {
    errors.email = "El email es requerido";
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = "El email no es valido";
  }
  //password validate
  if (Validator.isEmpty(data.password)) {
    errors.password = "La contraseña es obligatoria";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 15 })) {
    errors.password = "Debe tener entre 6 y 15 caracteres";
  }
  //password2 validate
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "La confirmacion es obligatoria";
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Las contraseñas deben coincidir";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
