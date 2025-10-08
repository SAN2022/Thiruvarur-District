import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import LiveUpdates from "./components/LiveUpdates";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import PopulationStats from "./components/PopulationStats";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

import SchoolsPage from "./pages/SchoolsPage";
import CollegesPage from "./pages/CollegesPage";
import HospitalsPage from "./pages/HospitalsPage";
import TheatresPage from "./pages/TheatresPage";
import HotelsPage from "./pages/HotelsPage";
import Jobs from "./pages/Jobs";

export default function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carousel />
              <LiveUpdates />
              <div className="flex flex-col lg:flex-row">
                <Sidebar />
                <main className="flex-1 px-4 md:px-8 lg:px-12 py-6 space-y-8">
                  <Hero />
                  <Highlights />
                  <PopulationStats />
                  <Gallery />
                </main>
              </div>
            </>
          }
        />
        <Route path="/schools" element={<SchoolsPage />} />
        <Route path="/colleges" element={<CollegesPage />} />
        <Route path="/hospitals" element={<HospitalsPage />} />
        <Route path="/theatres" element={<TheatresPage />} />
        <Route path="/hotelsresidencies" element={<HotelsPage />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
      <Footer />
    </div>
  );
}
