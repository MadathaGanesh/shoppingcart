import React, { useContext } from "react";
import { cartcontext } from "../State Management/ContextProvider";

const SingleCartProduct = ({ propname }) => {
  const { dispatch } = useContext(cartcontext);

  return (
    <div className="border mt-4 p-4 flex flex-row items-start p-6 bg-white rounded-md shadow-md">
      <img
        src={propname.thumbnail}
        alt={propname.title}
        className="w-52 h-52 rounded-md border-gray-200 border-2 mr-6"
      />
      <div className="flex flex-col items-start flex-grow">
        <div className="flex flex-col items-start mb-4">
          <h4 className="text-lg font-bold">{propname.title}</h4>
          <h5 className="text-gray-700">${propname.price}</h5>
        </div>
        <div className="flex items-center mb-4">
          <button className="mr-2 p-2 bg-gray-200 border border-gray-300 rounded transition-colors hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">
            {propname.quantity}
          </button>
          <button
            className="mr-2 p-2 bg-gray-300 rounded transition-colors hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            onClick={() => {
              dispatch({ type: "Decrease", payload: { id: propname.id } });
            }}
          >
            <b>-</b>
          </button>
          <button
            className="p-2 bg-gray-300 rounded transition-colors hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            onClick={() => {
              dispatch({ type: "Increase", payload: { id: propname.id } });
            }}
          >
            <b>+</b>
          </button>
        </div>
        <button
          className="bg-red-500 text-white p-2 rounded transition-colors hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
          onClick={() => {
            dispatch({ type: "Delete", payload: { id: propname.id } });
          }}
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
};

export default SingleCartProduct;
