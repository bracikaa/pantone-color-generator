import { useEffect, useState } from "react";

export interface Color {
  colorName: string;
  value: string;
}

const ColorLabels = ({ color }: { color: Color }) => {
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    const textColor = hexToRGB(color.value);
    const textContrast =
      textColor!.red * 0.299 +
      textColor!.green * 0.587 +
      textColor!.blue * 0.114;
    if (textContrast > 186) {
      setBgColor("black");
    } else {
      setBgColor("white");
    }
  }, []);

  function hexToRGB(
    hex: string
  ): { red: number; green: number; blue: number } | null {
    const hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
    const result = hexRegex.exec(hex);

    if (!result) {
      console.error(
        "Invalid hex code. Please provide a valid hexadecimal color code."
      );
      return null;
    }

    // Extract red, green, and blue components
    const red = parseInt(result[1], 16);
    const green = parseInt(result[2], 16);
    const blue = parseInt(result[3], 16);

    return { red, green, blue };
  }

  return (
    <>
      <div className={`text-[11px] text-${bgColor}`}>
        {color.colorName
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")}
      </div>
      <div className={`text-[13px] text-${bgColor}`}>{color.value.toUpperCase()}</div>
    </>
  );
};

export default ColorLabels;
