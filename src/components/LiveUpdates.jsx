// src/components/LiveUpdates.jsx
import { FiBell } from "react-icons/fi";
import Jobs from "../pages/Jobs";

export default function LiveUpdates() {
  return (
    <div className="bg-green-700 text-white text-center py-2">
      <div className="flex items-center justify-center space-x-2 font-semibold">
        <FiBell className="text-red-300 animate-bounce" />
        {/* <span>
          Live Updates (லேட்டஸ்ட் தகவல்கள்) <span className="text-red-400">NEW</span>
        </span> */}
        <Link
          to={ Jobs }
          className="text-gray-600 hover:text-green-600"
        >
          Job Updates
        </Link>

        {/* <a href=""></a> */}
      </div>
    </div>
  );
}
