/* eslint-disable react/prop-types */
const ItemRecipe = ({ item }) => {
  
  const name = item.itemName;
  const price = item.price;
  const quantity = item.quantity;
  const total = price * quantity;

  return (
    <div
      id="item"
      className="flex flex-row justify-between items-center px-8 mb-4
          sm:grid sm:grid-cols-10"
    >
      <div
        id="name-qty-price"
        className="flex flex-col sm:grid sm:grid-cols-8 sm:col-span-8 justify-between"
      >
        <div id="name" className="font-bold sm:col-span-4">
          <p className="col-span-4">{name}</p>
        </div>
        <div
          id="qty-price"
          className="flex flex-row gap-3 sm:grid sm:grid-cols-4 sm:col-span-4 place-items-end
               text-7 dark:text-5 font-semibold"
        >
          <p className="sm:col-span-1 sm:col-start-2 place-self-center">
            {quantity}
          </p>
          <p className="sm:hidden"> x </p>
          <p className="sm:col-span-2">&pound; {price}</p>
        </div>
      </div>
      <div
        id="total"
        className="flex font-bold sm:col-span-2 sm:place-self-end"
      >
        <p>&pound; {total} </p>
      </div>
    </div>
  );
};

export default ItemRecipe;
