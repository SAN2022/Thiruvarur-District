// src/pages/SchoolsPage.jsx
import { useEffect, useState } from "react";
import DirectoryPage from "../components/DirectoryPage";

export default function SchoolsPage() {
  const [school, setSchool] = useState([])

  useEffect(() => {
    document.title = "Thiruvarur District Schools | Education Details";
  }, []);

  useEffect(()=> {
    fetch('https://api.jsonbin.io/v3/b/68d84250ae596e708ffdfd41')
      .then((res) => res.json())
      // .then((res) => console.log(res.record.schools))
      .then((res) => setSchool(res.record.schools))
      .then(()=> console.log(school))
      
      // .then((res) => console.log(res.record.schools))
      // .then((json) => setData(json))
      
      .catch((err) => console.error("Error fetching:", err));
  },[])

  return (
    <DirectoryPage
      title="Schools in Thiruvarur"
      apiUrl= '' // replace with your jsonbin URL
      data = {school}
    />
  );
}