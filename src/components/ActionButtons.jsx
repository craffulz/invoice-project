import Edit from "./buttons/Edit";
import Delete from "./buttons/Delete";
import MarkAsPaid from "./buttons/MarkAsPaid";

const ActionButtons = () => {
  return (
    <div
      id="action-buttons-container"
      className="flex flex-row h-[91px] row-start-4 items-center justify-center gap-3 sm:justify-around sm:gap-0"
    >
      <Edit />
      <Delete />
      <MarkAsPaid />
    </div>
  );
};

export default ActionButtons;
