const ActionButtons = ({
  generateGradient,
}: {
  generateGradient: () => void;
}) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-[200px]"
      onClick={() => generateGradient()}
    >
      Generate gradient
    </button>
  );
};

export default ActionButtons;
