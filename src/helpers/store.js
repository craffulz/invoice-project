import { create } from "zustand";

const useStore = create((set, get) => {
  const initialDarkMode = JSON.parse(localStorage.getItem("darkMode")) || false;
  const setDarkModeClass = (darkMode) => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const initializeInvoices = JSON.parse(localStorage.getItem("invoices")) || [];

  return {
    //ESTE ES EL QUE HAY QUE CAMBIAR
    /**Este estado es para mostrar el modal de 'DELETE' */
    modalOption: false,
    openModal: (option) => {
      set(() => {
        return { modalOption: option };
      });
    },

    /**
     * viewInvoice is to open the invoice's view.
     * When it is true, a view appear in the interface.
     */
    viewInvoice: false,
    invoicePressed: (invoice) => {
      set(() => {
        return { viewInvoice: invoice };
      });
    },

    /**
     * Similar to the previous one. This one is to render the form
     * to add a new invoice.
     */
    showNewInvoiceLayout: false,
    newInvoiceButtonPressed: () => {
      set((state) => {
        return { showNewInvoiceLayout: !state.showNewInvoiceLayout };
      });
    },

    /**
     * The code below is all that you can do with an invoice.
     * Store invoices in an array, add an invoice to the array,
     * delete it or change the status between 'paid', 'pending' or 'draft'
     */
    invoices: initializeInvoices.length > 0 ? [...initializeInvoices] : [],
    invoicesExists: () => {
      return get().invoices.length > 0;
    },
    addInvoice: (invoice) => {
      set((state) => {
        const storageInvoices = [...state.invoices, invoice];
        localStorage.setItem("invoices", JSON.stringify(storageInvoices));

        return {
          invoices: storageInvoices,
        };
      });
    },
    deleteInvoice: (id) => {
      set((state) => {
        //Buscar invoice
        const index = state.invoices.findIndex((invoice) => invoice.id === id);
        state.invoices.splice(index, 1);
        const storageInvoices = state.invoices;

       

        localStorage.invoices.length > 0
          ? localStorage.setItem("invoices", JSON.stringify(storageInvoices))
          : localStorage.removeItem("invoices");

        return { state: storageInvoices };
      });
    },
    changeStatus: (iD, status) => {
      set((state) => {
        const invoices = state.invoices.map((invoice) => {
          return invoice.id === iD ? { ...invoice, status: status } : invoice;
        });

        localStorage.setItem("invoices", JSON.stringify(invoices));

        return {
          invoices: invoices,
          viewInvoice: invoices.find((invoice) => invoice.id === iD),
        };
      });
    },

    /**
     * DarkMode it is to change the mode of the interface, light or dark.
     */
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
