import { selectColors } from "../features/colorsSlice";
import { useSelector } from "react-redux";

const CentralBoxes = () => {
  const colors = useSelector(selectColors);
  return (
    colors.length === 2 && (
      <svg
        width="57.761536mm"
        height="60.041447mm"
        viewBox="0 0 57.761536 60.041447"
        version="1.1"
        id="svg5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs id="defs2">
          <linearGradient id="linearGradient5648">
            <stop
              style={{ stopColor: colors[0], stopOpacity: 1 }}
              offset="0"
              id="stop5644"
            />
            <stop
              style={{ stopColor: colors[1], stopOpacity: 1 }}
              offset="1"
              id="stop5646"
            />
          </linearGradient>
          <linearGradient
            href="#linearGradient5648"
            id="linearGradient5650"
            x1="39.584274"
            y1="45.427063"
            x2="93.206795"
            y2="101.19078"
            gradientUnits="userSpaceOnUse"
          />
          <linearGradient
            href="#linearGradient5648"
            id="linearGradient7956"
            gradientUnits="userSpaceOnUse"
            x1="39.584274"
            y1="45.427063"
            x2="93.206795"
            y2="101.19078"
          />
          <linearGradient
            href="#linearGradient5648"
            id="linearGradient7958"
            gradientUnits="userSpaceOnUse"
            x1="39.584274"
            y1="45.427063"
            x2="93.206795"
            y2="101.19078"
          />
        </defs>
        <g
          id="layer1"
          style={{ fill: `url('#linearGradient5650)`, fillOpacity: 1 }}
          transform="translate(-37.492005,-43.386019)"
        >
          <rect
            style={{
              fill: `url(#linearGradient7956)`,
              fillOpacity: 1,
              stroke: "#ffffff",
              strokeWidth: 1.32292,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="rect111"
            width="39.6875"
            height="39.6875"
            x="38.153465"
            y="44.047478"
          />
          <rect
            style={{
              mixBlendMode: "darken",
              fill: `url(#linearGradient7958)`,
              fillOpacity: 1,
              stroke: "#ffffff",
              strokeWidth: 1.32292,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="rect111-3"
            width="39.6875"
            height="39.6875"
            x="54.904587"
            y="63.078503"
          />
        </g>
      </svg>
    )
  );
};

export default CentralBoxes;
