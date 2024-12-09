/* eslint-disable react/prop-types */

const Status = ({ status }) => {
  return (
    <div
      id="stateIndicator"
      className={`w-[104px] h-10 flex flex-row items-center justify-center text-center rounded-md gap-2 ${
        status === "pending"
          ? "bg-pendingBG dark:bg-pending dark:bg-opacity-10 text-pending"
          : status === "draft"
          ? "bg-draftBG text-draft"
          : status === "paid"
          ? "bg-paidBG dark:bg-paid dark:bg-opacity-15 text-paid"
          : ""
      }`}
    >
      <div
        id="dot"
        className={`w-2 h-2 rounded-full ${
          status === "pending"
            ? "bg-pending"
            : status === "draft"
            ? "bg-draft"
            : status === "paid"
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
