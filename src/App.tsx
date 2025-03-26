import './App.css';
import Home from './Home/Home';
import Toolbar from './Toolbar/Toolbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Experiencia from './Experiencia/Experiencia';
import AcercaDeMi from './AcercaDeMi/AcercaDeMi';
import Clientes from './Clientes/Clientes';
import Empresas from './Empresas/Empresas';
import Proyectos from './Proyectos/Proyectos';
import Contacto from './Contacto/Contacto';

function App() {
  return (
    <Router>
      <Toolbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiencia" element={<Experiencia />} />
        <Route path="/acerca-de-mi" element={<AcercaDeMi />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/empresas" element={<Empresas />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;
