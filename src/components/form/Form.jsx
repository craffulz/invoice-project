import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import InvoiceData from "./InvoiceData";
import ItemsList from "./ItemsList";
import Discard from "./../buttons/Discard";
import SaveAsDraft from "./../buttons/SaveAsDraft";
import SaveAndSend from "./../buttons/SaveAndSend";
import useStore from "../../helpers/store";
import { schema } from "../../helpers/schema";
import { defaultValues } from "./../../helpers/defaultValues";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { invoiceObjectGenerator } from "../../helpers/invoiceObjectGenerator";
import { idGenerator } from "../../helpers/idGenerator";
const Form = () => {
  const {
    openFormModal,
    invoicePressed,
    addInvoice,
    editInvoice,
    actionFormModal,
    viewInvoice: invoice,
  } = useStore();

  const defValues = actionFormModal === "new" ? defaultValues : invoice;

  const methods = useForm({
    mode: "onSubmit",
    resolver: zodResolver(schema),
    defaultValues: defValues,
  });

  const handleDraft = () => {
    console.log(methods.getValues());
    const id = idGenerator();
    //Enviamos los datos a la store
    addInvoice(invoiceObjectGenerator(methods.getValues(), id, true));
    //Al hacer submit cerramos el formulario
    openFormModal(false);
  };

  const onSubmit = (data) => {
    console.log("form submited", data);

    if (actionFormModal === "new") {
      //Creamos id
      const id = idGenerator();
      //Enviamos los datos a la store
      addInvoice(invoiceObjectGenerator(data, id));
      //Al hacer submit cerramos el formulario
      openFormModal(false);
      //Al hacer submit mostrar mostrar un mensaje de que la factura ha sido aniadida
    } else if (actionFormModal === "edit") {
      //Metodo de la store que modifica todos los campos de la invoice pasando como argumento
      // la invoice creada con el mismo id que tenia antes
      const invoiceEdited = invoiceObjectGenerator(data, invoice.id);
      editInvoice(invoiceEdited);
      openFormModal(false);
      invoicePressed(invoiceEdited);
    }
  };

  const onError = (error) => {
    console.log(error);
  };

  return (
    <div id="newInvoiceForm-container" className="w-full flex flex-col">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit, onError)}
          className="flex flex-col gap-y-10"
        >
          <BillFrom />
          <BillTo />
          <InvoiceData />
          <ItemsList />

          <div
            id="submit-buttons-container"
            className="flex flex-row mb-20 justify-between"
          >
            <div
              id="SaveAsDraft-container"
              className="self-start"
              onClick={() => {
                openFormModal(false);
              }}
            >
              <Discard />
            </div>
            <div
              id="draft-save-container"
              className="flex self-end flex-row gap-2"
            >
              <button type="button" onClick={handleDraft}>
                <SaveAsDraft />
              </button>

              <SaveAndSend />
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Form;
