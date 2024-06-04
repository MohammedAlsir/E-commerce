"use client";
import Image from "next/image";
import React from "react";
import logo from "../../public/logo.svg";
import { useUser } from "@clerk/nextjs";

const Footer = () => {
  const { user } = useUser();

  return (
    user && (
      <footer className="bg-gray-50 mt-5">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-600 sm:justify-start">
              <Image src={logo} alt="Logo" width={50} height={50} />
            </div>

            <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
              Copyright &copy; 2022. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    )
  );
};

export default Footer;
