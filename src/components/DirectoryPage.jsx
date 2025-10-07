// src/components/DirectoryPage.jsx
import { useEffect, useState } from "react";
import DirectoryCard from "./DirectoryCard";

export default function DirectoryPage({ title, apiUrl , data}) {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch(apiUrl)
  //     .then((res) => res.json())
  //     .then((res) => setData(res.record.schools))
  //     // .then((res) => console.log(res.record.schools))
  //     // .then((json) => setData(json))
      
  //     .catch((err) => console.error("Error fetching:", err));
  // }, [apiUrl]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-green-700 mb-6">{title}</h2>

      {data.length === 0 ? (
        // 🔹 Skeleton UI
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-5 animate-pulse"
            >
              <div className="h-5 w-3/4 bg-gray-300 rounded mb-4"></div>
              <div className="h-4 w-1/2 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-2/3 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
        
        // <div className="flex justify-center items-center h-40">
        //   <div className="w-10 h-10 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
        // </div>

        // <p className="text-gray-500">Loading data...</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, idx) => (
            <DirectoryCard key={idx} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}