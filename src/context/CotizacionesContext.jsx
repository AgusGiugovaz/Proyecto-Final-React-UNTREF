import { createContext, useContext, useState } from 'react';

const CotizacionesContext = createContext();

export function CotizacionesProvider({ children }) {
    const [cotizaciones, setCotizaciones] = useState([]);
  
    // Agregar función para agregar cotizaciones
    const agregarCotizacion = (cotizacion) => {
      setCotizaciones([...cotizaciones, cotizacion]);
    };
  
    return (
      <CotizacionesContext.Provider value={{ cotizaciones, agregarCotizacion }}>
        {children}
      </CotizacionesContext.Provider>
    );
  }
  
  export function useCotizaciones() {
    return useContext(CotizacionesContext);
  }
