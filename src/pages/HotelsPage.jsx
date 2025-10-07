// src/pages/HotelsPage.jsx
import { useEffect, useState } from "react";
import DirectoryPage from "../components/DirectoryPage";

export default function HotelsPage() {
  const [hotel, setHotel] = useState([])
  
    useEffect(()=> {
      fetch('https://api.jsonbin.io/v3/b/68d84250ae596e708ffdfd41')
        .then((res) => res.json())
        // .then((res) => console.log(res.record.schools))
        .then((res) => setHotel(res.record.hotels))
        .then(()=> console.log(hotel))
        
        // .then((res) => console.log(res.record.schools))
        // .then((json) => setData(json))
        
        .catch((err) => console.error("Error fetching:", err));
    },[])

  return (
    <DirectoryPage
      title="Hotels / Residencies"
      apiUrl="https://api.jsonbin.io/v3/b/68d84250ae596e708ffdfd41" // replace with your jsonbin URL
      data={hotel}
    />
  );
}
