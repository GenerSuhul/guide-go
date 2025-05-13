import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Explore from "./pages/Explore";
import GuideProfile from "./pages/GuideProfile";
import Booking from "./pages/Booking";
import History from "./pages/History";
import Login from "./pages/Login";

import DesktopSidebar from "./components/DesktopSidebar";
import MobileTopbar from "./components/MobileTopbar";
import MobileNavbar from "./components/MobileNavbar";
import useIsDesktop from "./hooks/useIsDesktop";
import "./App.css";

// Ruta protegida
function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";
  const location = useLocation();
  return isLoggedIn ? children : <Navigate to="/login" state={{ from: location }} replace />;
}

// Ruta pública
function PublicRoute({ children }) {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";
  return isLoggedIn ? <Navigate to="/dashboard" replace /> : children;
}

// COMPONENTE APP LAYOUT COMPLETO
function AppLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const isDesktop = useIsDesktop();

  return (
    <div className="d-flex">
      {/* Sidebar solo escritorio */}
      {isDesktop && (
        <DesktopSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      )}

      {/* Contenido principal envuelto correctamente */}
      <div
        className="main-content d-flex flex-column min-vh-100 flex-grow-1"
        style={{
          marginLeft: isDesktop ? (collapsed ? "70px" : "220px") : "0px",
          transition: "margin-left 0.3s ease",
        }}
      >
        {/* Topbar móvil */}
        <MobileTopbar />

        {/* Contenido dinámico (ocupa espacio) */}
        <div className="content pt-4 flex-grow-1">
          <div className="container">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/guide/:id" element={<GuideProfile />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/history" element={<History />} />
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </div>
        </div>
        {/* Navbar móvil abajo */}
        <MobileNavbar />
      </div>
    </div>
  );
}


// COMPONENTE PRINCIPAL APP
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            localStorage.getItem("loggedIn") === "true"
              ? <Navigate to="/dashboard" replace />
              : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
