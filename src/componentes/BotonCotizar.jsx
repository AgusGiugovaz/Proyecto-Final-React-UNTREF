import React, { useState } from 'react';
import '../estilos-css/BotonCotizar.css'


function BotonCotizar(props) {
    return (   
        <button onClick={props.onClick} className="boton-cotizar">
            Cotizar
        </button>
    );
}
  
export default BotonCotizar;