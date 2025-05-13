import React from "react";
import { Link, useNavigate } from "react-router-dom";

function MobileNavbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  return (
    <nav
      className="d-md-none text-white py-2 px-3 fixed-bottom"
      style={{
        backgroundColor: "#c1eaf4",
        borderTop: "1px solid #c1eaf4",
        zIndex: 1050,
      }}
    >
      <div className="d-flex justify-content-around">
        <Link to="/dashboard" className="text-dark text-decoration-none">
          <i className="fas fa-home"></i>
        </Link>
        <Link to="/explore" className="text-dark text-decoration-none">
          <i className="fas fa-map-marked-alt"></i>
        </Link>
        <Link to="/history" className="text-dark text-decoration-none">
          <i className="fas fa-history"></i>
        </Link>
        <button className="btn btn-link text-dark p-0" onClick={logout}>
          <i className="fas fa-sign-out-alt"></i>
        </button>
      </div>
    </nav>
  );
}

export default MobileNavbar;
