import React from "react";
import '/workspaces/traffic-light-TMJ/src/styles/Light.css'

function Light({ color, brillo, onClick}) {
  return(
    <button 
      className={`light ${brillo ? "encendido" : "apagado"}`}
      style = {{ background : color} }
      onClick={onClick}
    >
      
    </button>
  );
}
export default Light
