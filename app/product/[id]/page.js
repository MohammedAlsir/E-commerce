"use client";
import productsApi from "@/app/_utils/ProductsApi";
import React, { useEffect, useState } from "react";
import Breadcrumb from "@/app/_components/Breadcrumb";
import ProductBanner from "../_components/ProductBanner";
import ProductInfo from "../_components/ProductInfo";
import ListProducts from "@/app/_components/ListProducts";
import { usePathname } from "next/navigation";

function page({ params }) {
  const path = usePathname(); // get path
  // -------------------------------------------------------------------------
  //  useStates
  // -------------------------------------------------------------------------
  const [productInfo, setProductInfo] = useState(); // data for single product
  const [productsList, setProductsList] = useState([]); // data for list of products
  // -------------------------------------------------------------------------

  useEffect(() => getProductById_(), [params?.id]); //enf of useEffect

  const getProductById_ = () => {
    productsApi.getProductById(params?.id).then((res) => {
      console.log(res.data.data);
      setProductInfo(res.data?.data);
      getProductByCategory(res.data.data.attributes.category);
    });
  }; // end of getProductInfo function

  const getProductByCategory = (category) => {
    productsApi.getProductListByCategory(category).then((res) => {
      setProductsList(res.data?.data);
    });
  };

  return (
    <div className="px-10 py-8 md:px-28">
      <Breadcrumb path={path} productInfo={productInfo} />
      <div className="grid  grid-cols-1 sm:grid-cols-2  gap-6  mt-10">
        <ProductBanner productInfo={productInfo} />
        <ProductInfo productInfo={productInfo} />
      </div>

      <div>
        <h2 className="mt-36 mb-4 text-xl">Similar Products </h2>
        <ListProducts allProducts={productsList} />
      </div>
    </div>
  ); // end of return
} //end of Page

export default page;
