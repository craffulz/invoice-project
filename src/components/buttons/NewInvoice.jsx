import plus from "./../../assets/icon-plus.svg";

import { useEffect, useState } from "react";
import useStore from "../../helpers/store";
const NewInvoice = () => {
  const { openFormModal } = useStore();
  const [width, setWidth] = useState(null);

  useEffect(() => setWidth(window.innerWidth), []);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  return (
    <button
      className="flex flex-row w-[90px] sm:w-[150px] h-[48px] rounded-full bg-1 hover:bg-2 p-2 items-center"
      onClick={() => {openFormModal("new")}}
    >
      <div id="sum" className="flex flex-col w-8 h-8 bg-white rounded-full">
        <img
          src={plus}
          alt="symbol plus"
          className="h-[10px] w-[10px] m-auto"
        />
      </div>
      <div
        id="text"
        className=" flex flex-row font-spartan font-bold text-white text-sm leading-[10px] tracking-[-0.25px] text-center items-center justify-center mx-auto"
      >
        {width > 640 ? "New Invoice" : "New"}
      </div>
    </button>
  );
};

export default NewInvoice;
