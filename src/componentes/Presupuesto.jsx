import "../estilos-css/Presupuesto.css"

const Presupuesto = (propiedades) => {
const keys = Object.keys(propiedades);

    return ( 
      <li className="presupuesto-lista">
      {keys.map((propiedad, indice) => (
        <p key={indice}>
          <span className="subrayado">{propiedad.charAt(0).toUpperCase() + propiedad.slice(1)}:</span>{" "}
          {propiedades[propiedad]}
        </p>
      ))}
    </li>
  );
};

export default Presupuesto