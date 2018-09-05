const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";

  if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.text = "Post debe tener entre 10 y 300 caracteres";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "Texto es obligatorio";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
