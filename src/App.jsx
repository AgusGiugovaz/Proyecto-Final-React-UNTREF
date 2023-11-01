import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Historial from './componentes/Historial';
//import useLocalStorage from './hooks/useLocalStorage';
//import TablaContext from "./context/TablaContext";
import Formulario from './componentes/Formulario';



function App () {
    
 return (

    <div className='App'>
            <BrowserRouter> 
            <Routes>
                    <Route path="/" element={<Formulario />}/>
                    <Route path="/historial" element={<Historial />}/>
                </Routes>
            </BrowserRouter>

     </div>
    );
        
}

export default App
