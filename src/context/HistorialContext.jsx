import { createContext } from "react";
//podria dejar este solo y borrar HomeContext que el profe lo llamó CotizadorContext (porque tiene todo el form)
//Se encarga de la lista de datos que hay en el historial

const HistorialContext = createContext([]);

export default HistorialContext;