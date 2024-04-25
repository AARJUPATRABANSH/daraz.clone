"use client";
import React, { Component, useState } from "react";
import Searchbox from "./Searchbox";
import Loginsignup from "./Loginsignup";

import { CiShoppingCart } from "react-icons/ci";
import Language from "./Language";

import { Carousel } from "flowbite-react";
import { Drawer } from "flowbite";
import Page from "./Drawer";

import Link from "next/link";
import { useCartCount } from "../store/cart";
import { useCartId } from "../store/cartProduct";

const headerConstant = [
  {
    id: 1,
    name: "Become a seller",
  },

  {
    id: 2,
    name: "Payment & Recharge",
  },
  {
    id: 3,
    name: "Help & Support",
  },

  {
    id: 4,
    name: "Daraz Logistics Partner",
  },
];

const Navbar = () => {
  // const { id } = useCartId(); //["2","1"]
  const { count } = useCartCount();
  return (
    <>
      <div className="h-24 md:px-12 px-0 bg-[#f85606]">
        <div className="hidden  md:flex pt-1   text-xs gap-x-4  items-center pb-10 md:pb-0 ">
          {headerConstant.map((item) => {
            return (
              <div
                key={item.id}
                className="hover:text-gray-200 cursor-pointer md:text-white text-black "
              >
                {item.name}
              </div>
            );
          })}
        </div>
        <div className="h-16 flex items-center justify-between md:justify-evenly  ">
          <div>
            <Link href="/">
              <img
                src="/logo.png"
                alt="logo"
                className="md:h-12 h-12 cursor-pointer"
              ></img>
            </Link>
          </div>

          <div className="md:flex  items-center hidden  ">
            <div>
              <Searchbox />
            </div>
            <div>
              <Loginsignup />
            </div>
            <div>
              <Language />
            </div>
          </div>
          <div className=" flex items-center md:pt-0 pt-3 gap-2 ">
            <div className="relative inline-flex items-center text-sm font-medium text-center text-white">
              <span className="sr-only">Notifications</span>
              <div className="absolute inline-flex items-center justify-center w-6 h-6   text-orange-500 bg-white border-2 border-white rounded-full -top-2.5 -end-2">
                {/* {id.length } */}
                {count}
              </div>

              <Link
                href="/Cart"
                // onClick={() =>
                //   addtocart(id, productname, discount, color, price)
                // }
              >
                <CiShoppingCart className="text-4xl md:text-white text-black hover:bg-[#DF4D05]" />
              </Link>
            </div>
            <Page />
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
