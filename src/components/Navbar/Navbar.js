import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar-container">
                <nav className="navbar navbar-expand-md bg-body-terciary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img src={`${process.env.PUBLIC_URL}/Logo.png`} width="40" height="32" alt="Logo"></img>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="bi bi-three-dots-vertical"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <span className="brand-name">Manos a la obra</span>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">
                                    Inicio
                                    </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/quienes-somos">Quiénes somos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/proyectos">Casos de éxito</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/servicios">Servicios</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contacto">¿Hablamos?</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        
    );
}
export default Navbar;


