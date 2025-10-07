// src/components/DirectoryCard.jsx
import { FiPhone, FiMapPin, FiGlobe, FiFacebook, FiTwitter, FiMail } from "react-icons/fi";
// import img from './../assets/Schools-Images/grm.jpg'

export default function DirectoryCard({ item }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5 flex flex-col space-y-3">

      {item.image && (
        // <p className="text-sm text-gray-600 flex items-center space-x-2">
        //   <FiMapPin className="text-gray-500" /> <span>{item.address}</span>
        // </p>
        // <img src={item.image} alt=""/>
        <div style={{ background: `url(${item.image}) no-repeat 50% 60%`, width: '100%', height: '300px'}}></div>
      )}


      {/* <div style={{ backgroundImage: `url('${img}')`, width: '100px', height: '100px' }}></div> */}

      {/* Name */}
      <h3 className="text-lg font-bold text-green-700">{item.name}</h3>

      {/* Address */}
      {item.address && (
        <p className="text-sm text-gray-600 flex items-center space-x-2">
          <FiMapPin className="text-gray-500" /> <span>{item.address}</span>
        </p>
      )}

      {/* Contact */}
      {item.phone && (
        <p className="text-sm text-gray-600 flex items-center space-x-2">
          <FiPhone className="text-gray-500" /> <span>{item.phone}</span>
        </p>
      )}

      {/* Email */}
      {item.email && (
        <p className="text-sm text-gray-600 flex items-center space-x-2">
          <FiMail className="text-gray-500" /> <span>{item.email}</span>
        </p>
      )}

      {/* Social Links */}
      {/* <div className="flex space-x-4 mt-2"> */}
      {item.web && (
        <p className="text-sm text-gray-600 flex items-center space-x-2">
          <a
            href={item.web}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <FiGlobe className="text-gray-500 mr-2" />
            <span>{item.web.replace(/^https?:\/\//, "")}</span>
          </a>
        </p>
        )}

        {/* {item.web && (
        <p className="flex items-center space-x-2 text-sm">
          <a
            href={item.web}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <FiGlobe className="mr-1" />
            <span>{item.web.replace(/^https?:\/\//, "")}</span>
          </a>
        </p>
        )} */}

        {/* {item.facebook && (
          <a
            href={item.facebook}
            target="_blank"
            className="text-blue-500 hover:text-blue-700"
          >
            <FiFacebook />
          </a>
        )}
        {item.twitter && (
          <a
            href={item.twitter}
            target="_blank"
            className="text-sky-500 hover:text-sky-700"
          >
            <FiTwitter />
          </a>
        )} */}
      {/* </div> */}
    </div>
  );
}
