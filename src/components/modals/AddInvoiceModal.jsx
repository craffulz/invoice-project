import useStore from "../../helpers/store";
import Form from "../form/Form";

const AddInvoiceModal = () => {
  const {
    actionFormModal,
    viewInvoice: { id },
  } = useStore();

  return (
    <div
      id="newInvoiceModal"
      className="flex flex-col gap-y-6 w-full h-screen px-8 py-8 
      overflow-y-scroll scrollbar-none
      sm:rounded-r-2xl sm:w-[616px]
       bg-white dark:bg-12 font-spartan "
    >
      <h1 className="font-bold dark:text-white text-xl">
        {actionFormModal === "edit" ? (
          <>
            Edit <span className="text-6">#</span>
            {id}
          </>
        ) : (
          "New Invoice"
        )}
      </h1>
      <Form />
    </div>
  );
};

export default AddInvoiceModal;
