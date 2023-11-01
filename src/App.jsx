import './App.css';
import { useState, useEffect } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Historial from './componentes/Historial';
//import TablaContext from "./context/TablaContext";
import Formulario from './componentes/Formulario';
import useLocalStorage from './hooks/useLocalStorage'
import HistorialContext from './context/HistorialContext';
import FormularioContext from './context/FormularioContext';


function App () {

    const [historial, setHistorial] = useLocalStorage("historial", []);
    
 return (

    <>

    <div className='App'>

         <HistorialContext.Provider value={{historial, setHistorial}}>
         <FormularioContext.Provider value={{}}>
            <BrowserRouter> 
                <Routes>
                    <Route path="/" element={<Formulario />}/>
                    <Route path="/historial" element={<Historial />}/>
                </Routes>
            </BrowserRouter>
            </FormularioContext.Provider>
            </HistorialContext.Provider>

     </div>

     </>
    );
        
}

export default App
