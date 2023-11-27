import { pantoneColors } from "../config/pantone-colors";

export default function ModalContent({ onClose }) {
  const pantoneObjectColors = pantoneColors.names.map((name, index) => ({
    colorName: name,
    value: pantoneColors.values[index],
  }));

  console.log(pantoneObjectColors[0]);
  return (
    <div className="modal flex content-center flex-col w-[800px] h-[800px] z-index-2 overflow-auto">
      <div className="flex items-center bg-indigo-100 flex-wrap">
        {pantoneObjectColors.map((color) => {
          return (
            <div
              className="pantone-color-box m-1 rounded-lg h-40 w-[150px] content-center cursor-pointer"
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
}
