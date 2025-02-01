/* eslint-disable react/prop-types */

const AddNewItem = ({ append }) => {
  return (
    <button
      type="button"
      id="AddNewItem"
      className="flex w-full h-[48px] bg-11 rounded-full items-center justify-center 
      font-spartan font-bold text-7 text-sm leading-[10px] tracking-[-0.25px]
      dark:bg-4 dark:hover:bg-5 hover:bg-5 cursor-pointer"
      onClick={() => {
        console.log("Se aniade un field");
        append({ name: "", quantity: 1, price: 0 });
      }}
    >
      <span>+ Add New Item</span>
    </button>
  );
};

export default AddNewItem;
