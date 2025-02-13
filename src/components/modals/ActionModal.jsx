/* eslint-disable react/prop-types */
import useStore from "../../helpers/store";

const ActionModal = ({ optionSelected }) => {
  const {
    openModal,

    deleteInvoice,

    changeStatus,

    viewInvoice: invoice,
    invoicePressed,
  } = useStore();

  const option = (option) => {
    switch (option) {
      case "mark as PAID":
        changeStatus(invoice.id, "Paid");
        openModal();
        break;
      case "DELETE":
        deleteInvoice(invoice.id);
        openModal();
        invoicePressed(false);
        break;
      case "draft":
        break;
      case "edit":
        break;
    }
  };

  return (
    <div
      id="deleteModal"
      className="absolute h-full w-full flex flex-col items-center justify-center bg-4 bg-opacity-15 font-spartan text-xl font-semibold"
    >
      <div
        id="modalContainer"
        className="w-[300px] h-[200px] flex flex-col items-center justify-center bg-11 p-8 gap-y-8 rounded-xl"
      >
        <div id="messageModal" className="text-center">
          {optionSelected === "draft" ? (
            <p>It is not possible to &apos;mark as paid&apos; a draft !</p>
          ) : (
            <p>Are you sure you want to {optionSelected} this invoice?</p>
          )}
        </div>

        {optionSelected === "draft" ? (
          <button
            onClick={() => openModal(false)}
            className="font-bold text-white w-16 h-12 bg-9 rounded-xl hover:bg-10"
          >
            Close
          </button>
        ) : (
          <div id="buttons" className="flex flex-row gap-12">
            <button
              onClick={() => {
                option(optionSelected);
                openModal(false);
              }}
              className="font-bold text-white w-16 h-12 bg-9 rounded-xl hover:bg-10"
            >
              Yes
            </button>
            <button
              onClick={() => openModal(false)}
              className="font-semibold text-white w-16 h-12 bg-7 rounded-xl"
            >
              No
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActionModal;
