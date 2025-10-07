// src/components/LiveUpdates.jsx
import { FiBell } from "react-icons/fi";

export default function LiveUpdates() {
  return (
    <div className="bg-green-700 text-white text-center py-2">
      <div className="flex items-center justify-center space-x-2 font-semibold">
        <FiBell className="text-red-300 animate-bounce" />
        <span>
          Live Updates (லேட்டஸ்ட் தகவல்கள்) <span className="text-red-400">NEW</span>
        </span>
      </div>
    </div>
  );
}
