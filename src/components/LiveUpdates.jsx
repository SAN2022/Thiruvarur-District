// src/components/LiveUpdates.jsx
import { FiBell } from "react-icons/fi";
import Jobs from "../pages/Jobs";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function LiveUpdates() {
  const [jobs, setJobs] = useState([])

  // useEffect(()=> {
  // fetch('https://api.jsonbin.io/v3/b/68d84250ae596e708ffdfd41')
  //       .then((res) => res.json())
  //       // .then((res) => console.log(res.record.schools))
  //       .then((res) => setJobs(res.record.jobs))
  //       .then(() => console.log(jobs))
  //       // .then(()=> console.log(jobs))
        
  //       // .then((res) => console.log(res.record.schools))
  //       // .then((json) => setData(json))
        
  //       .catch((err) => console.error("Error fetching:", err));
  // },[])

  return (
    <div className="bg-green-700 text-white text-center py-2 cursor-not-allowed">
      <div className="flex items-center justify-center space-x-2 font-semibold">
        <FiBell className="text-red-300 animate-bounce" />
        {/* <span>
          Live Updates (லேட்டஸ்ட் தகவல்கள்) <span className="text-red-400">NEW</span>
        </span> */}

        <Link
          to='/jobs'
          className="text-yellow-400 hover:text-blue-200"
        >
          Job Updates
        </Link>

        {/* <a href=""></a> */}
      </div>
    </div>
  );
}
