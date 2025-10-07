// src/components/Footer.jsx
import { FiHome, FiInfo, FiPhone } from "react-icons/fi";

export default function Footer() {
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
        <div>
          <h4 className="font-bold mb-3 text-white">Useful Links</h4>
          <ul className="space-y-2">
            <li className="hover:text-white">Schools</li>
            <li className="hover:text-white">Colleges</li>
            <li className="hover:text-white">Hospitals</li>
            <li className="hover:text-white">Theatres</li>
            <li className="hover:text-white">Hotels/Residencies</li>
            <li className="hover:text-white">Banks</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} Tiruvarur District Portal. All rights reserved.
      </div>
    </footer>
  );
}
