const Validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  //title validate
  if (Validator.isEmpty(data.title)) {
    errors.title = "Campo Titulo es requerido";
  }
  //company validate
  if (Validator.isEmpty(data.company)) {
    errors.company = "Campo Empresa es requerido";
  }
  //from validate
  if (Validator.isEmpty(data.from)) {
    errors.from = "Campo Fecha es requerido";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
