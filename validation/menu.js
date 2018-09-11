const Validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateMenuInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  data.price = !isEmpty(data.price) ? data.price : "";
  data.image = !isEmpty(data.image) ? data.image : "";

  //title validate
  if (Validator.isEmpty(data.title)) {
    errors.title = "El titulo  es necesario";
  }
  //description validate
  if (Validator.isEmpty(data.description)) {
    errors.description = "La descripcion es necesaria";
  }
  //proce validate
  if (Validator.isEmpty(data.price)) {
    errors.price = "El precio es necesario";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
