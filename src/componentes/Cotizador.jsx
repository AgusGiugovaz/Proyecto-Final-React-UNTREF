import React from "react";
import '../estilos-css/Cotizador.css'

function Cotizador() {
    return (
<div className='contenedor-cotizador'>
            <h2 className='titulo-contenedor-cotizador'>Completa los datos solicitados</h2>
            <label for="propiedad">Selecciona el tipo de propiedad</label><br />
            <label for="ubicacion">Selecciona su ubicación</label><br />
            <label for="metros2">Ingresa los Metros cuadrados</label><br />
            <button className='boton-cotizar'>COTIZAR</button>
            <p>Precio estimado: $ </p>
        </div>  
        )
}

export default Cotizador