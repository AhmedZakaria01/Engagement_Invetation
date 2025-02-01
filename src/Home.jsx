import React, { useEffect, useState } from "react";
import "./Home.css"; // Your styles
import OpenGoogleMaps from "./components/Location";
import FireworksComponent from "./components/FireworksComponent";
import FormModal from "./components/FormModal";
import { Toaster } from "react-hot-toast";

function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true); // Open the modal
  const handleCloseModal = () => setShowModal(false); // Close the modal

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);

    return () => {
      clearTimeout(() => {
        setShowModal(false);
      });
    };
  }, []);

  return (
    <div className="header">
      <Toaster position="top-center" reverseOrder={false} />
      <OpenGoogleMaps />
      <FireworksComponent />
      {/* <button
        onClick={handleOpenModal}
        className="fixed top-12 left z-10 px-3 py-1 text-sm text-white rounded-r-lg shadow-lg hover:opacity-90 transition-all flex items-center gap-2 bg-gradient-to-r from-[#7c6659] to-[#b55858]"
      >
        Leave message 🎉✨
      </button> */}

      {/* Show modal if showModal is true */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-30">
          <FormModal onClose={handleCloseModal} />
        </div>
      )}
    </div>
  );
}
export default Home;
