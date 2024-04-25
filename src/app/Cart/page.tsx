"use client";
import React, { useEffect, useState } from "react";
import { useCartCount } from "../store/cart";
import { useCartId } from "../store/cartProduct";
import { darazArr } from "../utils/data";
import { Tdaraz } from "../utils/types";
import { set } from "zod";
import { CgCloseO } from "react-icons/cg";
import Link from "next/link";
const Cart = () => {
  const { id } = useCartId();

  console.log("this are the product ids which are added to cart", id);
  ["1", "2"];

  const [cartProduct, setCartProduct] = useState<Tdaraz[]>([]);

  const { count } = useCartCount();
  const { setValue } = useCartCount();

  useEffect(() => {
    const products = darazArr.filter((product) =>
      id.some((cart_id) => product.id === cart_id)
    );
    setCartProduct(products);
  }, [id]);

  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  function addQuantity(itemId: string) {
    const newQuantities = { ...quantities };
    newQuantities[itemId] = (newQuantities[itemId] || 1) + 1;
    setQuantities(newQuantities);
    setValue({ count: count + 1 });
  }

  function removeQuantity(itemId: string) {
    const newQuantities = { ...quantities };
    newQuantities[itemId] = (newQuantities[itemId] || 1) - 1;
    setQuantities(newQuantities);
    setValue({ count: count - 1 });
  }
  function removeItem(itemId: string) {
    const updatedCartProduct = cartProduct.filter((item) => item.id !== itemId);

    setCartProduct(updatedCartProduct);

    const newCount = updatedCartProduct.reduce((total, item) => {
      return total + (quantities[item.id] || 1);
    }, 0);

    setValue({ count: newCount });
  }

  return (
    <div className="h-[80vh] ">
      {count === 0 ? (
        <div className="   text-center flex-col">
          <div className=" flex justify-center items-center ">
            <img src="/cart.png" alt="cartImage" className="h-72"></img>
          </div>
          <h1 className="font-serif text-orange-500 text-center p-6 text-3xl uppercase">
            The Cart is empty
          </h1>
          <Link href="/">
            <button
              type="button"
              className=" focus:outline-none text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 rounded-lg text-sm px-3 py-2 "
            >
              Please Return to home page!
            </button>
          </Link>
        </div>
      ) : (
        <>
          <div>
            <table className="text-sm text-left rtl:text-right text-gray-511 ">
              <thead className="text-xs text-gray-711 uppercase bg-gray-51 ">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Image
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Color
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Discount
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Price
                  </th>
                </tr>
              </thead>
              {cartProduct.map((item) => {
                const subTotal = (quantities[item.id] || 1) * item.price;

                return (
                  <tbody key={item.id}>
                    <td className="md-px-3 px-6 h-11 ">
                      <img src={item.image} className="h-11" />
                    </td>
                    <td className="px-4 py-4 line-clamp-1 w-[85%]">
                      {item.name}
                    </td>
                    <td className="px-3 py-4">{item.color}</td>
                    <td className="px-6 py-4 flex">
                      <button
                        onClick={() => addQuantity(item.id)}
                        className="border-2 p-1"
                      >
                        +
                      </button>
                      <div className="p-1">{quantities[item.id] || 1}</div>
                      <button
                        onClick={() => removeQuantity(item.id)}
                        className="border-2 p-1"
                      >
                        -
                      </button>
                    </td>
                    <td className="px-7 py-4">{item.discount}</td>
                    <td className="px-4 py-4">{subTotal}</td>
                    <button onClick={() => removeItem(item.id)}>
                      <CgCloseO />
                    </button>
                  </tbody>
                );
              })}
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
