import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faGlobe } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img
          className="navbar-logo"
          src="../../logo-udemy.svg"
          alt="Udemy Logo"
        />

        <button className="navbar-btn">Explorar</button>

        <input
          className="navbar-search"
          type="text"
          placeholder="Pesquisar por qualquer coisa"
        />

        <button className="navbar-btn">Udemy Business</button>

        <button className="navbar-btn">Ensine na Udemy</button>

        <button className="navbar-btn">
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>

        <button className="navbar-btn-custom"><strong>Fazer login</strong></button>

        <button className="navbar-btn-custom-2"><strong>Cadastre-se</strong></button>

        <button className="navbar-btn-custom-3">
          <FontAwesomeIcon icon={faGlobe} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;