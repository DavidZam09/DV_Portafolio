import './Toolbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Toolbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="toolbar">
            <div className="avatar">
                {/* Avatar image or component */}
                <img src="src/assets/Logo.png" alt="Avatar" />
            </div>
            <button className="menu-toggle" onClick={toggleMenu}>
                {/* Icon for the menu button */}
                ☰
            </button>
            <div className={`buttons ${menuOpen ? 'open' : ''}`}>
                <Link to="/" className='toolbar-button'>Home</Link>
                <Link to="/experiencia" className='toolbar-button'>Experiencia</Link>
                <Link to="/acerca-de-mi" className='toolbar-button'>Acerca de mi</Link>
                <Link to="/clientes" className='toolbar-button'>Clientes</Link>
                <Link to="/empresas" className='toolbar-button'>Empresas</Link>
                <Link to="/proyectos" className='toolbar-button'>Proyectos</Link>
                <Link to="/contacto" className='toolbar-button'>Contacto</Link>
            </div>
        </div>
    );
}

export default Toolbar;
