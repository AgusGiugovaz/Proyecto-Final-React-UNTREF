import { useState, useEffect } from "react";
import React from "react";
import '../estilos-css/Formulario.css'


function Formulario() {
    const [propiedades, setPropiedades] = useState([]);
    const [ubicaciones, setUbicaciones] = useState([]);
    const [seleccionPropiedad, setSeleccionPropiedad] = useState('');
    const [seleccionUbicacion, setSeleccionUbicacion] = useState('');
  
    useEffect(() => {
      fetch('../src/data/datos-cotizacion.json')
        .then((response) => response.json())
        .then((data) => {
          const propiedades = data.filter((opcion) => opcion.categoria === 'propiedad');
          const ubicaciones = data.filter((opcion) => opcion.categoria === 'ubicacion');
          
          setPropiedades(propiedades);
          setUbicaciones(ubicaciones);
        })
        .catch((error) => {
          console.error('Error al obtener los datos:', error);
        });
    }, []);
  
    return (
      <div className='contenedor-cotizador'>
        <h2 className='titulo-contenedor-cotizador'>Completa los datos solicitados</h2>
  
        <label htmlFor="propiedad">Selecciona el tipo de propiedad</label> <br />
        <select
          id="propiedad"
          value={seleccionPropiedad}
          onChange={(e) => setSeleccionPropiedad(e.target.value)}
        >
          <option value="">Seleccione una opción</option>
          {propiedades.map((opcion) => (
            <option key={opcion.tipo} value={opcion.factor}>
              {opcion.tipo}
            </option>
          ))}
        </select>
        <br />
  
        <label htmlFor="ubicacion">Selecciona su ubicación</label> <br />
        <select
          id="ubicacion"
          value={seleccionUbicacion}
          onChange={(e) => setSeleccionUbicacion(e.target.value)}
        >
          <option value="">Seleccione una opción</option>
          {ubicaciones.map((opcion) => (
            <option key={opcion.tipo} value={opcion.factor}>
              {opcion.tipo}
            </option>
          ))}
        </select>
        <br />
        <label htmlFor="metros2">Ingresa los Metros cuadrados</label> <br />
        <input type="number" id="metros2" defaultValue="20" min="20" max="500" required></input> <br />

        <button className='boton-cotizar'>COTIZAR</button>

        <p>Precio estimado: $ </p>

      </div>
    );
  }
  
  export default Formulario;