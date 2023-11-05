import { useState, useEffect } from "react";
import "../estilos-css/Formulario.css";
import { Link } from "react-router-dom";
import { FaClipboardList } from 'react-icons/fa';
import { FiHome } from 'react-icons/fi';
import { AiOutlineSave } from 'react-icons/ai';
import useHistorialContext from "../hooks/useHistorialContext";
import swal from "sweetalert";
import BotonCotizar from "./BotonCotizar";

function Formulario() {
  const [propiedades, setPropiedades] = useState([]);
  const [ubicaciones, setUbicaciones] = useState([]);
  const [seleccionPropiedad, setSeleccionPropiedad] = useState("");
  const [seleccionUbicacion, setSeleccionUbicacion] = useState("");
  const [metros2, setMetros2] = useState(20);
  const [guardarVisible, setGuardarVisible] = useState(false);

  const { historial, setHistorial } = useHistorialContext();

  useEffect(() => {
    fetch("../src/data/datos-cotizacion.json")
      .then((response) => response.json())
      .then((data) => {
        const propiedades = data.filter(
          (opcion) => opcion.categoria === "propiedad"
        );
        const ubicaciones = data.filter(
          (opcion) => opcion.categoria === "ubicacion"
        );

        setPropiedades(propiedades);
        setUbicaciones(ubicaciones);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  const handlePropiedadChange = (event) => {
    setSeleccionPropiedad(event.target.value);
  };

  const handleUbicacionChange = (event) => {
    setSeleccionUbicacion(event.target.value);
  };
  const metros2Change = (event) => {
    setMetros2(event.target.value);
    const newValue = event.target.value;
    if (newValue < 20 || newValue > 500) {
      swal({
        title: "",
        text: "El valor debe estar entre 20 y 500.",
        icon: "warning",
        timer: 2500,
        buttons: [""],
      });
    }
  };

  const handleCotizar = (e) => {
    e.preventDefault();

    if (seleccionPropiedad && seleccionUbicacion) {
      const costoM2 = 35.86;
      const metros2 = document.querySelector("#metros2").value;

      const cotizarPoliza = () => {
        const resultado =
          costoM2 * seleccionPropiedad * seleccionUbicacion * metros2;
        return resultado.toFixed(2);
      };

      const precioPoliza = cotizarPoliza();

      const valorPolizaElement = document.getElementById("valorPoliza");
      valorPolizaElement.innerText = precioPoliza;

      setGuardarVisible(true); // Mostramos el span 💾

      swal({
        title: "",
        text: "Cotización realizada con éxito",
        icon: "success",
        timer: 2500,
        buttons: [""],
      });
    } else {
      swal({
        title: "",
        text: "Debes completar todos los datos en pantalla",
        icon: "warning",
        timer: 3000,
        buttons: [""],
      });
    }
  };

  const guardar = () => {
    const tipoPropiedad = propiedades.find(
      (opcion) => opcion.factor === parseFloat(seleccionPropiedad)
    )?.tipo;
    const tipoUbicacion = ubicaciones.find(
      (opcion) => opcion.factor === parseFloat(seleccionUbicacion)
    )?.tipo;
  
    swal({
      title: "",
      text: "Cotización guardada",
      icon: "success",
      timer: 2500,
      buttons: [""],
    });

    const costoM2 = 35.86;

    const cotizarPoliza = () => {
      const resultado =
        costoM2 * seleccionPropiedad * seleccionUbicacion * metros2;
      return resultado.toFixed(2);
      

    };

    const nuevaPoliza = {};
    nuevaPoliza["fecha"] = new Date().toLocaleString();
    nuevaPoliza["propiedad"] = tipoPropiedad;
    nuevaPoliza["ubicacion"] = tipoUbicacion;
    nuevaPoliza["metros2"] = metros2;
    nuevaPoliza["valor"] = cotizarPoliza();

    setHistorial([...historial, nuevaPoliza]);
  };

  return (
    <>
      <section className="historial">
        <Link to={"/historial"}>
          <span title="Ver Historial">
            <FaClipboardList className="icono-historial"/>
          </span>
        </Link>
      </section>
      <h1 className="titulo">Seguros del hogar <FiHome /></h1>
      <form className="form-cotizador">
        <h2 className="titulo-contenedor-cotizador">
          Completa los datos solicitados
        </h2>{" "}
        <br />
        <label htmlFor="propiedad">Selecciona el tipo de propiedad</label>{" "}
        <br />
        <select
          id="propiedad"
          value={seleccionPropiedad}
          onChange={handlePropiedadChange}
        >
          <option value="">...</option>
          {propiedades.map((opcion) => (
            <option key={opcion.tipo} value={opcion.factor}>
              {opcion.tipo}
            </option>
          ))}
        </select>{" "}
        <br />
        <label htmlFor="ubicacion">Selecciona su ubicación</label> <br />
        <select
          id="ubicacion"
          value={seleccionUbicacion}
          onChange={handleUbicacionChange}
        >
          <option value="">...</option>
          {ubicaciones.map((opcion) => (
            <option key={opcion.tipo} value={opcion.factor}>
              {opcion.tipo}
            </option>
          ))}
        </select>{" "}
        <br />
        <label htmlFor="metros2">Ingresa los Metros cuadrados:</label> <br />
        <input
          type="number"
          id="metros2"
          defaultValue="20"
          min="20"
          max="500"
          onChange={metros2Change}
          required
        ></input>{" "}
        <br />
        <BotonCotizar onClick={handleCotizar} />
        <p className="importe">
          Precio estimado: $ <span id="valorPoliza">0.00</span>
          {guardarVisible && (
            <span
              onClick={guardar}
              className="guardar"
              title="Guardar en historial"
            >
              <AiOutlineSave />
            </span>
          )}
        </p>
      </form>
    </>
  );
}

export default Formulario;
