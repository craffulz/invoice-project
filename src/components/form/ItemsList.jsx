import ListItem from "./ListItem";
import AddNewItem from "./../buttons/AddNewItem";
import { useFieldArray, useFormContext } from "react-hook-form";

const ItemsList = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "itemList",
  });

  return (
    <div
      id="items-list"
      className="flex flex-col mt-4"
    >
      <h2 className="font-bold text-itemList mb-3">Item List</h2>
      {fields.map((field, index) => {
        return <ListItem index={index} key={field.id} remove={remove} />;
      })}

      <AddNewItem append={append} />
    </div>
  );
};

export default ItemsList;
