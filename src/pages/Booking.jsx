import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Booking() {
  const location = useLocation();
  const guideName = location.state?.guideName || "Guía turístico";

  const [bookingType, setBookingType] = useState("now");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleBooking = (e) => {
  e.preventDefault();

  if (bookingType === "later" && (!date || !hour)) {
    setMessage("Debes seleccionar fecha y hora");
    return;
  }

  const newBooking = {
    id: Date.now(),
    name: guideName, // puedes mejorarlo para que venga del perfil
    date: bookingType === "now" ? new Date().toISOString().slice(0, 10) : date,
    time: bookingType === "now" ? new Date().toLocaleTimeString().slice(0, 5) : hour,
    status: bookingType === "now" ? "Confirmada" : "En proceso",
  };

  const existing = JSON.parse(localStorage.getItem("bookings")) || [];
  const updated = [...existing, newBooking];
  localStorage.setItem("bookings", JSON.stringify(updated));

  setMessage("✅ ¡Reserva registrada con éxito!");
  setTimeout(() => navigate("/history"), 1500);
};


  return (
    <div className="container">
      <div className="card mt-5 shadow p-4" style={{ maxWidth: 600, margin: "auto" }}>
        <h3 className="fw-bold mb-3">Reservar guía turístico</h3>

        {message && (
          <div className="alert alert-info">
            {message}
          </div>
        )}

        <form onSubmit={handleBooking}>
          <div className="form-group mb-3">
            <label>Tipo de reserva</label>
            <select
              className="form-select"
              value={bookingType}
              onChange={(e) => setBookingType(e.target.value)}
            >
              <option value="now">Reservar para ahora</option>
              <option value="later">Reservar para después</option>
            </select>
          </div>

          {bookingType === "later" && (
            <>
              <div className="form-group mb-3">
                <label>Fecha</label>
                <input
                  type="date"
                  className="form-control"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="form-group mb-3">
                <label>Hora</label>
                <input
                  type="time"
                  className="form-control"
                  value={hour}
                  onChange={(e) => setHour(e.target.value)}
                />
              </div>
            </>
          )}

          <button type="submit" className="btn btn-primary w-100 mt-2">
            Confirmar Reserva
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking;
