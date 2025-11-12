import CartWidget from "./CartWidget";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark text-white px-4">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center w-100">
          {/* Logo */}
          <a className="navbar-brand" href="#">
            <img src={logo} alt="MiTienda logo" className="img-fluid" style={{ maxHeight: '100px' }} />
          </a>
          

          {/* Menú de navegación */}
          <ul className="navbar-nav d-flex flex-row gap-3">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Contacto
              </a>
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
