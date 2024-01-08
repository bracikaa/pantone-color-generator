import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "../ModalContent";
import React from "react";
import SquareElements from "../SquareElements/SquareElements";

const ColorSelectModal: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <SquareElements />
      <div className="selector-buttons-wrapper">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full absolute bottom-[50px] right-[50px]"
          onClick={() => setShowModal(true)}
        >
          Open pantone selector
        </button>
      </div>
      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
};

export default ColorSelectModal;
