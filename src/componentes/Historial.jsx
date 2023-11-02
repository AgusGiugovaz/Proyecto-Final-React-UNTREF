import React from 'react';
import { Link } from 'react-router-dom';
import useHistorialContext from '../hooks/useHistorialContext';
import '../estilos-css/Historial.css'
import { FaClipboardList } from 'react-icons/fa';


const Historial = () => {
    const { historial } = useHistorialContext();

    return (
        <section>
            <h1 className="center historial-consultas">Historial de Cotizaciones <FaClipboardList /></h1>
            <section className="center contenedor-historial">
             <table>
                <thead>
                    <tr>
                        <th>Fecha de cotización</th>
                        <th>Tipo de Propiedad</th>
                        <th>Ubicación</th>
                        <th>Metros cuadrados</th>
                        <th>Precio de la Póliza</th>
                    </tr>
                </thead>
                <tbody>
                    {historial.map((cotizacion, index) => (
                        <tr key={index}>
                            <td>{cotizacion.fecha}</td>
                            <td>{cotizacion.propiedad}</td>
                            <td>{cotizacion.ubicacion}</td>
                            <td>{cotizacion.metros2}</td>
                            <td>{cotizacion.valor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <section className="center separador">
                <Link to={"/"}>
                    <button className="boton-volver">Volver al Cotizador</button>
                </Link>
            </section>
          </section>
        </section>
    );
}

export default Historial;