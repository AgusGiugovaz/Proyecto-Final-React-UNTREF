import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Historial from "./componentes/Historial";
import Formulario from "./componentes/Formulario";
import useLocalStorage from "./hooks/useLocalStorage";
import HistorialContext from "./context/HistorialContext";
import FormularioContext from "./context/FormularioContext";

function App() {
  const [historial, setHistorial] = useLocalStorage("historial", []);

  return (
    <>
      <section className="App">
        <HistorialContext.Provider value={{ historial, setHistorial }}>
          <FormularioContext.Provider value={{}}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Formulario />} />
                <Route path="/historial" element={<Historial />} />
              </Routes>
            </BrowserRouter>
          </FormularioContext.Provider>
        </HistorialContext.Provider>
      </section>
    </>
  );
}

export default App;
