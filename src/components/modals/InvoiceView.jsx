import useStore from "../../helpers/store";
import arrowLeft from "../../assets/icon-arrow-left.svg";
import Status from "../buttons/Status";
import Edit from "../buttons/Edit";
import Delete from "../buttons/Delete";
import MarkAsPaid from "../buttons/MarkAsPaid";
import ItemRecipe from "../ItemRecipe";
/**Acuerdate de quitar los margenes inferiores que no necesites realmente */
const InvoiceView = () => {
  const {
    viewInvoice: invoice,
    invoicePressed,
    deleteClicked,
    changeStatus,
  } = useStore();

  return (
    <div
      id="view-invoice-container"
      className="grid grid-cols-2 mt-4 w-screen lg:w-[730px] lg:self-center gap-y-3 overflow-scroll scrollbar-none
       font-spartan text-black dark:text-white"
    >
      <div
        id="go-back"
        className="flex flex-row h-[23px] mx-5 my-4 col-span-2 items-center"
      >
        <div
          className="flex flex-row h-[32px] gap-5 items-center cursor-pointer"
          onClick={() => invoicePressed(false)}
        >
          <img
            src={arrowLeft}
            alt="go back arrow"
            className="flex h-2 self-center"
          />
          <p className="flex font-spartan font-bold dark:text-white">Go back</p>
        </div>
      </div>

      <div
        id="status-container"
        className="-sm h-[91px] flex mx-4 col-span-2 sm:col-span-1 sm:mr-0 sm:rounded-r-none
         dark:bg-3 bg-white px-5 rounded-lg"
      >
        <div className="flex flex-row flex-grow justify-between sm:justify-normal sm:gap-8 items-center">
          <span className="flex font-semibold text-7 dark:text-7">Status</span>
          <Status status={invoice.status} />
        </div>
      </div>

      <div
        id="buttons-container"
        className="flex flex-row h-[91px] row-start-4 items-center justify-around px-5 col-span-2 sm:col-span-1 sm:col-start-2 sm:row-start-2 sm:rounded-l-none sm:mr-4
      bg-white dark:bg-3 rounded-xl"
      >
        <div>
          <Edit />
        </div>
        <div onClick={deleteClicked}>
          <Delete />
        </div>
        <div
          onClick={() => {
            invoice.status = "paid";
            changeStatus();
          }}
        >
          <MarkAsPaid />
        </div>
      </div>

      <div
        id="info-container"
        className="shadow-sm flex flex-col mx-4 dark:bg-3 bg-white p-5 rounded-lg gap-y-8 col-span-2"
      >
        <div
          id="id-project-name-client-adress"
          className="flex flex-col gap-y-8 md:flex-row md:justify-between col-span-5"
        >
          <div id="id-project-name" className="flex flex-col ">
            <p className="flex font-bold">
              <span className="text-6">#</span>
              {invoice.id}
            </p>
            <p className="text-7 dark:text-5 font-semibold text-sm">
              {invoice.invoiceData.projectDescription}
            </p>
          </div>

          <div
            id="from-adress"
            className="flex flex-col text-left md:text-right font-semibold text-7 dark:text-5"
          >
            <p>{invoice.from.streetAdress}</p>
            <p>{invoice.from.city}</p>
            <p>{invoice.from.postCode}</p>
            <p>{invoice.from.country}</p>
          </div>
        </div>

        <div
          id="to-info"
          className="flex flex-col gap-y-8 sm:flex-row sm:gap-14 md:gap-20 col-span-5"
        >
          <div id="dates-adress" className="flex flex-row gap-8 md:gap-20 ">
            <div id="dates" className="flex flex-col gap-y-8 justify-between ">
              <div id="invoiceDate" className="flex flex-col gap-y-3">
                <p className="text-7 text-sm dark:text-5 font-semibold">
                  Invoice Date
                </p>
                <p className="font-bold">
                  {new Date(
                    invoice.invoiceData.invoiceDate.toString()
                  ).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div id="paymentDue" className="flex flex-col gap-y-3">
                <p className="text-7 text-sm dark:text-5 font-semibold">
                  Payment Due
                </p>
                <p className="font-bold">
                  {new Date(invoice.paymentDue).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>

            <div id="adress-name" className="flex flex-col gap-y-3 sm:self-end">
              <div id="billTo">
                <p className="text-sm font-semibold text-7 dark:text-5">
                  Bill To
                </p>
              </div>
              <div id="nameAdress" className="flex flex-col gap-2">
                <div id="name">
                  <p className="font-bold">{invoice.to.name}</p>
                </div>
                <div
                  id="to-adress"
                  className="flex flex-col text-left md:text-right font-semibold text-7 dark:text-5"
                >
                  <p>{invoice.to.streetAdress}</p>
                  <p>{invoice.to.city}</p>
                  <p>{invoice.to.postCode}</p>
                  <p>{invoice.to.country}</p>
                </div>
              </div>
            </div>
          </div>
          <div id="senTo" className="flex flex-col gap-y-3">
            <p className="font-semibold text-sm text-7 dark:text-5">Sent to</p>
            <p className="font-bold">{invoice.to.email}</p>
          </div>
        </div>
        <div
          id="itemsList"
          className="flex flex-col bg-11 dark:bg-4 rounded-xl pt-6 sm:pt-0"
        >
          <div
            id="titles"
            className="hidden sm:grid sm:grid-cols-10 place-items-end p-8 pb-0 mb-6
            font-semibold text-sm text-7 dark:text-5"
          >
            <p className="col-span-4 place-self-start">Item Name</p>
            <p className="col-span-1 place-self-center col-start-6">QTY.</p>
            <p className="col-span-2">Price</p>
            <p className="col-span-2">Total</p>
          </div>
          {invoice.itemList.map((item, index) => {
            return <ItemRecipe item={item} key={index} />;
          })}
          <div
            id="total"
            className="flex flex-row h-20 justify-between items-center
           text-white bg-13 p-8 rounded-b-xl"
          >
            <p className="font-semibold text-sm">Amount Due</p>

            <p className="text-xl font-bold">&pound; {invoice.total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceView;
