"use client";
import React, { useContext } from "react";
import { AlertOctagon, BadgeCheck, ShoppingCart } from "lucide-react";
import SkeletonProductInfo from "./SkeletonProductInfo";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import CardApi from "../../_utils/CartApi";
import CartContext from "../../_contexts/CartContext";

function productInfo({ productInfo }) {
  const { isSignedIn, user } = useUser();
  const { cart, setCart } = useContext(CartContext);

  const router = useRouter();

  function handleAddToCart() {
    if (isSignedIn) {
      CardApi.addToCart({
        data: {
          username: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          products: [productInfo?.id],
        },
      }).then((res) => {
        setCart((oldData) => [...oldData, { id: res?.data?.data?.id, productInfo }]);
      });
    } else {
      router.push("/sign-in");
    }
  }

  return (
    <div>
      {productInfo ? (
        <div>
          <h2 className="text-[20px]">{productInfo?.attributes?.title}</h2>
          <h2 className="text-[12px] text-gray-400">{productInfo?.attributes?.category}</h2>
          <h2 className="text-[15px] pt-5">
            {productInfo?.attributes?.description[0]?.children[0]?.text}
          </h2>
          <h2 className="text-[11px] text-gray-500 flex gap-2 mt-2 items-center">
            {productInfo?.attributes?.instantDelivery ? (
              <BadgeCheck className="text-green-500 w-5 h-5" />
            ) : (
              <AlertOctagon className="text-red-500 w-5 h-5" />
            )}
            Eligible For Instant Delivery
          </h2>
          <h2 className="text-[23px] text-primary mt-2">{productInfo?.attributes?.price} $</h2>
          <button
            onClick={handleAddToCart}
            className="flex items-center gap-2 capitalize rounded-md mt-3 bg-primary px-9 py-3 text-sm font-medium text-white shadow hover:bg-cyan-600 focus:outline-none "
          >
            <ShoppingCart /> add to card
          </button>
        </div>
      ) : (
        <SkeletonProductInfo />
      )}
    </div>
  );
}

export default productInfo;
