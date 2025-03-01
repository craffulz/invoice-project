import useStore from "../../helpers/store";
import Form from "../form/Form";
import arrowLeft from "../../assets/icon-arrow-left.svg";

const AddInvoiceModal = () => {
  const {
    openFormModal,
    actionFormModal,
    viewInvoice: { id },
  } = useStore();

  return (
    <div
      id="newInvoiceModal"
      className="flex flex-col 
      gap-y-6 w-full h-screen 
      sm:rounded-r-2xl sm:w-[616px] px-8 py-8 

      overflow-y-scroll scrollbar-none
      
       bg-white dark:bg-12 font-spartan "
    >
      <div
        id="go-back"
        className="flex flex-row h-[23px] gap-5 items-center cursor-pointer col-span-2 row-start-1"
        onClick={() => openFormModal(false)}
      >
        <img
          src={arrowLeft}
          alt="go back arrow"
          className="flex h-2 self-center"
        />
        <p className="flex font-spartan font-bold dark:text-white">Go back</p>
      </div>

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
