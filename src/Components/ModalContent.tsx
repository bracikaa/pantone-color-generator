import { pantoneColors } from "../config/pantone-colors";
import React, { useState } from "react";

const ModalContent: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const pantoneObjectColors = pantoneColors.names.map((name, index) => ({
    colorName: name,
    value: pantoneColors.values[index],
  }));

  const [colorsSelected, setColorsSelected] = useState<string[]>([]);
  const setColor = (color: string) => {
    const colors = [...colorsSelected];
    const colorIndexIfExisting = colors.indexOf(color);

    if (colorIndexIfExisting > -1) {
      colors.splice(colorIndexIfExisting, 1);
      setColorsSelected(colors);
      return;
    }

    if (colors.length < 2) {
      colors.push(color);
      setColorsSelected(colors);
    }
  };

  return (
    <div className="w-[800px] h-[800px] fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] modal flex content-center flex-col z-index-2 overflow-auto no-scrollbar border rounded-md shadow-md">
      <div className="header w-100 block min-h-[60px]">
        <button
          onClick={onClose}
          className="close absolute top-[10px] right-[10px] text-5xl"
        >
          &times;
        </button>
      </div>
      <div className="flex justify-around flex-wrap">
        {pantoneObjectColors.map((color) => {
          return (
            <div
              onClick={() => setColor(color.value)}
              className="relative pantone-color-box p-1 m-1 rounded-lg h-[120px] w-[120px] content-center cursor-pointer"
              style={{
                backgroundColor: color.value,
              }}
              key={color.colorName}
            >
              {colorsSelected.includes(color.value) ? (
                <div className="w-[30px] h-[30px] top-[-6px] left-[-6px] text-center rounded-full bg-amber-300 absolute">
                  {colorsSelected.indexOf(color.value) + 1}
                </div>
              ) : null}
              <div className="text-[12px]">
                {color.colorName
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </div>
              <div className="text-[14px]">{color.value.toUpperCase()}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ModalContent;
