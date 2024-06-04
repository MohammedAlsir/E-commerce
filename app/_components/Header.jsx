"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import logo from "../../public/logo.svg";
import { UserButton, useUser } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import CartContext from "../_contexts/CartContext";
import CartApi from "../_utils/CartApi";
import Cart from "../_components/Cart";

const Header = () => {
  const { user, isSignedIn } = useUser();
  const [isLoggedIn, setIsLoggedIn] = useState();
  const { cart, setCart } = useContext(CartContext);
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    // console.log("bannner", user.primaryEmailAddress.emailAddress);
    setIsLoggedIn(window.location.href.toString().includes("sign-in"));
  }, []);

  useEffect(() => {
    user && getCartItem();
  }, [user]);

  const getCartItem = () =>
    CartApi.getCartData(user.primaryEmailAddress.emailAddress).then((res) => {
      console.log("bannner", res);
      res?.data?.data.forEach((item) => {
        setCart((oldCart) => [
          ...oldCart,
          {
            id: item.id,
            product: item?.attributes?.products?.data[0],
          },
        ]);
      });
    });

  // const isLoggedIn = window.location.href.toString().includes("sign-in");

  return (
    !isLoggedIn && (
      <header className="bg-white shadow-sm mb-1">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <Image src={logo} alt="Logo" width={50} height={50} />

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link href="/" className="text-gray-500 transition hover:text-primary">
                    Home
                  </Link>
                </li>

                {/* <li>
                  <a className="text-gray-500 transition hover:text-primary" href="#">
                    Careers
                  </a>
                </li> */}

                <li>
                  <a className="text-gray-500 transition hover:text-primary" href="#">
                    History
                  </a>
                </li>

                <li>
                  <a className="text-gray-500 transition hover:text-primary" href="#">
                    Services
                  </a>
                </li>

                {/* <li>
                  <a className="text-gray-500 transition hover:text-primary" href="#">
                    Projects
                  </a>
                </li> */}

                <li>
                  <a className="text-gray-500 transition hover:text-primary" href="#">
                    About Us
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              {!isSignedIn ? (
                <div className="sm:flex sm:gap-4">
                  <Link
                    className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-cyan-600"
                    href="/sign-in"
                  >
                    Login
                  </Link>

                  <a
                    className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary transition hover:text-cyan-600 sm:block"
                    href="#"
                  >
                    Register
                  </a>
                </div>
              ) : (
                <div className="flex items-center gap-5 relative">
                  <h2 className="flex gap-1 cursor-pointer" onClick={() => setOpenCart(!openCart)}>
                    <ShoppingCart />({cart?.length})
                  </h2>
                  <UserButton afterSignOutUrl="/" />
                  {openCart && <Cart />}
                </div>
              )}

              <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    )
  );
};

export default Header;
