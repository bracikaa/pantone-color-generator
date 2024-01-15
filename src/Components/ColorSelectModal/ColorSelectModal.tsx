import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "../ModalContent";
import React from "react";
import CentralBoxes from "../CentralBoxes";
import { FaBookOpen } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { clearColors } from "../../features/colorsSlice";

const ColorSelectModal: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const clearHandler = () => {
    dispatch(clearColors());
  };
  return (
    <>
      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <CentralBoxes />
      </div>
      <div className="selector-buttons-wrapper">
        <div className="flex w-[150px] justify-around absolute bottom-[50px] right-[50px]">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => setShowModal(true)}
          >
            <FaBookOpen className="w-[20px] h-[20px]" />
          </button>
          <button
            className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => clearHandler()}
          >
            <MdDelete className="w-[20px] h-[20px]" />
          </button>
        </div>
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
