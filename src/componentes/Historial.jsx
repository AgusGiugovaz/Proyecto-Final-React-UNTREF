import { Link } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
//import useTablaContext from '../hooks/useTablaContext';
import '../index.css';

const Historial = () => {
    //let { tabla } = useTablaContext();

    return(
        <div>
            <h1 className="ver-historial">Ver Historial 📋</h1>
            <section className=" center cotizadorForm">
                <table>
                    <thead>
                        <tr>
                            <th>Fecha de cotización</th>
                            <th>Propiedad</th>
                            <th>Ubicación</th>
                            <th>Metros cuadrados</th>
                            <th>Póliza mensual</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Aquí</td>
                            <td>verás</td>
                            <td>las</td>
                            <td>cotizaciones</td>
                            <td>realizadas</td>
                        </tr>
                    </tbody>
                </table>
                <section className="center separador">
                    <Link to={"/"}>
                        <button className="button button-outline">Volver al Cotizador</button>
                    </Link>
                </section>
            </section>
        </div>
    )
}

export default Historial;
