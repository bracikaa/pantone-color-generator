import { pantoneColors } from "../config/pantone-colors";
import React, { useState } from "react";
import ActionButtons from "./ActionButtons";
import ColorLabels from "./ColorLabels";
import html2canvas from "html2canvas";

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

  const generateGradientHandler = () => {
    const rootElement = document.getElementById("root");

    if (rootElement) {
      rootElement.style.backgroundImage = `linear-gradient(to bottom right, ${colorsSelected[0]}, ${colorsSelected[1]})`;
    }
  };

  const takeScreenshotHandler = () => {
    const rootElement = document.querySelector("#root");
    const buttonsWrapper: HTMLElement | null =
      rootElement?.querySelector(".selector-buttons-wrapper") || null;
    if (rootElement && buttonsWrapper) {
      buttonsWrapper.style.visibility = "hidden";
      html2canvas(rootElement as HTMLElement).then((canvas) => {
        saveAs(
          canvas.toDataURL(),
          `${colorsSelected[0]}-${colorsSelected[1]}.png`
        );
        buttonsWrapper.style.visibility = "visible";
      });
    }
  };

  const saveAs = (uri: string, filename: string) => {
    var link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = uri;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(uri);
    }
  };

  const clearHandler = () => {
    setColorsSelected([]);
  };

  return (
    <>
      <div className="w-[800px] bg-white h-[800px] fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] modal flex content-center flex-col z-index-2 overflow-auto no-scrollbar border rounded-md shadow-md">
        <div className="header w-[100%] block min-h-[60px] fixed z-10 bg-white">
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
                className="relative pantone-color-box p-1 m-1 rounded-lg h-[100px] w-[100px] content-center cursor-pointer"
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
                <ColorLabels color={color}></ColorLabels>
              </div>
            );
          })}
        </div>
      </div>
      <div className="fixed bottom-[100px] left-[50%] translate-x-[-50%]">
        {colorsSelected.length === 2 && (
          <ActionButtons
            generateGradient={generateGradientHandler}
            takeScreenshot={takeScreenshotHandler}
            clear={clearHandler}
          />
        )}
      </div>
    </>
  );
};

export default ModalContent;
