import React, { useEffect, useState } from "react";

function History() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(stored);
  }, []);

  const updateLocalStorage = (newData) => {
    setBookings(newData);
    localStorage.setItem("bookings", JSON.stringify(newData));
  };

  const handleDelete = (id) => {
    const updated = bookings.filter((b) => b.id !== id);
    updateLocalStorage(updated);
  };

  const handleStatusChange = (id, newStatus) => {
    const updated = bookings.map((b) =>
      b.id === id ? { ...b, status: newStatus } : b
    );
    updateLocalStorage(updated);
  };

  return (
    <div className="container">
      <h3 className="fw-bold mt-4 mb-4">Historial de reservas</h3>
      {bookings.length === 0 ? (
        <div className="alert alert-warning">No hay reservas registradas aún.</div>
      ) : (
        <div className="table-responsive card p-3">
          <table className="table table-hover table-bordered align-middle">
            <thead className="thead-light">
              <tr>
                <th>Guía</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                  <td>
                    <div className="d-flex align-items-center">
                        <span
                        className={`badge me-2 ${
                            item.status === "Confirmada"
                            ? "badge-success"
                            : item.status === "En proceso"
                            ? "badge-warning"
                            : "badge-danger"
                        }`}
                        >
                        {item.status}
                        </span>
                        <select
                        className="form-select form-select-sm"
                        style={{ maxWidth: 140 }}
                        value={item.status}
                        onChange={(e) => handleStatusChange(item.id, e.target.value)}
                        >
                        <option value="Confirmada">Confirmada</option>
                        <option value="En proceso">En proceso</option>
                        <option value="Cancelada">Cancelada</option>
                        </select>
                    </div>
                    </td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default History;
