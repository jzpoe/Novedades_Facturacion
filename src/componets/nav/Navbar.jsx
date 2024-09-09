import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img className="logo" src="/img/logo/icons8-logo-48.png" alt="Logo" />
      </div>
      <ul className="navbar-options">
        <li><Link to="/">Novedades</Link></li>
        <li><Link to="/facturacion">Facturacion</Link></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  )
}

export default Navbar