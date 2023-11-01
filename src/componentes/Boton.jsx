import React, { useState } from 'react';
import '../estilos-css/Boton.css'
//import Cotizador from './Cotizador'; // Asegúrate de importar la clase Cotizador o ajusta la importación según tu estructura de archivos
//import swal from 'sweetalert'; // Asegúrate de importar sweetalert o ajusta la importación según tu estructura de archivos


function Boton(props) {
    return (   
        <button onClick={props.onClick} className="boton-cotizar">
            Cotizar
        </button>
    );
}
  
export default Boton;