import React, { useContext } from "react";
import { cartcontext } from "../State Management/ContextProvider";
import SingleCartProduct from "../Components/SingleCartProduct";

const Cart = () => {
  const { cart } = useContext(cartcontext);

  // Calculate total items and total price
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-4 flex">
      {/* Cart items */}
      <div className="w-full md:w-1/2 pr-4">
        {cart.length > 0 ? (
          cart.map((product) => (
            <SingleCartProduct key={product.id} propname={product} />
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

      {/* Summary */}
      <div className="w-2/3 md:w-1/2 mt-10 h-60 pl-4 border-gray-400 border-2 rounded-lg justify-around">
        <h3 className="text-lg font-bold m-2">Summary</h3>
        <div className="flex flex-col">
          <div className="flex justify-start p-3 ">
            <span className="font-medium">Total Items:</span>
            <span>{totalItems}</span>
          </div>
          <div className="flex justify-start p-3 ">
            <span className="font-medium">Total Price:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button className="bg-sky-500 hover:bg-sky-600 p-5 w-56 rounded-lg text-white">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
