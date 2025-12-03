import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/logo.png";
import {NavLink} from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark text-white px-4">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center w-100">
          {/* Logo */}
          <NavLink to="/" className="navbar-brand">
            <img src={logo} alt="MiTienda logo" className="img-fluid" style={{ maxHeight: '100px' }} />
          </NavLink>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>


          {/* Menú de navegación */}
          <ul className="navbar-nav d-flex flex-row gap-3">
            <li className="nav-item">
              <NavLink to="/" className="nav-link text-white">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category/electronics" className="nav-link text-white">
                Electronica
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category/jewelery" className="nav-link text-white">
                Joyería
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category/men's clothing" className="nav-link text-white">
                Ropa hombre
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category/women's clothing" className="nav-link text-white">
                Ropa mujer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link text-white">
                Contacto
              </NavLink>
            </li>
          </ul>

          {/* Carrito */}
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
