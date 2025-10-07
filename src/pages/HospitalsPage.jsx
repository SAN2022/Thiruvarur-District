// src/pages/HospitalsPage.jsx
import { useEffect, useState } from "react";

import DirectoryPage from "../components/DirectoryPage";

export default function HospitalsPage() {
  const [hospital, setHospital] = useState([])
  
    useEffect(()=> {
      fetch('https://api.jsonbin.io/v3/b/68d84250ae596e708ffdfd41')
        .then((res) => res.json())
        // .then((res) => console.log(res.record.schools))
        .then((res) => setHospital(res.record.hospitals))
        .then(()=> console.log(hospital))
        
        // .then((res) => console.log(res.record.schools))
        // .then((json) => setData(json))
        
        .catch((err) => console.error("Error fetching:", err));
    },[])

  return (
    <DirectoryPage
      title="Hospitals"
      apiUrl="https://api.jsonbin.io/v3/b/68d84250ae596e708ffdfd41" // replace with your jsonbin URL
      data={hospital}
    />
  );
}
