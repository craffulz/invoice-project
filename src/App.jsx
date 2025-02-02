import Navbar from "./components/Navbar";
import Header from "./components/Header";
import InvoicesRender from "./components/InvoicesRender";
import AddInvoiceModal from "./components/modals/AddInvoiceModal";
import InvoiceView from "./components/modals/InvoiceView";
import useStore from "./helpers/store";
import ActionModal from "./components/modals/ActionModal";

function App() {
  const { viewInvoice, modalOption, actionFormModal } = useStore();

  return (
    <div
      id="body"
      className=" 
      flex flex-col lg:flex-row h-screen w-screen overflow-hidden
      bg-11 dark:bg-12 transition-colors duration-300"
    >
      <div id="navbar" className="flex">
        <Navbar />
      </div>
      <div
        id="content"
        className="relative
        flex flex-col flex-grow overflow-y-scroll scrollbar-none"
      >
        <div
          id="header-invoice-container"
          className="
          flex flex-col flex-grow self-center my-12 
          w-[327px] sm:w-[672px] lg:w-[730px]
          gap-y-10"
        >
          <Header />
          <InvoicesRender />
        </div>

        {actionFormModal && (
          <div
            id="newInvoiceModal-container"
            className="fixed z-30
            flex flex-col sm:flex-row w-full h-full
           bg-black bg-opacity-50 transition-colors duration-300"
          >
            <AddInvoiceModal />
          </div>
        )}
      </div>
      {/**
       * w-screen h-screen top-[72px] 
          sm:top-[80px] lg:top-0 lg:left-[103px] 
           bg-11 dark:bg-12 transition-colors duration-300
       */}
      {viewInvoice && (
        <div
          id="viewInvoiceModal-container"
          className="absolute z-20 
          h-screen w-screen justify-center 
          flex flex-col sm:flex-row overflow-y-scroll scrollbar-none
          bg-11 dark:bg-12 transition-colors duration-300"
        >
          <InvoiceView />
          {modalOption && <ActionModal optionSelected={modalOption} />}
        </div>
      )}
    </div>
  );
}

export default App;
