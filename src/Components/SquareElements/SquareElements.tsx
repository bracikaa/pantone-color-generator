const SquareElements = () => {
  return (
    <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-blue-700">
      <div className="relative w-[300px] h-[300px]">
        <div className="rectangle1 absolute left-0 top-0 w-[200px] h-[200px] border-6"></div>
        <div className="rectangle2 absolute bottom-0 right-0 w-[200px] h-[200px] border-6"></div>
      </div>
    </div>
  );
};

export default SquareElements;
