import React from "react";

function Dashboard() {
  return (
    <div className="container">
      <h3 className="fw-bold mt-4 mb-3">Bienvenido a Guide-Go</h3>

      <div className="card p-3 shadow mb-4">
        <h5 className="fw-bold">🧭 ¿Qué es Guide-Go?</h5>
        <p>
          Guide-Go es una plataforma que conecta turistas con guías locales para ofrecer
          experiencias auténticas, personalizadas y flexibles. Nuestra misión es ayudarte a explorar 
          Guatemala con acompañamiento profesional de confianza.
        </p>
      </div>

      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card p-3 h-100">
            <h6 className="fw-bold text-primary">🎯 Segmento Primario</h6>
            <p>
              <strong>Turistas Individuales:</strong> Nacionales e internacionales, entre 20 y 45 años,
              que buscan experiencias auténticas, personalizadas y usan tecnología para planificar sus viajes.
              Incluye mochileros, parejas jóvenes y viajeros solitarios.
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card p-3 h-100">
            <h6 className="fw-bold text-success">🌍 Segmento Secundario</h6>
            <p>
              <strong>Guías Turísticos Independientes:</strong> Profesionales o informales, con dominio
              de idiomas, que valoran la flexibilidad laboral, la visibilidad directa con el cliente
              y el control sobre sus tarifas y disponibilidad.
            </p>
          </div>
        </div>
      </div>

      <div className="card p-0 shadow mb-4">
        <div className="ratio ratio-16x9">
          <iframe
            title="Mapa Petén"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.771697447482!2d-89.89969618575661!3d16.52076978862667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f64d6f44d6f234d%3A0xb74f54cfec7794a5!2sPopt%C3%BAn%2C%20Guatemala!5e0!3m2!1ses-419!2sgt!4v1715560557426!5m2!1ses-419!2sgt"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
