// src/components/Hero.jsx
import collectorImg from "../assets/collector-img.jpg"; // replace with your image
import heroImg from "../assets/Repositories/aazhi-ther.jpg"; // replace with your image

export default function Hero() {
  return (
    <section className="bg-white shadow-md rounded-2xl p-6 grid md:grid-cols-2 gap-8">
      {/* Collector Info */}
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          <img
            src={collectorImg}
            alt="District Collector"
            className="w-24 h-24 object-cover rounded-full border-4 border-green-600"
          />
          <div>
            <h2 className="text-lg font-bold text-gray-800">
              Thiru. V. Mohanachandran I.A.S
            </h2>
            <p className="text-sm text-gray-600">
              District Collector, Tiruvarur District, Tamil Nadu
            </p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Tiruvarur is known for its rich cultural heritage and historical
          temples. The district continues to thrive with a focus on education,
          agriculture, and tourism, bringing together tradition and modern
          development.
        </p>
      </div>

      {/* Hero Image */}
      <div>
        <img
          src={heroImg}
          alt="Thiruvarur City"
          className="rounded-xl shadow-lg w-full object-cover"
        />
      </div>
    </section>
  );
}
