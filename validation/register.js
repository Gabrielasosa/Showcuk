const Validator = require("validator");
const isEmpty = require("./isEmpty");
module.exports = function validateRegisterInput(data) {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  //name Validate
  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Nombre debe tener entre 2 y 30 caracteres";
  }
  if (Validator.isEmpty(data.name)) {
    errors.name = "El nombre es obligatorio";
  }

  //email validate
  if (Validator.isEmpty(data.email)) {
    errors.email = "El Email es obligatorio";
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email no valido";
  }
  //password validate
  if (Validator.isEmpty(data.password)) {
    errors.password = "La contraseña es obligatoria";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 12 })) {
    errors.password = "La contraseña debe tener entre 6 y 12 caracteres";
  }
  //password2 validate
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "La confirmación es obligatoria";
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "La contraseña debe coincidir";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
