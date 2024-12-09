const MarkAsPaid = () => {
  return (
    <button
      id="MarkAsPaid"
      className="flex flex-row w-[149px] sm:w-[131px] h-[48px] rounded-full bg-1 hover:bg-2  p-2 items-center justify-center gap-3"
    >
      <div
        id="text"
        className=" flex flex-row font-spartan font-bold text-white text-sm leading-[10px] tracking-[-0.25px] text-center items-center justify-center"
      >
        Mark as Paid
      </div>
    </button>
  );
};

export default MarkAsPaid;
