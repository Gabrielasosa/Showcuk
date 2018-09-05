const Validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  data.skills = !isEmpty(data.skills) ? data.skills : "";
  //handle validate
  if (!Validator.isLength(data.handle, { min: 2, max: 45 })) {
    errors.handle = "Handle debe tener entre 2 y 45 caracteres";
  }
  if (Validator.isEmpty(data.handle)) {
    errors.handle = "Handle es obligatorio";
  }
  //status validate
  if (Validator.isEmpty(data.status)) {
    errors.status = "status field es obligatorio";
  }
  //skills validate
  if (Validator.isEmpty(data.skills)) {
    errors.skills = "skils es obligatorio";
  }
  //website validate
  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = "URL no valida";
    }
  }
  //youtube validate
  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = "URL no valida";
    }
  }
  //twitter validate
  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = "URL no valida";
    }
  }
  //facebook validate
  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = "URL no valida";
    }
  }
  //linkedin validate
  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = "URL no valida";
    }
  }
  //instagram validate
  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = "URL no valida";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
