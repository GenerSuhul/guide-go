import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  // Redirigir si ya hay sesión
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email && form.password) {
      localStorage.setItem("loggedIn", "true");
      navigate("/dashboard");
    } else {
      setError("Por favor, completa todos los campos.");
    }
  };

  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh", backgroundColor: "#f0f8ff" }}
    >
      <div className="card p-4 shadow" style={{ maxWidth: 400, width: "100%" }}>
        <div className="text-center mb-3">
          <img
            src="/assets/img/logo-guidego.png"
            alt="Guide-Go"
            height="100"
            style={{ marginBottom: "10px" }}
          />
        </div>
        <h6 className="text-center mb-4 fw-bold text-primary">Iniciar Sesión</h6>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="usuario@correo.com"
              onChange={handleChange}
              value={form.email}
            />
          </div>
          <div className="form-group mb-4">
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="********"
              onChange={handleChange}
              value={form.password}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
