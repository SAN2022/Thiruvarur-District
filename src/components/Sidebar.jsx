// src/components/Sidebar.jsx
import { Link } from "react-router-dom";
import {
  FiBookOpen,
  FiFilm,
  FiHome,
  FiMapPin,
} from "react-icons/fi";
import { FaHospital } from "react-icons/fa";

const links = [
  { name: "Schools", icon: <FiBookOpen /> },
  { name: "Colleges", icon: <FiBookOpen /> },
  { name: "Hospitals", icon: <FaHospital /> },
  { name: "Theatres", icon: <FiFilm /> },
  { name: "Hotels/Residencies", icon: <FiHome /> },
  { name: "Jobs", icon: <FiHome /> },
  // { name: "Temples", icon: <FiMapPin /> },
];

export default function Sidebar() {
  return (
    <aside className="lg:w-64 bg-white border-r border-gray-200 p-6 hidden lg:block">
      <h3 className="font-bold text-gray-700 mb-4">Quick Links</h3>
      <ul className="space-y-3">
        {links.map((link, idx) => (
          <li key={idx} className="flex items-center space-x-3">
            <span className="text-xl">{link.icon}</span>
            <Link
              to={`/${link.name.toLowerCase().replace("/", "").replace(" ", "")}`}
              className="text-gray-600 hover:text-green-600"
            >
              {link.name}
            </Link>
          </li>
        ))}

      </ul>
    </aside>
  );
}
