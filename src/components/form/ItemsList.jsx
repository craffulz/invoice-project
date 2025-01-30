import ListItem from "./ListItem";
import AddNewItem from "./../buttons/AddNewItem";
import { useFieldArray, useFormContext } from "react-hook-form";

const ItemsList = () => {
  const { control } = useFormContext();
  const { fields, remove } = useFieldArray({
    control,
    name: "itemList",
  });

  console.log("fields del renderizador de fields", fields);
  return (
    <div id="items-list" className="flex flex-col mt-4">
      <h2 className="font-bold text-itemList mb-3">Item List</h2>

      {fields.map((field, index) => {
        return (
          <div className="grid grid-cols-10 gap-3 mb-12" key={field.id}>
            <ListItem index={index} />
            <label className="flex flex-col text-sm font-semibold dark:text-12 text-white col-span-2 sm:col-span-1 justify-center">
              delete
              {/**The div below is to delete an added item */}
              {fields.length > 1 && (
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
      })}

      <AddNewItem control={control} />
    </div>
  );
};

export default ItemsList;
