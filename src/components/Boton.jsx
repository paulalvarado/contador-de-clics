import React from "react";
import "./Boton.css";

function Boton({texto, esBotonClick, manejarCick}) {
  return (
    <button
      className={ esBotonClick ? "boton-click" : "boton-reiniciar" }
      onClick={manejarCick}
    >
      {texto}
    </button>
  );
}

export default Boton;