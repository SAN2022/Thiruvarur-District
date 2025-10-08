// src/pages/Jobs.jsx
import { useEffect, useState } from "react";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    document.title = "Thiruvarur District Job Updates";
  }, []);

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/68d84250ae596e708ffdfd41")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setJobs(data.record.jobs);
      })
      .catch((err) => console.error("Error fetching:", err));
  }, []);

  return (
    <div className="p-6">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-4 text-green-700">
        Thiruvarur District Job Updates
      </h2>

      <p className="text-gray-600 mb-6">
        Latest government and private job opportunities in and around Thiruvarur District.
      </p>

      {/* Job Posters Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job, idx) => (
          <div
            key={idx}
            className="shadow rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition duration-300"
            onClick={() => setSelectedImage(job.image)}
          >
            <img
              src={job.image}
              alt={job.title || `Job Poster ${idx + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Modal Window */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedImage(null)} // close when clicking outside
        >
          <div
            className="relative max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()} // prevent modal close on inside click
          >
            <button
              className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 cursor-pointer shadow text-gray-700 font-bold hover:bg-gray-200"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

            <img
              src={selectedImage}
              alt="Job Poster"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}
