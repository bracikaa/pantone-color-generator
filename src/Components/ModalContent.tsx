import { pantoneColors } from "../config/pantone-colors";
import React from "react";

const ModalContent: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const pantoneObjectColors = pantoneColors.names.map((name, index) => ({
    colorName: name,
    value: pantoneColors.values[index],
  }));
  return (
    <div className="w-[800px] h-[800px] fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] modal flex content-center flex-col z-index-2 overflow-auto no-scrollbar">
      <div className="flex items-center bg-indigo-100 flex-wrap">
        {pantoneObjectColors.map((color) => {
          return (
            <div
              className="pantone-color-box m-1 rounded-lg h-[120px] w-[120px] content-center cursor-pointer"
              style={{ backgroundColor: color.value }}
              key={color.colorName}
            >
              <div>{color.colorName}</div>
              <div>{color.value}</div>
            </div>
          );
        })}
      </div>
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

export default ModalContent;
