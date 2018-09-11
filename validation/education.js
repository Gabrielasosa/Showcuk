const Validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateEducationInput(data) {
  let errors = {};

  data.school = !isEmpty(data.school) ? data.school : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  //school validate
  if (Validator.isEmpty(data.school)) {
    errors.school = "Campo colegio es necesario";
  }
  //degree validate
  if (Validator.isEmpty(data.degree)) {
    errors.degree = "Campo titulo es necesario";
  }
  //fieldofstudy validate
  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "Campo especialidad es necesario";
  }
  //from validate
  if (Validator.isEmpty(data.from)) {
    errors.from = "Campo Fecha es necesario";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
