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
      className="relative flex flex-col lg:flex-row h-screen w-screen bg-11 dark:bg-12 transition-colors duration-300 overflow-scroll scrollbar-none"
    >
      <div id="navbar" className="flex">
        <Navbar />
      </div>

      {actionFormModal && (
        <div
          id="newInvoiceModal-container"
          className="flex flex-col sm:flex-row fixed z-50 w-screen h-screen top-[72px] 
          sm:top-[80px] lg:top-0 lg:left-[103px] 
           bg-black bg-opacity-50 transition-colors duration-300"
        >
          <AddInvoiceModal />
          <div id="sobrante" className="flex-grow"></div>
        </div>
      )}

      {viewInvoice && (
        <div
          id="viewInvoiceModal-container"
          className="absolute z-40 
          flex flex-col w-screen h-screen overflow-x-hidden overflow-y-scroll top-[72px] sm:top-[80px] lg:top-0 lg:left-[103px] 
           bg-11 dark:bg-12 transition-colors duration-300"
        >
          <InvoiceView />
          {modalOption && <ActionModal optionSelected={modalOption} />}
        </div>
      )}

      <div
        id="content"
        className="flex flex-col lg:flex-grow-0 py-10 lg:py-16 w-[327px] sm:w-[672px] lg:w-[730px] gap-y-10 xl:w-[730px] mx-auto sm:p-12 md:p-none"
      >
        <Header />
        <InvoicesRender />
      </div>
    </div>
  );
}

export default App;
