const ActionButtons = ({
  generateGradient,
  clear,
}: {
  generateGradient: () => void;
  clear: () => void;
}) => {
  return (
    <div className="flex w-[450px] justify-around">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-[200px]"
        onClick={() => generateGradient()}
      >
        Generate gradient
      </button>
      <button
        className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-[200px]"
        onClick={() => clear()}
      >
        Clear
      </button>
    </div>
  );
};

export default ActionButtons;
