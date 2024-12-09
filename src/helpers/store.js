import { create } from "zustand";

//import json from "./assets/data/data.json";

const useStore = create((set, get) => {
  const initialDarkMode = JSON.parse(localStorage.getItem("darkMode")) || false;
  // Setear la clase 'dark' en el <html>
  const setDarkModeClass = (darkMode) => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const initializeInvoices = JSON.parse(localStorage.getItem("invoices")) || [];

  return {
    /**Para actualizar el estado.
     * Esto es una medida provisional, ya que solo nos sirve para actualizar la interfaz.
     * Es decir, solo es para que el 'state' reciba un cambio de estado y actualice el componente,
     * y asi podamos mostrar el status cambiado. De otro modo, creo que deberiamos crear un objeto factura
     * y sobre este trabajar las actualizaciones de estado */
    changedStatus: false,
    changeStatus: () => {
      set((state) => {
        return { changedStatus: !state.chengedStatus };
      });
    },

    /**Este estado es para mostrar el modal de 'DELETE' */
    lete: false,
    deleteClicked: () => {
      set((state) => {
        return { lete: !state.lete };
      });
    },

    /**Este estado es para mostrar o no el view de la factura clickeada */
    viewInvoice: false,
    invoicePressed: (invoice) => {
      set(() => {
        return { viewInvoice: invoice };
      });
    },

    //The state and function below is to show the 'add invoice' modal
    showNewInvoiceLayout: false,
    newInvoiceButtonPressed: () => {
      set((state) => {
        return { showNewInvoiceLayout: !state.showNewInvoiceLayout };
      });
    },

    //invoices is for locate all invoices and be able to render them
    invoices:
      typeof initializeInvoices === "string" ? [] : [...initializeInvoices],
    invoicesExists: () => {
      return get().invoices.length > 0;
    },
    addInvoice: (invoice) => {
      set((state) => {
        const storageInvoices = [...state.invoices, invoice];
        localStorage.setItem("invoices", JSON.stringify(storageInvoices));
        console.log(localStorage.invoices);
        return {
          invoices: storageInvoices,
        };
      });
    },

    deleteInvoice: (id) => {
      set((state) => {
        //Buscar invoice
        const index = state.invoices.findIndex((invoice) => invoice.id === id);
        return { state: state.invoices.splice(index, 1) };
      });
    },
    //darkMode to toggle between dark and normal mode
    darkMode: initialDarkMode,
    toggleDarkMode: () => {
      set((state) => {
        const newDarkMode = !state.darkMode;
        localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
        setDarkModeClass(newDarkMode);
        return { darkMode: newDarkMode };
      });
    },
  };
});

export default useStore;
