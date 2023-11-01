import { useState, useEffect } from "react"; 

//El profe hizo esto en la ultima clase del martes
  const useLocalStorage = (clave, valorInicial) => {
  const obtenerLocal = () => {
    if (localStorage.getItem(clave)) { //si el LS contiene la clave
      return JSON.parse(localStorage.getItem(clave));
    }
    localStorage.setItem(clave, JSON.stringify(valorInicial)); //sino seteo esa clave con el JSON.stringify del valor inicial 
    return valorInicial;
  };
  const [valor, setValor] = useState(()=>obtenerLocal());
  //cada vez que cambie el valor, en la clave se va a actualizar el valor que tenga actualmente ese dato
  //persistimos/mantenemos el control de los datos
  useEffect(() => localStorage.setItem(clave, JSON.stringify(valor)), [valor]);
  return [valor, setValor]; 
};

export default useLocalStorage;