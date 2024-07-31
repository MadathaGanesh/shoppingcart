import React, { useState } from "react";
import SingleProductPage from "../Components/SingleProductPage";
import Data from ".././Data.json";

const Products = () => {
  const [products, setProducts] = useState(Data.products); // After importing the Data ,we will use here
  return (
    <div className="grid grid-cols-3 m-4 p-20">
      {products.map((item) => (
        <SingleProductPage productProp={item} key={item.id} />
      ))}

      <div></div>
    </div>
  );
};

export default Products;
