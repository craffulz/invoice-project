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
      className="h-screen
      flex flex-col lg:flex-row overflow-hidden
      bg-11 dark:bg-12 transition-colors duration-300"
    >
      
        <Navbar />
     
      <div
        id="content"
        className="h-full
        flex flex-col flex-grow overflow-hidden"
      >
        <div
          id="header-invoice-container"
          className="relative
          flex flex-col flex-grow self-center py-8 h-full 
          w-[327px] sm:w-[672px] lg:w-[730px]
          gap-y-10"
        >
          <Header />
          <InvoicesRender />
        </div>

        {actionFormModal && (
          <div
            id="newInvoiceModal-container"
            className="fixed z-50
            flex flex-col sm:flex-row w-full h-full
           bg-black bg-opacity-50 transition-colors duration-300"
          >
            <AddInvoiceModal />
          </div>
        )}

        {viewInvoice && (
          <div
            id="viewInvoiceModal-container"
            className="pt-4 pb-24 sm:pb-0
            lg:justify-center
            fixed z-30
            flex flex-col w-full h-full
           bg-11 dark:bg-12 transition-colors duration-300"
          >
            <InvoiceView />
            {modalOption && <ActionModal optionSelected={modalOption} />}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
