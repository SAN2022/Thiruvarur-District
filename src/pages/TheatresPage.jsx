// src/pages/TheatresPage.jsx
import { useEffect, useState } from "react";

import DirectoryPage from "../components/DirectoryPage";

export default function TheatresPage() {
  const [theatre, setTheatre] = useState([])
  
    useEffect(() => {
      document.title = "Thiruvarur District Theatres | Theatres Details";
    }, []);

    useEffect(()=> {
      fetch('https://api.jsonbin.io/v3/b/68d84250ae596e708ffdfd41')
        .then((res) => res.json())
        // .then((res) => console.log(res.record.schools))
        .then((res) => setTheatre(res.record.theaters))
        .then(()=> console.log(theatre))
        
        // .then((res) => console.log(res.record.schools))
        // .then((json) => setData(json))
        
        .catch((err) => console.error("Error fetching:", err));
    },[])

  return (
    <DirectoryPage
      title="Theatres"
      apiUrl="https://api.jsonbin.io/v3/b/68d84250ae596e708ffdfd41" // replace with your jsonbin URL
      data={theatre}
    />
  );
}
