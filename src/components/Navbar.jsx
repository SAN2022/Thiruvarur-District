// src/components/Navbar.jsx
import { FiBookOpen, FiHome, FiInfo, FiPhone, FiMenu, FiFilm, FiMapPin } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHospital } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", icon: <FiHome /> },
    { name: "Schools", icon: <FiBookOpen /> },
    { name: "Colleges", icon: <MdSchool /> },
    { name: "Hospitals", icon: <FaHospital /> },
    { name: "Theatres", icon: <FiFilm /> },
    { name: "Hotels/Residencies", icon: <FiHome /> },
    // { name: "Temples", icon: <FiMapPin /> },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* <ul className="space-y-3">
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
      
            </ul> */}

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Title */}
        <Link to="/" className="text-xl font-bold text-green-700">
          Tiruvarur District
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">

          {links.map((link, idx) => (
            <li key={idx} className="flex items-center space-x-1">
              <span className="text-xl">{link.icon}</span>
              <Link
                to={ link.name == 'Home' ? '/' : `/${link.name.toLowerCase().replace("/", "").replace(" ", "")}`}
                className="text-gray-600 hover:text-green-600"
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* <li>
            <Link
              to="/"
              className="flex items-center space-x-1 hover:text-green-600"
            >
              <FiHome /> <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/schools"
              className="flex items-center space-x-1 hover:text-green-600"
            >
              <FiInfo /> <span>Schools</span>
            </Link>
          </li>
          <li>
            <Link
              to="/colleges"
              className="flex items-center space-x-1 hover:text-green-600"
            >
              <FiPhone /> <span>Colleges</span>
            </Link>
          </li>
          <li>
            <Link
              to="/hospitals"
              className="flex items-center space-x-1 hover:text-green-600"
            >
              <FiPhone /> <span>Hospitals</span>
            </Link>
          </li>
          <li>
            <Link
              to="/theatres"
              className="flex items-center space-x-1 hover:text-green-600"
            >
              <FiPhone /> <span>Theatres</span>
            </Link>
          </li> */}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          <FiMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-4">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center space-x-2 hover:text-green-600"
          >
            <FiHome /> <span>Home</span>
          </Link>
          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="flex items-center space-x-2 hover:text-green-600"
          >
            <FiInfo /> <span>About</span>
          </Link>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="flex items-center space-x-2 hover:text-green-600"
          >
            <FiPhone /> <span>Contact</span>
          </Link>
        </div>
      )}
    </nav>
  );
}
