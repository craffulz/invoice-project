import { useFormContext } from "react-hook-form";

const BillTo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div id="bill-to">
      <h2 className="font-bold text-sm text-1 mb-3">Bill To</h2>
      <div id="adressFrom" className="grid grid-cols-6 gap-y-4 gap-5">
        <label
          id="streetAdress"
          className="text-sm text-7 font-semibold dark:text-5 col-span-6"
        >
          Client&apos;s Name
          <input
            {...register("to.name")}
            className="w-full border dark:border-0 rounded-md h-[48px] text-black dark:text-white dark:bg-4
                  bg-white px-5"
          />
          {errors.to?.name && (
            <small className="text-red-500 font-normal text-sm">
              {errors.to.name.message}
            </small>
          )}
        </label>
        <label
          id="streetAdress"
          className="text-sm text-7 font-semibold dark:text-5 col-span-6"
        >
          Client&apos;s Email
          <input
            {...register("to.email")}
            className="w-full border dark:border-0 rounded-md h-[48px] text-black dark:text-white dark:bg-4
                  bg-white px-5"
          />
          {errors.to?.email && (
            <small className="text-red-500 font-normal text-sm">
              {errors.to.email.message}
            </small>
          )}
        </label>
        <label
          id="streetAdress"
          className="text-sm text-7 font-semibold dark:text-5 col-span-6"
        >
          Street Adress
          <input
            {...register("to.streetAdress")}
            className="w-full border dark:border-0 rounded-md h-[48px] text-black dark:text-white dark:bg-4
                  bg-white px-5"
          />
          {errors.to?.streetAdress && (
            <small className="text-red-500 font-normal text-sm">
              {errors.to.streetAdress.message}
            </small>
          )}
        </label>
        <label
          id="city"
          className="text-sm text-7 font-semibold dark:text-5 col-span-3  sm:col-span-2"
        >
          City
          <input
            {...register("to.city")}
            className="w-full border dark:border-0 rounded-md h-[48px] text-black dark:text-white dark:bg-4
                  bg-white px-5"
          />
          {errors.to?.city && (
            <small className="text-red-500 font-normal text-sm">
              {errors.to.city.message}
            </small>
          )}
        </label>
        <label
          id="postCode"
          className="text-sm text-7 font-semibold dark:text-5 col-span-3  sm:col-span-2"
        >
          Post Code
          <input
            {...register('to.postCode')}
            className="w-full border dark:border-0 rounded-md h-[48px] text-black dark:text-white dark:bg-4
                  bg-white px-5"
          />
          {errors.to?.postCode && (
            <small className="text-red-500 font-normal text-sm">
              {errors.to.postCode.message}
            </small>
          )}
        </label>
        <label
          id="country"
          className="text-sm text-7 font-semibold dark:text-5 col-span-6 sm:col-span-2"
        >
          Country
          <input
            {...register('to.country')}
            className="w-full border dark:border-0 rounded-md h-[48px] text-black dark:text-white dark:bg-4
                  bg-white px-5"
          />
          {errors.to?.country && (
            <small className="text-red-500 font-normal text-sm">
              {errors.to.country.message}
            </small>
          )}
        </label>
      </div>
    </div>
  );
};

export default BillTo;
