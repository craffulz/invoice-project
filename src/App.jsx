import Navbar from "./components/Navbar";
import Header from "./components/Header";
import InvoicesRender from "./components/InvoicesRender";
import AddInvoiceModal from "./components/modals/AddInvoiceModal";
import InvoiceView from "./components/modals/InvoiceView";
import useStore from "./helpers/store";
import ActionModal from "./components/modals/ActionModal";
import { useState, useEffect } from "react";
function App() {
  const { viewInvoice, modalOption, actionFormModal } = useStore();

  /**Logica para que evitar el comportamiento default al darle al boton de atras */
  const [counter, setCounter] = useState(0);
  console.log(counter);
  useEffect(() => {
    const handleBackButton = () => {
      if (counter === 0) {
        console.log("Entro aqui", counter);
        window.history.pushState(null, "", window.location.href);
        alert(
          "To navigate through the App, use the buttons in the interface.\n" +
            "To exit, close this popup and press 'back' again."
        );
        setCounter(1);
      } else {
        console.log("Thala!");
      }
    };

    // Evita que el usuario retroceda en el historial
    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [counter]);

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
          flex flex-col flex-grow self-center py-12 h-full 
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
