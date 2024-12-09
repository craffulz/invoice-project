import { useFormContext } from "react-hook-form";

const BillFrom = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div id="bill-from">
      <h2 className="font-bold text-sm text-1 mb-3">Bill From</h2>
      <div
        id="adressFrom"
        className="grid grid-cols-6 grid-rows-2 gap-y-4 gap-5"
      >
        <label
          id="streetAdress"
          className="text-sm text-7 font-semibold dark:text-5 col-span-6"
        >
          Street Adress
          <input
            {...register("from.streetAdress")}
            className="w-full border dark:border-0 rounded-md h-[48px] text-black dark:text-white dark:bg-4
                  bg-white px-5"
          />
          {errors.from?.streetAdress && (
            <small className="text-red-500 font-normal text-sm">
              {errors.from.streetAdress.message}
            </small>
          )}
        </label>

        <label
          id="city"
          className="text-sm text-7 font-semibold dark:text-5 col-span-3  sm:col-span-2"
        >
          City
          <input
            {...register("from.city")}
            className="w-full border dark:border-0 rounded-md h-[48px] text-black dark:text-white dark:bg-4
                  bg-white px-5"
          />
          {errors.from?.city && (
            <small className="text-red-500 font-normal text-sm">
              {errors.from.city.message}
            </small>
          )}
        </label>
        <label
          id="postCode"
          className="text-sm text-7 font-semibold dark:text-5 col-span-3  sm:col-span-2"
        >
          Post Code
          <input
            {...register("from.postCode")}
            className="w-full border dark:border-0 rounded-md h-[48px] text-black dark:text-white dark:bg-4
                  bg-white px-5"
          />
          {errors.from?.postCode && (
            <small className="text-red-500 font-normal text-sm">
              {errors.from.postCode.message}
            </small>
          )}
        </label>
        <label
          id="country"
          className="text-sm text-7 font-semibold dark:text-5 col-span-6 sm:col-span-2"
        >
          Country
          <input
            {...register("from.country")}
            className="w-full border dark:border-0 rounded-md h-[48px] text-black dark:text-white dark:bg-4
                  bg-white px-5"
          />
          {errors.from?.country && (
            <small className="text-red-500 font-normal text-sm">
              {errors.from.country.message}
            </small>
          )}
        </label>
      </div>
    </div>
  );
};

export default BillFrom;
