"use client";
import { url } from "inspector";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { darazArr } from "./utils/data";
import SimpleSlider from "./components/Carosuel";
import Context from "./components/context";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <SimpleSlider />
      <div className=" justify-center grid grid-cols-3 md:grid md:grid-cols-6  gap-x-3 gap-y-4 px-12 m-6">
        {darazArr.map((data) => {
          return (
            <div
              key={data.id}
              onClick={() => router.push(`/Daraz/${data.id}`)}
              className="hover:bg-orange-50 p-4 h-70 cursor-pointer shadow-md justify-items-center"
            >
              <img
                src={data.image}
                alt="image"
                className=" h-[150px]  sm:object-cover   rounded-md  "
              />
              <h1 className="text-sm font-normal line-clamp-2 ">
                {" "}
                {data.name}
              </h1>
              <p className="text-sm">Discount : {data.discount}</p>

              <p className=" text-orange-500  hover:text-orange-800 text-sm">
                Price: {data.price}
              </p>
              <p>Rating:{data.rating}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
