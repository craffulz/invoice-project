export const defaultValues = {
  from: {
    streetAdress: "",
    city: "",
    postCode: "",
    country: "",
  },
  to: {
    name: "",
    email: "",
    streetAdress: "",
    city: "",
    postCode: "",
    country: "",
  },
  invoiceData: {
    invoiceDate: new Date().toISOString().split("T")[0],
    projectDescription: "",
  },
  itemList: [
    {
      itemName: "",
      quantity: 1,
      price: 0,
    },
  ],
};
