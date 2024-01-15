import { IoCreateOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { MdOutlineScreenshotMonitor } from "react-icons/md";

const ActionButtons = ({
  generateGradient,
  clear,
  takeScreenshot,
}: {
  generateGradient: () => void;
  takeScreenshot: () => void;
  clear: () => void;
}) => {
  return (
    <div className="flex w-[200px] justify-around">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-[50px] align-center"
        onClick={() => generateGradient()}
      >
        <IoCreateOutline className="w-[20px] h-[20px]" />
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-[50px] align-center"
        onClick={() => takeScreenshot()}
      >
        <MdOutlineScreenshotMonitor className="w-[20px] h-[20px]"/>
      </button>
      <button
        className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-[50px] align-center"
        onClick={() => clear()}
      >
        <MdDelete className="w-[20px] h-[20px]"/>
      </button>
    </div>
  );
};

export default ActionButtons;
