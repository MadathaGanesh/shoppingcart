import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { cartcontext } from "../State Management/ContextProvider";

const NavBar = () => {
  const { cart } = useContext(cartcontext);
  return (
    <div className="p-4 bg-gray-800 text-white">
      <h3 className="text-lg font-bold mb-4 text-center">
        Welcome to Shopping Cart
      </h3>
      <nav>
        <ul className="flex flex-row space-x-4 justify-around font-medium">
          <li>
            <NavLink
              exact
              to="/"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "text-white"
              }
            >
              <div className="flex flex-row m-2">
                <FaHome className="mr-3 mt-1" />
                Home
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "text-white"
              }
            >
              <div className="flex flex-row m-2">
                <BsCart className="mr-3 mt-1" /> <span>Cart - </span>{" "}
                {cart.length}
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
