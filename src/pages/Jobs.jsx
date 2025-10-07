// src/pages/Jobs.jsx
import { useEffect, useState } from "react";

export default function Jobs() {
  const [jobs, setJobs] = useState([])
  
  useEffect(() => {
    document.title = "Thiruvarur District Job Updates";
  }, []);

  useEffect(()=> {
  fetch('https://api.jsonbin.io/v3/b/68d84250ae596e708ffdfd41')
        .then((res) => res.json())
        // .then((res) => console.log(res.record.schools))
        // .then((res) => console.log(res.record.jobs))
        .then((res) => setJobs(res.record.jobs))
        .then(() => console.log(jobs))
        // .then(() => console.log(jobs))
        // .then(()=> console.log(jobs))
        
        // .then((res) => console.log(res.record.schools))
        // .then((json) => setData(json))
        
        .catch((err) => console.error("Error fetching:", err));
  },[])

  const jobData = [
    {
      title: 'City union bank',
      description: 'Anyone can apply for this bank job'
    }
  ]
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
