import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const guides = [
  {
    id: 1,
    name: "Carlos Hernández",
    photo: `${process.env.PUBLIC_URL}/assets/img/profile.jpg`,
    languages: ["Español", "Inglés"],
    rating: 4.7,
    experience: "5 años",
    bio: "Soy un guía turístico apasionado por la cultura guatemalteca. He trabajado con más de 300 grupos.",
  },
  {
    id: 2,
    name: "María López",
    photo: `${process.env.PUBLIC_URL}/assets/img/talha.jpg`,
    languages: ["Español", "Francés"],
    rating: 4.9,
    experience: "8 años",
    bio: "Guía especializada en turismo ecológico y cultural. Me encanta enseñar y aprender de cada visitante.",
  },
  {
    id: 3,
    name: "Luis González",
    photo: `${process.env.PUBLIC_URL}/assets/img/chadengle.jpg`,
    languages: ["Inglés"],
    rating: 4.5,
    experience: "3 años",
    bio: "Apasionado por la historia y naturaleza de Guatemala. Ofrezco recorridos personalizados y dinámicos.",
  },
];

function GuideProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const guide = guides.find((g) => g.id === parseInt(id));

  if (!guide) {
    return <h3>Guía no encontrado</h3>;
  }

  return (
    <div className="container">
      <div className="card mt-4 shadow">
        <div className="card-body d-flex flex-column flex-md-row align-items-center">
          <div className="me-md-4 mb-3 mb-md-0">
            <img
              src={guide.photo}
              alt="guía"
              className="rounded-circle"
              width="150"
              height="150"
            />
          </div>
          <div className="flex-grow-1">
            <h3 className="fw-bold">{guide.name}</h3>
            <p className="mb-1">Idiomas: {guide.languages.join(", ")}</p>
            <p className="mb-1">Experiencia: {guide.experience}</p>
            <p className="text-warning fw-bold mb-2">
              ⭐ {guide.rating} / 5
            </p>
            <p className="mb-3">{guide.bio}</p>
            <div>
              <button className="btn btn-outline-primary me-2">Contactar</button>
              <button
                className="btn btn-primary"
                onClick={() => navigate("/booking", { state: { guideName: guide.name } })}
              >
                Reservar guía
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuideProfile;
