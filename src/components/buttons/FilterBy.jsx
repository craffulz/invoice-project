import arrowDown from "../../assets/icon-arrow-down.svg";
import check from "../../assets/icon-check.svg";
import { useState } from "react";
import { motion } from "motion/react";
import useStore from "../../helpers/store";
const FilterBy = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const { filter, toggleFilter } = useStore();
  const [drop, setDrop] = useState(false);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  return (
    <button id="filter" className="flex flex-col">
      <div
        className="flex flex-row items-center gap-3"
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

      <motion.div
        initial={{ opacity: 0, y: -350 }}
        animate={
          drop
            ? {
                opacity: 1,
                y: 0,
              }
            : { opacity: 0, y: -350 }
        }
        id="dropdown"
        className="absolute top-[100px] right-36 flex flex-col
           bg-white dark:bg-4 p-3 w-[192px] gap-y-2 rounded-lg shadow-lg shadow-5 dark:shadow-none 
          transition-colors duration-500"
      >
        {[...filter].map(([value, active], index) => {
          return (
            <ul
              id="option"
              key={index}
              className="group flex flex-row gap-2 items-center"
              onClick={() => {
                toggleFilter(value);
                console.log(typeof value);
              }}
            >
              <div
                id="mini-cage"
                className={`child group-hover:border group-hover:border-1 flex w-4 h-4 rounded-sm ${
                  active ? "bg-1" : "bg-5 dark:bg-3"
                } items-center justify-center`}
              >
                {active && (
                  <img id="check-mark" src={check} alt="selected option" />
                )}
              </div>
              <span
                id="option-name"
                className="flex flex-col font-spartan font-bold text-center items-center dark:text-white"
              >
                {value}
              </span>
            </ul>
          );
        })}
      </motion.div>
    </button>
  );
};

export default FilterBy;
