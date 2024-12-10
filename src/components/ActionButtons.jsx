import Edit from "./buttons/Edit";
import Delete from "./buttons/Delete";
import MarkAsPaid from "./buttons/MarkAsPaid";

const ActionButtons = () => {
  return (
    <div
      id="action-buttons-container"
      className="flex flex-row h-[91px] row-start-4 items-center justify-around px-5 col-span-2 sm:col-span-1 sm:col-start-2 sm:row-start-2 sm:rounded-l-none sm:mr-4
      bg-white dark:bg-3 rounded-xl"
    >
      <Edit />
      <Delete />
      <MarkAsPaid />
    </div>
  );
};

export default ActionButtons;
