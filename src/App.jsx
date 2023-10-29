import { useState } from 'react'
import './App.css';
import Cotizador from './componentes/Cotizador';

function App() {
 return (

    <div className='App'>
        <h1 className='titulo'>Seguros del hogar 🏡</h1> 
        <Cotizador />  
    
    </div>
    
 );
}

export default App
