import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

//este componente se reutiliza para el formulario
const FormProfilegroups = ({
  name,
  placeholder,
  value,
  error,
  info,

  onChange
}) => {
  return (
    <div className="form-group">
      <textarea
        //clase condicionaal para poder utilizar validacion
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

FormProfilegroups.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default FormProfilegroups;
