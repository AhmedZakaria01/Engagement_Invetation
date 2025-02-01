import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const OpenGoogleMaps = () => {
  const authorized = sessionStorage.getItem("authToken");

  // Replace this with your desired location (address or coordinates)

  // Function to open Google Maps with the specified location

  const navigate = useNavigate();
  const openGoogleMaps = () => {
    // Encode the address to make it URL-safe

    const googleMapsUrl = `https://maps.app.goo.gl/vCita2ihcjAF7dix9`;
    window.open(googleMapsUrl);
    // navigate("/messageViewer");
  };

  return (
    <>
      <button
        onClick={openGoogleMaps}
        className="fixed top-2 text-sm left z-10 px-3 py-1 text-white rounded-r-lg shadow-lg hover:opacity-90 transition-all flex items-center gap-2 bg-gradient-to-r from-[#7c6659] via-[#774242] to-[#b55858]  "
      >
        Location
        <FontAwesomeIcon icon={faLocationDot} className="px-2 text-white" />
      </button>

      <button
        onClick={() => navigate("/private-login")}
        className="fixed top-2 text-sm right-0 z-10 px-3 py-1 text-white rounded-l-lg shadow-lg hover:opacity-90 transition-all flex items-center gap-2 bg-gradient-to-r from-[#7c6659] via-[#774242] to-[#b55858] "
      >
        Login
      </button>
    </>
  );
};

export default OpenGoogleMaps;
