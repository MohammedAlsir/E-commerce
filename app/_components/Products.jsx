"use client";

import React, { useState, useEffect } from "react";
import productsApi from "../_utils/ProductsApi";
import ListProducts from "./ListProducts";

const Products = () => {
  const [productsList, setProductsList] = useState([]);
  useEffect(() => {
    getLatestProducts();
  }, []);
  // end of useEffect
  const getLatestProducts = () => {
    productsApi.getLatestProducts().then((res) => {
      setProductsList(res.data?.data);
      console.log(res.data?.data);
    });
  }; //end of getLatestProducts function
  return (
    <section className="">
      <div className="px-10 md:px-20">
        <h2 className="py-4 text-2xl capitalize">Our latest Products </h2>
        <ListProducts allProducts={productsList} />
      </div>
    </section>
  );
};

export default Products;
