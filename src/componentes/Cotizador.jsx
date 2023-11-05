import React, { useState } from 'react';

function Cotizador({ costoM2, factorPropiedad, factorUbicacion, metros2 }) {
  
    const cotizarPoliza = () => {
       
      const resultado = costoM2 * factorPropiedad * factorUbicacion * metros2;
      return resultado.toFixed(2); // Redondear el resultado a dos decimales
  };

  return (
    <div>
      {/* Puedes incluir elementos de JSX aquí si es necesario */}
    </div>
  );
}

export default Cotizador;
