/* eslint-disable react/prop-types */

const Status = ({ status }) => {
  return (
    <div
      id="stateIndicator"
      className={`w-[104px] h-10 flex flex-row items-center justify-center text-center rounded-md gap-2 ${
        status === "Pending"
          ? "bg-pendingBG dark:bg-pending dark:bg-opacity-10 text-pending"
          : status === "Draft"
          ? "bg-draftBG text-draft"
          : status === "Paid"
          ? "bg-paidBG dark:bg-paid dark:bg-opacity-15 text-paid"
          : ""
      }`}
    >
      <div
        id="dot"
        className={`w-2 h-2 rounded-full ${
          status === "Pending"
            ? "bg-pending"
            : status === "Draft"
            ? "bg-draft"
            : status === "Paid"
            ? "bg-paid"
            : ""
        }`}
      ></div>
      <span className="font-spartan font-bold">
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    </div>
  );
};

export default Status;
