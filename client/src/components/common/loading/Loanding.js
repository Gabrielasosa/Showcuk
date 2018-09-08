import React from "react";
import loandingPizza from "./pizza.gif";
export default () => {
  return (
    <div>
      <img
        src={loandingPizza}
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt="Cargando ..."
      />
    </div>
  );
};
