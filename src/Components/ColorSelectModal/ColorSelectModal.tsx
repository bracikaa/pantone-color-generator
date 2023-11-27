import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "../ModalContent";
import React from "react";

const ColorSelectModal: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full absolute top-0 left-[50%]"
        onClick={() => setShowModal(true)}
      >
        Open pantone selector
      </button>
      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
};

export default ColorSelectModal;
