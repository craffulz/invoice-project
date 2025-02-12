import FilterBy from "./buttons/FilterBy";

import NewInvoice from "./buttons/NewInvoice";
import useStore from "../helpers/store";
/**
 *
 * @returns returns a header with options to filter the invoices and add a new invoice
 */
const Header = () => {
  const { invoices } = useStore();

  return (
    <div
      id="header-container"
      className="flex flex-row flex-shrink-0 justify-between items-center
                transition-colors duration-500 overflow-hidden"
    >
      <div id="title-counter" className="h-auto flex flex-col overflow-hidden">
        <h2 className="font-spartan font-extrabold tracking-[-1px] text-8 dark:text-white text-2xl sm:text-4xl lg:text-6xl">
          Invoices
        </h2>
        <span className="font-spartan font-semibold text-6 tracking-[-0.6px] text-[13px] dark:text-5">
          {invoices.length > 0
            ? `There are ${invoices.length} total invoices`
            : "No invoices"}
        </span>
      </div>

      <div id="filter-newInvoice" className="flex flex-row items-center gap-6">
        <FilterBy />
        <NewInvoice />
      </div>
    </div>
  );
};

export default Header;
