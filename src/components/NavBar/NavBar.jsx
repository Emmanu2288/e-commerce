import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center w-100">
          {/* Logo */}
          <NavLink to="/" className="navbar-brand">
            <img
              src={logo}
              alt="MiTienda logo"
              className="img-fluid"
            />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
          >
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
              <NavLink to="/category/Electronica" className="nav-link text-white">
                Electrónica
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category/Joyeria" className="nav-link text-white">
                Joyería
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category/Ropa de hombre" className="nav-link text-white">
                Ropa de hombre
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category/Ropa de mujer" className="nav-link text-white">
                Ropa de mujer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link text-white">
                Contacto
              </NavLink>
            </li>
          </ul>

          {/* Carrito con link */}
          <NavLink to="/cart" className="nav-link text-white nav-cart">
            <CartWidget />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;