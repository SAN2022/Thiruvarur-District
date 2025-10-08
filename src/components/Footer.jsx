// src/components/Footer.jsx
import { FiBookOpen, FiHome, FiInfo, FiPhone, FiFilm } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaHospital } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

export default function Footer() {
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
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-6">
        {/* Navigation */}
        <div>
          <h4 className="font-bold mb-3 text-white">Navigations</h4>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2 hover:text-white">
              <FiHome /> <span>Home</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-white">
              <FiInfo /> <span>About</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-white">
              <FiPhone /> <span>Contact</span>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <ul className="space-x-6 font-medium text-gray-300 space-y-2" >
          <h4 className="font-bold mb-3 text-white">Useful Links</h4>

          {links.map((link, idx) => (
            <li key={idx} className="flex items-center space-x-1 ">
              <span className="text-xl">{link.icon}</span>
              <Link
                to={ link.name == 'Home' ? '/' : `/${link.name.toLowerCase().replace("/", "").replace(" ", "")}`}
                className=" hover:text-green-600 text-gray-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        
        {/* <div>
          <h4 className="font-bold mb-3 text-white">Useful Links</h4>
          <ul className="space-y-2">
            <li className="hover:text-white">Schools</li>
            <li className="hover:text-white">Colleges</li>
            <li className="hover:text-white">Hospitals</li>
            <li className="hover:text-white">Theatres</li>
            <li className="hover:text-white">Hotels/Residencies</li>
            <li className="hover:text-white">Banks</li>
          </ul>
        </div> */}
      </div>

      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} Tiruvarur District Portal. All rights reserved.
      </div>
    </footer>
  );
}
