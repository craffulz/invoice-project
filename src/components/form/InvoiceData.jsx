import { useFormContext } from "react-hook-form";

const InvoiceData = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div id="invoice-data">
      <div className="grid grid-cols-6 grid-rows-2 gap-y-4 gap-5">
        <label
          id="invoiceDate"
          className="text-sm text-7 font-semibold dark:text-5 col-span-6 sm:col-span-3"
        >
          Invoice Date
          <input
            type="date"
            {...register("invoiceData.invoiceDate")}
            className="w-full border dark:border-0 rounded-md h-[48px] text-black dark:text-white dark:bg-4
                  bg-white px-5"
          />
          {errors.invoiceData?.invoiceDate && (
            <small className="text-red-500 font-normal text-sm">
              {errors.invoiceData.invoiceDate.message}
            </small>
          )}
        </label>
        <label
          id="paymentTerms"
          className="text-sm text-7 font-semibold dark:text-5 col-span-6 sm:col-span-3"
        >
          Payment Terms
          <select
            {...register("invoiceData.paymentTerms")}
            defaultValue=""
            type="text"
            className="w-full border dark:border-0 rounded-md h-[48px] text-black dark:text-white dark:bg-4
                  bg-white px-5"
          >
            <option value="" disabled hidden>
              Seleccione una opción
            </option>
            <option
              value="1"
              className="p-4 font-spartan font-bold  hover:text-3"
            >
              Net 1 Day
            </option>
            <option
              value="7"
              className="p-4 font-spartan font-bold  hover:text-3"
            >
              Net 7 Days
            </option>
            <option
              value="14"
              className="p-4 font-spartan font-bold  hover:text-3"
            >
              Net 14 Days
            </option>
            <option
              value="30"
              className="p-4 font-spartan font-bold  hover:text-3"
            >
              Net 30 Days
            </option>
          </select>
          {errors.invoiceData?.paymentTerms && (
            <small className="text-red-500 font-normal text-sm">
              {errors.invoiceData.paymentTerms.message}
            </small>
          )}
        </label>
        <label
          id="projectDescription"
          className="text-sm text-7 font-semibold dark:text-5 col-span-6"
        >
          Project Description
          <input
            {...register("invoiceData.projectDescription")}
            type="text"
            className="w-full border dark:border-0 rounded-md h-[48px] text-black dark:text-white dark:bg-4
                  bg-white px-5"
          />
          {errors.invoiceData?.projectDescription && (
            <small className="text-red-500 font-normal text-sm">
              {errors.invoiceData.projectDescription.message}
            </small>
          )}
        </label>
      </div>
    </div>
  );
};

export default InvoiceData;
