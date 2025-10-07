// src/pages/CollegesPage.jsx
import { useEffect, useState } from "react";
import DirectoryPage from "../components/DirectoryPage";

export default function CollegesPage() {
  const [college, setCollege] = useState([])

    useEffect(() => {
      document.title = "Thiruvarur District Colleges | Education Details";
    }, [])
  
    useEffect(()=> {
      fetch('https://api.jsonbin.io/v3/b/68d84250ae596e708ffdfd41')
        .then((res) => res.json())
        // .then((res) => console.log(res.record.schools))
        .then((res) => setCollege(res.record.colleges))
        // .then(()=> console.log(college))
        
        // .then((res) => console.log(res.record.schools))
        // .then((json) => setData(json))
        
        .catch((err) => console.error("Error fetching:", err));
    },[])

  return (
    <DirectoryPage
      title="Colleges"
      apiUrl="https://api.jsonbin.io/v3/b/68d84250ae596e708ffdfd41" // replace with your jsonbin URL
      data={college}
    />
  );
}
