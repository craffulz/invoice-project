import Form from "../form/Form";

const AddInvoiceModal = () => {
  return (
    <div
      id="newInvoiceModal"
      className="flex flex-col gap-y-6 h-screen bg-white dark:bg-12 font-spartan px-8 py-8 sm:rounded-r-2xl sm:w-[616px] w-screen overflow-y-scroll scrollbar-none"
    >
      <h1 className="font-bold dark:text-white text-xl">New Invoice</h1>
      <Form />
    </div>
  );
};

export default AddInvoiceModal;
