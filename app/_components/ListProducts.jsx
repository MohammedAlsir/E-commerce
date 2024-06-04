// "use client";

import React from "react";
import ProductsItem from "./ProductsItem";

const ListProducts = ({ allProducts }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {allProducts.map((product) => (
        <ProductsItem product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ListProducts;
