import Image from "next/image";
import React, { useContext } from "react";
import CartContext from "../../_contexts/CartContext";

function productBanner({ productInfo }) {
  const { cart, setCart } = useContext(CartContext);

  console.log(cart);
  // console.log("he", product.attributes.banner.data.attributes.url);
  // console.log("ffff", productInfo?.attributes?.title);
  return (
    <div>
      {productInfo?.attributes?.banner?.data?.attributes?.url ? (
        <Image
          src={productInfo?.attributes?.banner?.data?.attributes?.url}
          width={400}
          height={400}
          alt="banner product"
          className="rounded-lg object-cover w-full"
        />
      ) : (
        <div className="w-full h-[300px]  bg-slate-200 rounded-lg animate-pulse"></div>
      )}
    </div>
  );
}

export default productBanner;
