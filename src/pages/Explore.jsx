import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


  const guides = [
  {
    id: 4,
    name: "Vielman Estuardo Barahona Alejandro",
    photo: `${process.env.PUBLIC_URL}/assets/img/guia4.png`,
    languages: ["Español", "Inglés"],
    rating: 4.6,
    experience: "1 año",
  },
  {
    id: 5,
    name: "Cristian Geciel Ordóñez Arévalo",
    photo: `${process.env.PUBLIC_URL}/assets/img/guia5.png`,
    languages: ["Español", "Inglés"],
    rating: 4.8,
    experience: "2 años",
  },
  {
    id: 6,
    name: "Diana Noemí Flores del Cid",
    photo: `${process.env.PUBLIC_URL}/assets/img/guia6.png`,
    languages: ["Español", "Inglés"],
    rating: 4.7,
    experience: "1 año",
  },
  {
    id: 1,
    name: "Carlos Hernández",
    photo: `${process.env.PUBLIC_URL}/assets/img/profile.jpg`,
    languages: ["Español", "Inglés"],
    rating: 4.7,
    experience: "5 años",
  },
  {
    id: 2,
    name: "María López",
    photo: `${process.env.PUBLIC_URL}/assets/img/talha.jpg`,
    languages: ["Español", "Francés"],
    rating: 4.9,
    experience: "8 años",
  },
  {
    id: 3,
    name: "Luis González",
    photo: `${process.env.PUBLIC_URL}/assets/img/chadengle.jpg`,
    languages: ["Inglés"],
    rating: 4.5,
    experience: "3 años",
  },
];

function Explore() {
  const navigate = useNavigate();
  const [selectedLang, setSelectedLang] = useState("Todos");

  const allLanguages = [
    "Todos",
    ...new Set(guides.flatMap((g) => g.languages)),
  ];

  const filteredGuides =
    selectedLang === "Todos"
      ? guides
      : guides.filter((g) => g.languages.includes(selectedLang));

  return (
    <div className="container">
      <h3 className="fw-bold mt-4 mb-3">Guías disponibles</h3>

      <div className="mb-4">
        <label className="fw-semibold me-2">Filtrar por idioma:</label>
        <select
          className="form-select w-auto d-inline-block"
          value={selectedLang}
          onChange={(e) => setSelectedLang(e.target.value)}
        >
          {allLanguages.map((lang, index) => (
            <option key={index} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>

      <div className="row">
        {filteredGuides.length > 0 ? (
          filteredGuides.map((guide) => (
            <div key={guide.id} className="col-md-4 mb-4">
              <div className="card card-profile">
                <div className="card-header" style={{ padding: "1rem 1rem 0 1rem" }}>
                  <div className="profile-picture">
                    <div className="avatar avatar-xl">
                      <img
                        src={guide.photo}
                        alt={guide.name}
                        className="avatar-img rounded-circle"
                      />
                    </div>
                  </div>
                </div>
                <div className="card-body text-center">
                  <h4 className="fw-bold mb-1">{guide.name}</h4>
                  <p className="text-muted mb-1">
                    Idiomas: {guide.languages.join(", ")}
                  </p>
                  <p className="text-muted mb-1">Experiencia: {guide.experience}</p>
                  <p className="text-warning fw-bold mb-2">
                    ⭐ {guide.rating} / 5
                  </p>
                  <button
                    className="btn btn-sm btn-primary me-2"
                    onClick={() => navigate(`/guide/${guide.id}`)}
                  >
                    Ver perfil
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="alert alert-warning">
            No hay guías que hablen ese idioma.
          </div>
        )}
      </div>
    </div>
  );
}

export default Explore;
