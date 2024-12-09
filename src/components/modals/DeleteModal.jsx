import useStore from "../../helpers/store";

const DeleteModal = () => {
  const { deleteClicked, deleteInvoice, viewInvoice, invoicePressed } =
    useStore();

  const optionalModal = (option) => {
    switch (option) {
      case "markAsPaid":
        break;
      case "delete":
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
          <p>Are you sure you want to delete this invoice?</p>
        </div>
        <div id="buttons" className="flex flex-row gap-12">
          <button
            onClick={() => {
              deleteInvoice(viewInvoice.id);
              deleteClicked();
              invoicePressed();
            }}
            className="font-bold text-white w-16 h-12 bg-9 rounded-xl"
          >
            Yes
          </button>
          <button
            onClick={deleteClicked}
            className="font-semibold text-white w-16 h-12 bg-7 rounded-xl"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
