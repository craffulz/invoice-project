/* eslint-disable react/prop-types */
import useStore from "../helpers/store";

import arrow from "../assets/icon-arrow-right.svg";
import Status from "./buttons/Status";

const Invoice = ({ invoice }) => {
  const { invoicePressed } = useStore();

  const dateStr = invoice.paymentDue;
  const date = new Date(dateStr);
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div
      id="invoice-container"
      className="grid grid-cols-2 grid-rows-4 sm:flex sm:flex-row flex-shrink-0 font-spartan h-[134px] sm:h-[72px] rounded-md 
      shadow-md bg-white dark:bg-3 border border-transparent hover:border-1
      items-center justify-between px-7 transition-colors duration-300 cursor-pointer"
      onClick={() => {
        invoicePressed(invoice);
      }}
    >
      <div
        id="id"
        className="w-[65px] font-bold dark:text-white col-start-1 row-start-1 row-span-2"
      >
        <span>
          <span className="text-7 font-semibold">#</span>
          {invoice.id}
        </span>
      </div>

      <div
        id="date"
        className="text-7 w-[95px] font-semibold col-start-1 row-start-2 row-span-2"
      >
        <span>{formattedDate}</span>
      </div>

      <div
        id="fullName"
        className="flex text-7 dark:text-white w-[130px] sm:justify-start font-semibold col-start-2 row-start-1 row-span-2 justify-self-end justify-end text-right"
      >
        <p>{invoice.to.name}</p>
      </div>

      <div
        id="price"
        className="w-[90px] font-bold sm:text-center dark:text-white col-start-1 row-start-3 row-span-2"
      >
        <span>&pound; {invoice.total}</span>
      </div>

      <div
        id="status"
        className="flex col-start-2 row-start-2 row-span-3 justify-self-end"
      >
        <Status status={invoice.status} />
      </div>

      <button className="hidden lg:flex">
        <img src={arrow} alt="arrow link to access to the invoice view" />
      </button>
    </div>
  );
};

export default Invoice;
