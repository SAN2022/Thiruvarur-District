// src/components/Gallery.jsx
import g1 from "../assets/Repositories/temple01.jpg";
import g2 from "../assets/Repositories/temple-with-ther.jpg";
import g3 from "../assets/Repositories/drone view.jpg";
import g4 from "../assets/Repositories/aazhi-ther.jpg";
import g5 from "../assets/Repositories/collectorate.jpg";
import g6 from "../assets/Repositories/medicalclg.jpg";

const images = [g1, g2, g3, g4, g5, g6];

export default function Gallery() {
  return (
    <section>
      <h3 className="text-xl font-bold text-gray-700 mb-4">Repositories</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Gallery ${idx + 1}`}
            className="rounded-lg shadow-md hover:scale-105 transition-transform object-cover"
          />
        ))}
      </div>
    </section>
  );
}
