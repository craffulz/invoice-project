import arrowDown from "./../../assets/icon-arrow-down.svg";
import check from "./../../assets/icon-check.svg";
import { useState } from "react";
import { motion } from "motion/react";
const FilterBy = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [drop, setDrop] = useState(false);
  const [options, setOptions] = useState([
    { state: "Draft", active: false },
    { state: "Pending", active: false },
    { state: "Paid", active: false },
  ]);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  return (
    <button id="filter" className="flex flex-col">
      <div
        className=" flex flex-row items-center gap-3"
        onClick={() => {
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
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          id="dropdown"
          className="absolute top-24 right-[690px] flex flex-col
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
                  setOptions((prevOptions) =>
                    prevOptions.map(({ state, active }) =>
                      state === option.state
                        ? {
                            state: state,
                            active: !active,
                          }
                        : { state: state, active: active }
                    )
                  );
                }}
              >
                <div
                  id="mini-cage"
                  className={`child group-hover:border group-hover:border-1 flex w-4 h-4 rounded-sm ${
                    option.active ? "bg-1" : "bg-5 dark:bg-3"
                  } items-center justify-center`}
                >
                  {option.active && (
                    <img id="check-mark" src={check} alt="selected option" />
                  )}
                </div>
                <span
                  id="option-name"
                  className="flex flex-col font-spartan font-bold text-center items-center dark:text-white"
                >
                  {option.state}
                </span>
              </ul>
            );
          })}
        </motion.div>
      )}
    </button>
  );
};

export default FilterBy;
