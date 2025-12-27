import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-3">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p className="mb-2 mb-md-0">
          © {new Date().getFullYear()} MiTienda - Todos los derechos reservados
        </p>

        <div className="d-flex gap-3">
          <NavLink to="/contact" className="text-light text-decoration-none">
            Contacto
          </NavLink>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light text-decoration-none"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light text-decoration-none"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;