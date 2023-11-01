import React, { useState } from 'react';
import '../estilos-css/BotonCotizar.css'
//import Cotizador from './Cotizador'; // Asegúrate de importar la clase Cotizador o ajusta la importación según tu estructura de archivos
//import swal from 'sweetalert'; // Asegúrate de importar sweetalert o ajusta la importación según tu estructura de archivos


function BotonCotizar(props) {
    return (   
        <button onClick={props.onClick} className="boton-cotizar">
            Cotizar
        </button>
    );
}
  
export default BotonCotizar;