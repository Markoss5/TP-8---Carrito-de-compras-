import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Navbar() {
  const [categorias, setCategorias] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories")
      .then(res => setCategorias(res.data))
      .catch(() => setCategorias([]));
  }, []);

  return (
    <header className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">MarcoShops</Link>
        <nav className={`navbar__nav ${menuOpen ? "navbar__nav--open" : ""}`}>
          <NavLink to="/" className="navbar__link" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/quienes-somos" className="navbar__link" onClick={() => setMenuOpen(false)}>Quiénes somos</NavLink>
          <div className="navbar__dropdown">
            <span className="navbar__link">Productos ▾</span>
            <div className="navbar__dropdown-content">
              <NavLink to="/productos" className="navbar__dropdown-link" onClick={() => setMenuOpen(false)}>Ver todos</NavLink>
              {categorias.map(cat => (
                <NavLink
                  key={cat}
                  to={`/productos/${cat}`}
                  className="navbar__dropdown-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </NavLink>
              ))}
            </div>
          </div>
          <NavLink to="/contacto" className="navbar__link" onClick={() => setMenuOpen(false)}>Contacto</NavLink>
        </nav>
        <button
          className="navbar__burger"
          aria-label="Menú"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;