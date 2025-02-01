/* eslint-disable react/prop-types */
import { useFormContext } from "react-hook-form";

const ListItem = ({ index, remove }) => {
  const {
    watch,
    register,
    formState: { errors },
  } = useFormContext();

  const quantity = parseFloat(watch(`itemList.${index}.quantity`)) || 0;
  const price = parseFloat(watch(`itemList.${index}.price`)) || 0;
  const total = quantity * price;

  return (
    <div
      id="catastrofe de divisor me cago en su puta madre"
      className="grid grid-cols-10 gap-3 mb-12"
    >
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
      <label className="flex flex-col text-sm font-semibold dark:text-12 text-white col-span-2 sm:col-span-1 justify-center">
        delete
        {/**The div below is to delete an added item */}
        {index > 0 && (
          <div id="button-delete-item" className="flex flex-col">
            <div id="delete" className="flex flex-col items-end">
              <svg
                width="13"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-6 hover:fill-red-500 cursor-pointer"
                onClick={() => {
                  remove(index);
                }}
              >
                <path d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z" />
              </svg>
            </div>
          </div>
        )}
      </label>
    </div>
  );
};

export default ListItem;
