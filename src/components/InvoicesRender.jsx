import useStore from "../helpers/store";
import empty from "./../assets/illustration-empty.svg";
import Invoice from "./Invoice";
import { useState } from "react";
const InvoicesRender = () => {
  const { invoicesExists, invoices, filter } = useStore();
  const [width, setWidth] = useState(null);
  const fhalfhal = [...filter.values()].every(
    (value) => value === [...filter.values()][0]
  );

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  return (
    <div id="invoices" className="flex flex-col gap-y-2 justify-center flex-grow">
      {(!invoicesExists() && (
        <div
          id="empty-invoices"
          className="flex flex-col flex-grow w-[206px] sm:w-[241px] text-center gap-y-14 self-center"
        >
          <img src={empty} alt="there is no invoices yet" />

          <div id="texts" className="flex flex-col gap-y-6">
            <h2 className="font-spartan font-bold text-xl sm:text-2xl dark:text-white">
              There is nothing here
            </h2>
            <p className="dark:text-5 font-spartan text-md self-center">
              Create an invoice by clicking the
              <strong>{width > 640 ? " New Invoice" : "New"}</strong> button and
              get started.
            </p>
          </div>
        </div>
      )) || (
        <div
          id="problematico"
          className="flex flex-col h-[550px] gap-y-4 overflow-y-scroll scrollbar-none "
        >
          {invoices.map(
            (invoice, index) =>
              (filter.get(invoice.status) || fhalfhal) && (
                <Invoice key={index} invoice={invoice} />
              )
          )}
        </div>
      )}
    </div>
  );
};

export default InvoicesRender;
