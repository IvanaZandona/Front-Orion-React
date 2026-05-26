import { useState } from "react";
import { NavLink } from "react-router-dom";

import { FaHome, FaBook, FaUsers, FaBars, FaTimes } from "react-icons/fa";

import "../../styles/sidebar.css";

function Sidebar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
<>
      <button className={`hamburger-btn ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-logo">
          <h2>Orión</h2>
        </div>

        <nav className="sidebar-nav">
          <NavLink to="/" end className="nav-item" onClick={closeMenu}>
            <FaHome />
            <span>Inicio</span>
          </NavLink>

          <NavLink to="/bitacora" className="nav-item" onClick={closeMenu}>
            <FaBook />
            <span>Bitácora</span>
          </NavLink>

          <div className="nav-item disabled">
            <FaUsers />
            <span>Perfiles</span>
          </div>
        </nav>
      </aside>

      {isOpen && <div className="sidebar-overlay" onClick={closeMenu}></div>}
    </>
  );
}

export default Sidebar;