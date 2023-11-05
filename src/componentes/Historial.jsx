import React from "react";
import { Link } from "react-router-dom";
import useHistorialContext from "../hooks/useHistorialContext";
import "../estilos-css/Historial.css";
import { FaClipboardList } from "react-icons/fa";
import Presupuesto from "./Presupuesto";

const Historial = () => {
  const { historial } = useHistorialContext();

  return (
    <>
        <section>
            <h1 className="center historial-consultas">Historial de Cotizaciones <FaClipboardList /></h1>
            <section className="center contenedor-historial">
                <ul>{historial.map((elemento, indice) => (
                <Presupuesto key = {indice} {...elemento} />
            ))}
            </ul>
            <section className="center separador">
                <Link to={"/"}>
                    <button type='button' className="boton-volver">Volver al Cotizador</button>
                </Link>
            </section>

        </section>
        </section>
        </>
  );
};

export default Historial;
