import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Sidebar.css";

function DesktopSidebar({ collapsed, setCollapsed }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <aside className={`desktop-sidebar ${collapsed ? "collapsed" : ""} d-none d-md-flex flex-column`}>
      {/* Logo / toggle */}
      <div className="sidebar-header p-3 d-flex justify-content-between align-items-center">
        <img
            src="/assets/img/logo-guidego.png"
            alt="Guide-Go"
            height="100"
            className={collapsed ? "d-none" : ""}
        />
  <button className="btn btn-sm btn-toggle text-white" onClick={() => setCollapsed(!collapsed)}>
    <i className={`fas ${collapsed ? "fa-chevron-right" : "fa-chevron-left"}`}></i>
  </button>
</div>


      {/* Navegación */}
      <ul className="nav flex-column px-4">
        <li className={`nav-item ${isActive("/dashboard") ? "active" : ""}`}>
          <Link to="/dashboard" className="#002c42">
            <i className="fas fa-home me-2"></i>
            {!collapsed && "Dashboard"}
          </Link>
        </li>
        <li className={`nav-item ${isActive("/explore") ? "active" : ""}`}>
          <Link to="/explore" className="#002c42">
            <i className="fas fa-map-marked-alt me-2"></i>
            {!collapsed && "Explorar"}
          </Link>
        </li>
        <li className={`nav-item ${isActive("/history") ? "active" : ""}`}>
          <Link to="/history" className="#002c42">
            <i className="fas fa-history me-2"></i>
            {!collapsed && "Historial"}
          </Link>
        </li>
        <li className="nav-item mt-auto">
          <button className="btn btn-link nav-link #002c42 text-start ps-0" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt me-2"></i>
            {!collapsed && "Salir"}
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default DesktopSidebar;
