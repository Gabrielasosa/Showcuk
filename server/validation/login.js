const Validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  //email validate
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email no valido";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "El Email es obligatorio";
  }

  //password validate
  if (Validator.isEmpty(data.password)) {
    errors.password = "La contraseña es obligatoria";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 12 })) {
    errors.password = "La contraseña debe tener entre 6 y 12 caracteres";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
