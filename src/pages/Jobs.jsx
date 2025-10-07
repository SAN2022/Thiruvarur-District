// src/pages/Jobs.jsx
export default function Jobs() {
  useEffect(() => {
    document.title = "Thiruvarur District Job Updates";
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-green-700">
        Thiruvarur District Job Updates
      </h2>

      <p className="text-gray-600 mb-6">
        Latest government and private job opportunities in and around Thiruvarur District.
      </p>

      {/* Job posters */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobData.map((job, idx) => (
          <div key={idx} className="shadow rounded-lg overflow-hidden">
            <img src={job.image} alt={job.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{job.title}</h3>
              <p className="text-sm text-gray-600">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
