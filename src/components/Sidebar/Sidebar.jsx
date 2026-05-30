import { useState } from "react";
import { NavLink } from "react-router-dom";

import { FaHome, FaBook, FaUsers, FaBars, FaTimes, FaImages, FaChevronDown, FaChevronUp, FaGithub, FaDiscord } from "react-icons/fa";
import teamData from "../../data/teamData";
import "./sidebar.css";

function Sidebar() {

  const [isOpen, setIsOpen] = useState(false);
  const [isProfilesOpen, setIsProfilesOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleProfiles = () => setIsProfilesOpen(!isProfilesOpen);

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

          <NavLink to="/galeria" className="nav-item" onClick={closeMenu}>
            <FaImages />
            <span>Galería NASA</span>
          </NavLink>

          {/* Menú Desplegable de Perfiles */}
          <div className="nav-item-dropdown">
            <div className="nav-item" onClick={toggleProfiles} style={{ cursor: "pointer", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <FaUsers />
                <span>Perfiles</span>
              </div>
              {isProfilesOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
            </div>

            {isProfilesOpen && (
              <div className="sub-menu">
                {teamData.map((member) => (
                  <NavLink key={member.id} to={`/perfiles/${member.id}`} className="nav-item sub-item" onClick={closeMenu}>
                    <span>{member.apodo}</span>
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-socials">
            <a href="https://github.com/mariaayelen/Front-Orion" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="#">
              <FaDiscord />
            </a>
          </div>
          <p>&copy; 2026 Equipo Orión.</p>
        </div>
      </aside>

      {isOpen && <div className="sidebar-overlay" onClick={closeMenu}></div>}
    </>
  );
}

export default Sidebar;