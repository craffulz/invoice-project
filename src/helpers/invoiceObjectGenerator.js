export const invoiceObjectGenerator = (invoice, id, draft) => {
  //Si se encuentra uno identico se vuelve a lanzar

  //Calcular la fecha de caducidad
  const invoiceDate = invoice.invoiceData.invoiceDate;
  console.log(invoiceDate);
  const paymentTerms = +invoice.invoiceData.paymentTerms;
  const paymentDue = paymentTerms
    ? new Date().setDate(invoiceDate.getDate() + paymentTerms)
    : "";

  //Calculamos el total
  const total = invoice.itemList
    .map(({ price, quantity }) => price * quantity)
    .reduce((acc, total) => acc + total, 0);

  //Crear el objeto y devolverlo?

  return {
    id: id,
    paymentDue: paymentDue,
    total: total,
    ...invoice,
    status: draft ? "Draft" : "Pending",
  };
};
