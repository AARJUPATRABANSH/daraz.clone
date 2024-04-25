"use client";

import React, { useEffect, useState } from "react";
import { useCartCount } from "@/app/store/cart";
import { useCartId } from "@/app/store/cartProduct";
import { darazArr } from "@/app/utils/data";
import { Tdaraz } from "@/app/utils/types";
import { Button } from "flowbite-react";
import Link from "next/link";
import { Rating } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import { IoMdShare } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";

type ItemsDetailsProps = {
  items_id: string;
};

const page = ({ params }: { params: { id: string } }) => {
  const itemsId = params.id;

  return (
    <div>
      <ItemsDetails items_id={itemsId} />
    </div>
  );
};

const ItemsDetails = ({ items_id }: ItemsDetailsProps) => {
  const [darazDetails, setdarazDetails] = useState<Tdaraz | null>(null);

  const [cart, setCart] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);
  const { setItemsValue, id } = useCartId();
  const { setValue } = useCartCount();
  const { count } = useCartCount();

  const { id: cartId } = useCartId();

  useEffect(() => {
    const gift = darazArr.find((item) => item.id === items_id);

    if (gift) {
      setdarazDetails(gift);
    }
  }, [items_id]);
  console.log("test", id);

  useEffect(() => {
    const cartQuantity = darazArr.find((items) => cartId.includes(items_id));

    if (cartQuantity) {
      setCart(cartQuantity.quantity);
    }
  }, [cartId]);

  function handleAddToCart() {
    setButtonClicked(true);
    setCart((prevCart) => prevCart + 1);
    setValue({ count: count + 1 });
    setItemsValue(items_id);
  }
  console.log("quantity", cart);
  return (
    <div className="flex items-center justify-center h-full ">
      {darazDetails ? (
        <div className="flex gap-11 rounded-lg shadow w-[75%] p-5 scroll-smooth">
          <img
            src={darazDetails.image}
            alt="images"
            className="h-64 w-64 hover:rotate-6"
          />

          <div>
            <h1 className="text-[22px] font-[400px] ">{darazDetails.name}</h1>
            <div className="flex text-xs justify-between ">
              <div className="flex items-center">
                <Rating className="text-ms">
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star filled={false} />
                  <p className=" p-2 text-[#16849B]">
                    {darazDetails.rating} Ratings{" "}
                  </p>
                </Rating>
                |<p className="p-1 text-[#16849B]">{darazDetails.ansque}</p>
              </div>
              <div className="text-2xl flex gap-4 pr-7">
                <IoMdShare className="text-[#9E9E9E]" />
                <IoMdHeartEmpty className="text-[#1E1E1E]" />
              </div>
            </div>
            <div className="text-xs flex gap-x-1 text-[#A19E9E] pb-4">
              {" "}
              Brand :
              <p className="text-xs text-[#16849B] gap-x-1">
                {"  "}
                {darazDetails.brand}{" "}
              </p>
              | <p className="text-xs text-[#16849B]"> {darazDetails.def}</p>
            </div>
            <hr className="w-50%  ml-0 gap-4" />
            <p className="text-[30px]  text-[#f57224] ">
              Rs.{darazDetails.price}
            </p>{" "}
            <p className="text-xs pb-2">
              <del className="text-[#9E9E9E]">{darazDetails.dis}</del> -
              {darazDetails.discount}%
            </p>
            <div>
              <div className="flex items-center text-[#A19E9E] gap-x-3 py-5">
                <p className="text-[14px]"> Promotions </p>
                <div className="flex text-xs bg-[#f57224] text-white p-1">
                  {" "}
                  Min. Spend Rs. 699 Capped at Rs. 110
                  <Dropdown label="" inline className="items-center">
                    <Dropdown.Item className="flex">
                      Delivery Charges(s)
                    </Dropdown.Item>
                    <Dropdown.Item> Platform Voucher(s)</Dropdown.Item>
                  </Dropdown>{" "}
                </div>
              </div>
            </div>
            <div className="flex w-[95%]">
              <button
                type="button"
                className="text-white bg-[#2ABBE8] hover:bg-[#229abf] focus:ring-orange-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 w-[225px] h-[44px]"
              >
                Buy Now
              </button>
              {buttonClicked ? (
                <button
                  id="cart"
                  disabled
                  className="text-white bg-[#f57224] hover:bg-[#f57125e0] focus:ring-orange-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 "
                >
                  Already added
                </button>
              ) : (
                <button
                  id="cart"
                  onClick={() => {
                    handleAddToCart();
                  }}
                  className="text-white bg-[#f57224] hover:bg-[#f57125e0] focus:ring-orange-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600  focus:outline-none w-[225px] h-[44px]"
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Not found</h1>
        </div>
      )}
    </div>
  );
};
export default page;
