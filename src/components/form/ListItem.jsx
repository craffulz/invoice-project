/* eslint-disable react/prop-types */
import { useFormContext } from "react-hook-form";

const ListItem = ({ index }) => {
  const {
    watch,
    register,
    formState: { errors },
  } = useFormContext();

  const quantity = parseFloat(watch(`itemList.${index}.quantity`)) || 0;
  const price = parseFloat(watch(`itemList.${index}.price`)) || 0;
  const total = quantity * price;

  return (
    <>
      <label
        id="item-name"
        className="text-sm text-7 font-semibold dark:text-5 col-span-10 sm:col-span-4"
      >
        Item Name
        <input
          {...register(`itemList.${index}.itemName`)}
          className="w-full border dark:border-0 rounded-md h-[48px] text-black dark:text-white dark:bg-4
                 bg-white px-5"
        />
        {errors.itemList?.[index]?.itemName && (
          <small className="text-red-500 font-normal text-sm">
            {errors.itemList[index].itemName.message}
          </small>
        )}
      </label>

      <label
        id="item-quantity"
        className="text-sm text-7 font-semibold dark:text-5 col-span-2 sm:col-span-1"
      >
        Qty.
        <input
          {...register(`itemList.${index}.quantity`)}
          className="w-full border dark:border-0 rounded-md h-[48px] text-black dark:text-white dark:bg-4
                   bg-white px-5"
        />
        {errors.itemList?.[index]?.quantity && (
          <small className="text-red-500 font-normal text-sm">
            {errors.itemList[index].quantity.message}
          </small>
        )}
      </label>

      <label
        id="item-price"
        className="text-sm text-7 font-semibold dark:text-5 col-span-3 sm:col-span-2"
      >
        Price
        <input
          {...register(`itemList.${index}.price`)}
          className="w-full border dark:border-0 rounded-md h-[48px] text-black dark:text-white dark:bg-4
                   bg-white px-5"
        />
        {errors.itemList?.[index]?.price && (
          <small className="text-red-500 font-normal text-sm">
            {errors.itemList[index].price.message}
          </small>
        )}
      </label>

      <label
        id="item-total"
        className="text-sm text-7 font-semibold dark:text-5 col-span-3 sm:col-span-2"
      >
        Total
        <input
          value={parseFloat(total)}
          disabled
          readOnly
          className="w-full dark:border-0 rounded-md h-[48px] dark:bg-4
                  bg-white px-5"
        />
      </label>
    </>
  );
};

export default ListItem;
