import arrowDown from "./../../assets/icon-arrow-down.svg";
import { useState } from "react";
import check from "./../../assets/icon-check.svg";

const FilterBy = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [drop, setDrop] = useState(false);
  const [selected, setSelected] = useState(false);
  const [indexer, setIndexer] = useState([]);
  const options = ["Draft", "Pending", "Paid"];

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  return (
    <button id="filter" className="flex flex-col">
      <div
        className="flex flex-row items-center gap-3"
        onClick={() => {
          console.log("Clicked");
          setDrop((prev) => !prev);
        }}
      >
        <span className="font-spartan font-bold dark:text-white">
          {width > 768 ? "Filter by status" : "Filter"}
        </span>
        <img
          src={arrowDown}
          alt="arrow of filter selection"
          className={`${
            drop ? "rotate-[180deg]" : ""
          } transition-transform duration-300 h-2`}
        />
      </div>

      {drop && (
        <div
          id="dropdown"
          className="absolute top-[100px] right-8 sm:right-[145px] sm:top-[110px] lg:top-[135px] flex flex-col
           bg-white dark:bg-4 p-3 w-[192px] gap-y-2 rounded-lg shadow-lg shadow-5 dark:shadow-none 
          transition-colors duration-500"
        >
          {options.map((option, index) => {
            return (
              <ul
                id="option"
                key={index}
                className="group flex flex-row gap-2 items-center"
                onClick={() => {
                  setIndexer(index);
                  setSelected(true);
                }}
              >
                <div
                  id="mini-cage"
                  className={`child group-hover:border group-hover:border-1 flex w-4 h-4 rounded-sm ${
                    selected && indexer === index ? "bg-1" : "bg-5 dark:bg-3"
                  } items-center justify-center`}
                >
                  {selected && indexer === index && (
                    <img id="check-mark" src={check} alt="selected option" />
                  )}
                </div>
                <span
                  id="option-name"
                  className="flex flex-col font-spartan font-bold text-center items-center dark:text-white"
                >
                  {option}
                </span>
              </ul>
            );
          })}
        </div>
      )}
    </button>
  );
};

export default FilterBy;
