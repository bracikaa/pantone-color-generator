import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "../ModalContent";

export default function ColorSelectModal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Open pantone selector
      </button>
      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}
